
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';

const Cart = () => {
  const { state, updateQuantity, removeFromCart, clearCart } = useCart();

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    if (newQuantity >= 0) {
      updateQuantity(productId, newQuantity);
    }
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="w-32 h-32 mx-auto bg-secondary rounded-full flex items-center justify-center">
              <ShoppingBag className="text-muted-foreground" size={60} />
            </div>
            <div className="space-y-4">
              <h1 className="text-3xl font-bold">Your cart is empty</h1>
              <p className="text-muted-foreground text-lg">
                Looks like you haven't added any items to your cart yet.
              </p>
            </div>
            <Link to="/products">
              <button className="tech-button text-lg px-8 py-4">
                Start Shopping
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 space-y-4 sm:space-y-0">
            <h1 className="text-3xl lg:text-4xl font-bold">Shopping Cart</h1>
            <Button
              onClick={clearCart}
              variant="outline"
              className="flex items-center space-x-2 border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
            >
              <Trash2 size={16} />
              <span>Clear Cart</span>
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {state.items.map((item) => (
                <div key={item.id} className="bg-card border border-border rounded-lg p-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="w-full sm:w-24 h-24 bg-secondary rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <div>
                          <h3 className="font-semibold text-lg">{item.name}</h3>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {item.description}
                          </p>
                          <span className="inline-block mt-1 text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                            {item.category}
                          </span>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold text-primary">
                            ${item.price.toLocaleString()}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Subtotal: ${(item.price * item.quantity).toLocaleString()}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Button
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            size="sm"
                            variant="outline"
                            className="w-8 h-8 p-0"
                          >
                            <Minus size={14} />
                          </Button>
                          <Input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 0)}
                            className="w-16 text-center"
                            min="0"
                          />
                          <Button
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            size="sm"
                            variant="outline"
                            className="w-8 h-8 p-0"
                          >
                            <Plus size={14} />
                          </Button>
                        </div>
                        
                        <Button
                          onClick={() => removeFromCart(item.id)}
                          size="sm"
                          variant="outline"
                          className="text-destructive hover:bg-destructive hover:text-destructive-foreground"
                        >
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Items ({state.items.reduce((count, item) => count + item.quantity, 0)})</span>
                    <span>${state.total.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Tax</span>
                    <span>${(state.total * 0.08).toFixed(2)}</span>
                  </div>
                  <div className="border-t border-border pt-3">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total</span>
                      <span className="text-primary">
                        ${(state.total + state.total * 0.08).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Link to="/checkout" className="block">
                    <button className="tech-button w-full text-lg py-3">
                      Proceed to Checkout
                    </button>
                  </Link>
                  <Link to="/products" className="block">
                    <Button variant="outline" className="w-full">
                      Continue Shopping
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
