
import React from 'react';
import { useCart } from '../contexts/CartContext';

const OrderSummary: React.FC = () => {
  const { state } = useCart();
  const total = state.total + state.total * 0.08;

  return (
    <div className="bg-card border border-border rounded-lg p-6 h-fit sticky top-24">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
      <div className="space-y-4 mb-6">
        {state.items.map((item) => (
          <div key={item.id} className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-secondary rounded-lg overflow-hidden flex-shrink-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm truncate">{item.name}</p>
              <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
            </div>
            <div className="text-sm font-medium">
              KSh {(item.price * item.quantity).toLocaleString('en-KE')}
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-2 border-t border-border pt-4">
        <div className="flex justify-between text-sm">
          <span>Subtotal</span>
          <span>KSh {state.total.toLocaleString('en-KE')}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Tax</span>
          <span>KSh {(state.total * 0.08).toLocaleString('en-KE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
        </div>
        <div className="flex justify-between text-lg font-semibold border-t border-border pt-2">
          <span>Total</span>
          <span className="text-primary">
            KSh {total.toLocaleString('en-KE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;

