
import React from 'react';
import { Product } from '../types/Product';
import { useCart } from '../contexts/CartContext';
import { Button } from './ui/button';
import { useToast } from '../hooks/use-toast';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
      duration: 2000,
    });
  };

  return (
    <div className="product-card group relative text-white bg-[#19212c] border border-slate-800 rounded-xl shadow-sm dark-shadow">
      {/* Discount badge */}
      {product.onSale && product.discount && (
        <div className="absolute top-2 left-2 z-10 bg-blue-700 text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm">
          -{product.discount}%
        </div>
      )}

      {/* Image with dark overlay */}
      <div className="aspect-square overflow-hidden relative bg-slate-800">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400 brightness-80"
          style={{
            filter: 'brightness(60%)', // Darken image
          }}
        />
        {/* Optional: subtle gradient overlay at bottom for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="p-4 space-y-3">
        <div className="space-y-1">
          <span className="text-xs font-medium text-blue-300 bg-blue-900/30 px-2 py-1 rounded-full">
            {product.category}
          </span>
          <h3 className="font-semibold text-white line-clamp-1 group-hover:text-blue-400 transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xl font-bold text-blue-400">
              KSh {product.price.toLocaleString('en-KE')}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-slate-500 line-through">
                KSh {product.originalPrice.toLocaleString('en-KE')}
              </span>
            )}
          </div>
          <Button
            onClick={handleAddToCart}
            className="bg-gradient-to-r from-slate-700 to-blue-900 text-white hover:shadow-lg hover:shadow-blue-900/30 hover:scale-105 text-sm border border-blue-900"
            size="sm"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

