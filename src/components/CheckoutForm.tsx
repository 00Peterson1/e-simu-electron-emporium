import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { Button } from './ui/button';
import { Lock } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import { supabase } from "@/integrations/supabase/client";
import PersonalInfoSection from "./checkout/PersonalInfoSection";
import ShippingSection from "./checkout/ShippingSection";
import PaymentMethodSection from "./checkout/PaymentMethodSection";
import { formatPhoneForMpesa } from "../utils/phone";

type CheckoutFormProps = {
  total: number;
  clearCart: () => void;
};

const EMPTY_FORM = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  state: '',
  zipCode: '',
  paymentMethod: '',
  cardNumber: '',
  expiryDate: '',
  cvv: '',
};

const CheckoutForm: React.FC<CheckoutFormProps> = ({ total, clearCart }) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({ ...EMPTY_FORM });
  const [isMpesaLoading, setIsMpesaLoading] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  // Universal input change handler
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Collect required fields based on payment method
    let requiredFields = [
      'firstName', 'lastName', 'email', 'address', 'city', 'state', 'zipCode', 'paymentMethod'
    ];
    if (formData.paymentMethod === "card") {
      requiredFields = [...requiredFields, 'cardNumber', 'expiryDate', 'cvv'];
    }
    if (formData.paymentMethod === "mpesa") {
      requiredFields = [...requiredFields, 'phone'];
    }
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);

    if (missingFields.length > 0) {
      toast({
        title: "Please fill in all required fields",
        description: "Some information is missing from your order.",
        variant: "destructive",
      });
      return;
    }

    // Handle payment method logic
    if (formData.paymentMethod === "mpesa") {
      setIsMpesaLoading(true);
      const formattedPhone = formatPhoneForMpesa(formData.phone);
      if (!formattedPhone) {
        toast({
          title: "Invalid Phone Number",
          description: "Mpesa phone must start with 07..., 2547..., or 7... and be valid.",
          variant: "destructive",
        });
        setIsMpesaLoading(false);
        return;
      }
      try {
        await handleMpesaPayment({ ...formData, phone: formattedPhone }, total);
      } catch (error: any) {
        toast({
          title: "M-Pesa Error",
          description: error?.message || "Could not initiate M-Pesa payment.",
          variant: "destructive",
        });
        setIsMpesaLoading(false);
      }
      return;
    }

    // If paying by card (simulate card payment for now)
    toast({
      title: "Order placed successfully!",
      description: `Thank you, ${formData.firstName}! Your card order has been confirmed.`,
    });
    clearCart();
    navigate("/");
    setFormData({ ...EMPTY_FORM });
  };

  // M-Pesa handler
  const handleMpesaPayment = async (submitData: any, total: number) => {
    try {
      setIsProcessing(true);
      const { data, error } = await supabase.functions.invoke("mpesa-stk", {
        body: {
          phone: submitData.phone,
          amount: Math.round(total),
        },
      });

      // ---- IMPROVED ERROR HANDLING STARTS HERE ----
      if (error) {
        throw new Error(error.message || "M-Pesa error");
      }
      if (data && typeof data === "object" && data.error) {
        throw new Error(data.error);
      }
      // ---- IMPROVED ERROR HANDLING ENDS HERE ----

      toast({
        title: "Check your phone!",
        description: "An M-Pesa prompt has been sent. Enter your PIN to complete the payment.",
      });
      clearCart();
      navigate("/");
      setFormData({ ...EMPTY_FORM });
    } catch (err: any) {
      throw err;
    } finally {
      setIsProcessing(false);
      setIsMpesaLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PersonalInfoSection formData={formData} handleInputChange={handleInputChange} />
      <ShippingSection formData={formData} handleInputChange={handleInputChange} />
      <PaymentMethodSection
        formData={formData}
        setFormData={setFormData}
        handleInputChange={handleInputChange}
      />
      <Button
        type="submit"
        className="tech-button w-full text-lg py-4"
        disabled={isMpesaLoading || isProcessing}
      >
        <Lock size={20} className="mr-2" />
        {isMpesaLoading || isProcessing
          ? formData.paymentMethod === "mpesa"
            ? "Processing M-Pesa Payment..."
            : "Processing..."
          : `Complete Order - KSh ${total.toLocaleString('en-KE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
        }
      </Button>
    </form>
  );
};

export default CheckoutForm;
