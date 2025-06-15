
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Home, Search } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const Header = () => {
  const location = useLocation();
  const { getCartItemsCount } = useCart();
  const cartItemsCount = getCartItemsCount();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-lg bg-opacity-90">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-background font-bold text-sm">E</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              e-simu
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive('/') 
                  ? 'bg-primary text-background shadow-lg shadow-primary/30' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
              }`}
            >
              <Home size={18} />
              <span>Home</span>
            </Link>
            <Link
              to="/products"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive('/products') 
                  ? 'bg-primary text-background shadow-lg shadow-primary/30' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
              }`}
            >
              <Search size={18} />
              <span>Products</span>
            </Link>
            <Link
              to="/cart"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 relative ${
                isActive('/cart') 
                  ? 'bg-primary text-background shadow-lg shadow-primary/30' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
              }`}
            >
              <ShoppingCart size={18} />
              <span>Cart</span>
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-background text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {cartItemsCount}
                </span>
              )}
            </Link>
            <Link
              to="/contact"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive('/contact') 
                  ? 'bg-primary text-background shadow-lg shadow-primary/30' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
              }`}
            >
              <span>Contact</span>
            </Link>
          </nav>

          <div className="md:hidden">
            <Link to="/cart" className="relative">
              <ShoppingCart size={24} className="text-foreground" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-background text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden mt-4 flex justify-around border-t border-border pt-4">
          <Link to="/" className={`flex flex-col items-center space-y-1 ${isActive('/') ? 'text-primary' : 'text-muted-foreground'}`}>
            <Home size={18} />
            <span className="text-xs">Home</span>
          </Link>
          <Link to="/products" className={`flex flex-col items-center space-y-1 ${isActive('/products') ? 'text-primary' : 'text-muted-foreground'}`}>
            <Search size={18} />
            <span className="text-xs">Products</span>
          </Link>
          <Link to="/cart" className={`flex flex-col items-center space-y-1 relative ${isActive('/cart') ? 'text-primary' : 'text-muted-foreground'}`}>
            <ShoppingCart size={18} />
            <span className="text-xs">Cart</span>
            {cartItemsCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-accent text-background text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
          </Link>
          <Link to="/contact" className={`flex flex-col items-center space-y-1 ${isActive('/contact') ? 'text-primary' : 'text-muted-foreground'}`}>
            <span className="text-xs">Contact</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
