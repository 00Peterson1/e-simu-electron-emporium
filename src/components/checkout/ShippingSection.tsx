
import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface Props {
  formData: any;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ShippingSection: React.FC<Props> = ({ formData, handleInputChange }) => (
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
);

export default ShippingSection;
