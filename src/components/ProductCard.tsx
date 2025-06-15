
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
      <div className="aspect-square overflow-hidden bg-secondary/50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <div className="p-4 space-y-3">
        <div className="space-y-1">
          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
            {product.category}
          </span>
          <h3 className="font-semibold text-foreground line-clamp-1 group-hover:text-primary transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary">
            ${product.price.toLocaleString()}
          </span>
          <Button
            onClick={handleAddToCart}
            className="tech-button text-sm"
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
