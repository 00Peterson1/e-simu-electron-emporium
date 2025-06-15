import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useToast } from '../hooks/use-toast';
import { CreditCard, Lock } from 'lucide-react';
import { supabase } from "@/integrations/supabase/client";
import PersonalInfoSection from "./checkout/PersonalInfoSection";
import ShippingSection from "./checkout/ShippingSection";
import PaymentMethodSection from "./checkout/PaymentMethodSection";
import { formatPhoneForMpesa } from "../utils/phone";

type CheckoutFormProps = {
  total: number;
  clearCart: () => void;
};

const CheckoutForm: React.FC<CheckoutFormProps> = ({ total, clearCart }) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
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
  });
  const [isMpesaLoading, setIsMpesaLoading] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const requiredFields = [
      'firstName', 'lastName', 'email', 'address', 'city', 'state', 'zipCode', 'paymentMethod'
    ];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);

    if (missingFields.length > 0) {
      toast({
        title: "Please fill in all required fields",
        description: "Some information is missing from your order.",
        variant: "destructive",
      });
      return;
    }

    if (formData.paymentMethod === "mpesa") {
      setIsMpesaLoading(true);
      const formattedPhone = formatPhoneForMpesa(formData.phone);
      if (!formattedPhone) {
        toast({
          title: "Invalid Phone Number",
          description: "Mpesa phone must start with 07... or 2547... and be valid.",
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
          description: error?.message || "Could not initiate payment.",
          variant: "destructive",
        });
      } finally {
        setIsMpesaLoading(false);
      }
      return;
    }

    // Card or other payment: show order confirmation & clear cart
    toast({
      title: "Order placed successfully!",
      description: `Thank you, ${formData.firstName}! Your order has been confirmed.`,
    });

    clearCart();
    navigate("/");
  };

  const handleMpesaPayment = async (formData: any, total: number) => {
    try {
      setIsProcessing(true);
      const { data, error } = await supabase.functions.invoke("mpesa-stk", {
        body: {
          phone: formData.phone,
          amount: Math.round(total),
        },
      });
      if (error || data?.error) {
        throw new Error(data?.error || error.message || "Mpesa error");
      }
      toast({
        title: "Check your phone!",
        description: "An M-Pesa prompt has been sent to your phone. Enter your PIN to complete the payment.",
      });
      clearCart();
      navigate("/");
      return;
    } catch (err: any) {
      throw err;
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PersonalInfoSection formData={formData} handleInputChange={handleInputChange} />
      <ShippingSection formData={formData} handleInputChange={handleInputChange} />
      <PaymentMethodSection formData={formData} setFormData={setFormData} handleInputChange={handleInputChange} />
      <Button type="submit" className="tech-button w-full text-lg py-4" disabled={isMpesaLoading}>
        <Lock size={20} className="mr-2" />
        {isMpesaLoading
          ? "Processing M-Pesa Payment..."
          : `Complete Order - KSh ${total.toLocaleString('en-KE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
      </Button>
    </form>
  );
};

export default CheckoutForm;
