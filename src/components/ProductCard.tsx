
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
    <div className="product-card group">
      {product.onSale && product.discount && (
        <div className="absolute top-2 left-2 z-10 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
          -{product.discount}%
        </div>
      )}
      
      <div className="aspect-square overflow-hidden bg-slate-700/50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <div className="p-4 space-y-3">
        <div className="space-y-1">
          <span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full">
            {product.category}
          </span>
          <h3 className="font-semibold text-white line-clamp-1 group-hover:text-emerald-400 transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xl font-bold text-emerald-400">
              KSh {product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-slate-500 line-through">
                KSh {product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          <Button
            onClick={handleAddToCart}
            className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white hover:shadow-lg hover:shadow-emerald-500/30 hover:scale-105 text-sm"
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
