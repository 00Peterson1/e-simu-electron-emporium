
import React from 'react';
import { Link } from 'react-router-dom';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  const featuredProducts = products.filter(product => product.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20">
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%2300d4ff\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in">
                Welcome to e-simu
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Discover the future of technology with our curated collection of premium electronics
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/products">
                <button className="tech-button flex items-center space-x-2 text-lg px-8 py-4">
                  <span>Explore Products</span>
                  <ArrowRight size={20} />
                </button>
              </Link>
              <Link to="/cart">
                <button className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-background font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/30">
                  View Cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Categories</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our comprehensive range of cutting-edge electronics
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={`/products?category=${encodeURIComponent(category.name)}`}
                className="group"
              >
                <div className="bg-card border border-border rounded-xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2 hover:border-primary/50">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {category.count} products
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Handpicked premium electronics that define the future
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/products">
              <button className="tech-button text-lg px-8 py-4 flex items-center space-x-2 mx-auto">
                <span>View All Products</span>
                <ArrowRight size={20} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-primary">50+</div>
              <div className="text-muted-foreground">Premium Products</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-primary">7</div>
              <div className="text-muted-foreground">Categories</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-primary">24/7</div>
              <div className="text-muted-foreground">Support</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-primary">Fast</div>
              <div className="text-muted-foreground">Shipping</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
