
import React from 'react';
import { useCart } from '../contexts/CartContext';
import CheckoutForm from '../components/CheckoutForm';
import OrderSummary from '../components/OrderSummary';

const Checkout = () => {
  const { state, clearCart } = useCart();
  const total = state.total + state.total * 0.08;

  if (state.items.length === 0) {
    window.location.href = '/cart';
    return null;
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl lg:text-4xl font-bold mb-8 text-center">Checkout</h1>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <CheckoutForm total={total} clearCart={clearCart} />
            </div>
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

