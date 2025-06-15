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

type CheckoutFormProps = {
  total: number;
  clearCart: () => void;
};

const formatPhoneForMpesa = (phone: string) => {
  // Remove spaces, dashes, etc.
  let cleaned = phone.replace(/\D/g, '');
  // Handle 07XXXXXXXX or 2547XXXXXXXX formats
  if (cleaned.length === 10 && cleaned.startsWith('07')) {
    return '254' + cleaned.substring(1);
  }
  if (cleaned.length === 12 && cleaned.startsWith('2547')) {
    return cleaned;
  }
  return null; // Invalid format
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

    // Mpesa: validate phone and process
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
        // If we get here, STK request sent successfully, success message will be shown from handleMpesaPayment!
      } catch (error: any) {
        toast({
          title: "M-Pesa Error",
          description: error?.message || "Could not initiate payment.",
          variant: "destructive",
        });
      } finally {
        setIsMpesaLoading(false);
      }
      return; // Prevent generic success toast below, handleMpesaPayment shows its own
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
          phone: formData.phone, // formatted already!
          amount: Math.round(total),
        },
      });
      if (error || data?.error) {
        throw new Error(data?.error || error.message || "Mpesa error");
      }
      toast({
        title: "Check your phone!",
        description:
          "An M-Pesa prompt has been sent to your phone. Enter your PIN to complete the payment.",
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
      {/* Personal Information */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName">First Name *</Label>
            <Input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="mt-1"
              required
            />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name *</Label>
            <Input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="mt-1"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1"
              required
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              className="mt-1"
            />
          </div>
        </div>
      </div>

      {/* Shipping Address */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
        <div className="space-y-4">
          <div>
            <Label htmlFor="address">Street Address *</Label>
            <Input
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="mt-1"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="city">City *</Label>
              <Input
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="mt-1"
                required
              />
            </div>
            <div>
              <Label htmlFor="state">State *</Label>
              <Input
                id="state"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                className="mt-1"
                required
              />
            </div>
            <div>
              <Label htmlFor="zipCode">ZIP Code *</Label>
              <Input
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
                className="mt-1"
                required
              />
            </div>
          </div>
        </div>
      </div>

      {/* Payment Method */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
          <CreditCard size={20} />
          <span>Payment Method</span>
        </h2>
        <div className="space-y-4">
          <Select
            value={formData.paymentMethod}
            onValueChange={(value) => setFormData({ ...formData, paymentMethod: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select payment method" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="card">Card</SelectItem>
              <SelectItem value="mpesa">Mpesa</SelectItem>
            </SelectContent>
          </Select>

          {formData.paymentMethod === "card" && (
            <div className="space-y-4 pt-4 border-t border-border">
              <div>
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  className="mt-1"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiryDate">Expiry Date</Label>
                  <Input
                    id="expiryDate"
                    name="expiryDate"
                    placeholder="MM/YY"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="cvv">CVV</Label>
                  <Input
                    id="cvv"
                    name="cvv"
                    placeholder="123"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>
              </div>
            </div>
          )}

          {formData.paymentMethod === "mpesa" && (
            <div className="space-y-2 pt-4 border-t border-border">
              <Label htmlFor="mpesaPhone">M-Pesa Phone Number</Label>
              <Input
                id="mpesaPhone"
                name="phone"
                placeholder="e.g. 07XXXXXXXX"
                value={formData.phone}
                onChange={handleInputChange}
                className="mt-1"
                required
              />
              <p className="text-xs text-muted-foreground">
                Ensure your phone is on and able to receive the STK push.
              </p>
            </div>
          )}
        </div>
      </div>

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
