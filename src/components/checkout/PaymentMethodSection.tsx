
import React from "react";
import { CreditCard } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface Props {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PaymentMethodSection: React.FC<Props> = ({
  formData,
  setFormData,
  handleInputChange
}) => (
  <div className="bg-card border border-border rounded-lg p-6">
    <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
      <CreditCard size={20} />
      <span>Payment Method</span>
    </h2>
    <div className="space-y-4">
      <Select
        value={formData.paymentMethod}
        onValueChange={value => setFormData((prev: any) => ({
          ...prev,
          paymentMethod: value,
          // Reset payment info fields when switching
          cardNumber: '',
          expiryDate: '',
          cvv: '',
          phone: '',
        }))}
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
            <Label htmlFor="cardNumber">Card Number *</Label>
            <Input
              id="cardNumber"
              name="cardNumber"
              placeholder="1234 5678 9012 3456"
              value={formData.cardNumber}
              onChange={handleInputChange}
              className="mt-1"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="expiryDate">Expiry Date *</Label>
              <Input
                id="expiryDate"
                name="expiryDate"
                placeholder="MM/YY"
                value={formData.expiryDate}
                onChange={handleInputChange}
                className="mt-1"
                required
              />
            </div>
            <div>
              <Label htmlFor="cvv">CVV *</Label>
              <Input
                id="cvv"
                name="cvv"
                placeholder="123"
                value={formData.cvv}
                onChange={handleInputChange}
                className="mt-1"
                required
              />
            </div>
          </div>
        </div>
      )}
      {formData.paymentMethod === "mpesa" && (
        <div className="space-y-2 pt-4 border-t border-border">
          <Label htmlFor="mpesaPhone">M-Pesa Phone Number *</Label>
          <Input
            id="mpesaPhone"
            name="phone"
            placeholder="e.g. 07XXXXXXXX, 2547XXXXXXXX, or 7XXXXXXXX"
            value={formData.phone}
            onChange={handleInputChange}
            className="mt-1"
            required
          />
          <p className="text-xs text-muted-foreground">
            Enter the phone number that will receive the STK push (in Kenya).
          </p>
        </div>
      )}
    </div>
  </div>
);
export default PaymentMethodSection;
