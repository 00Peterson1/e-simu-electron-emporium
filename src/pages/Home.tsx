import React from 'react';
import { Link } from 'react-router-dom';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import { ArrowRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../components/ui/carousel';

// NEW featured category: Tablets
const featuredCategories = [
  ...categories,
  { name: "Tablets", icon: "📱", count: products.filter(p => p.category === "Tablets").length }
];

const Home = () => {
  const featuredProducts = products.filter(product => product.featured);
  const discountedProducts = products.filter(product => product.onSale);

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 to-blue-900/10"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-emerald-500/5 to-blue-500/5"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-emerald-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent animate-fade-in">
                Welcome to e-simu
              </h1>
              <p className="text-xl lg:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Powering your lifestyle with next-generation electronics and smart tech for every home.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/products">
                <button className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30 hover:scale-105 flex items-center space-x-2 text-lg">
                  <span>Explore Products</span>
                  <ArrowRight size={20} />
                </button>
              </Link>
              <Link to="/cart">
                <button className="bg-transparent border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30">
                  View Cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">Top Categories</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Find the tech that's just right for you and your family.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredCategories.map((category) => (
              <Link
                key={category.name}
                to={`/products?category=${encodeURIComponent(category.name)}`}
                className="group"
              >
                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-2 hover:border-emerald-500/50">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-white group-hover:text-emerald-400 transition-colors duration-300">
                    {category.name}
                  </h3>
                  {/* Removed product count */}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">Featured Products</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Must-have picks chosen by our tech experts for you.
            </p>
          </div>
          
          <div className="relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {featuredProducts.map((product) => (
                  <CarouselItem key={product.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                    <ProductCard product={product} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12 bg-slate-800 border-slate-700 text-white hover:bg-emerald-600" />
              <CarouselNext className="hidden md:flex -right-12 bg-slate-800 border-slate-700 text-white hover:bg-emerald-600" />
            </Carousel>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/products">
              <button className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30 hover:scale-105 flex items-center space-x-2 mx-auto text-lg">
                <span>View All Products</span>
                <ArrowRight size={20} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Discounted Products Section */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">🔥 Hot Deals</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Grab the best bargains in tech—our top electronics, now at unbeatable prices.
            </p>
          </div>
          
          <div className="relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {discountedProducts.map((product) => (
                  <CarouselItem key={product.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                    {/* Hot Deals: pass red discount badge */}
                    <ProductCard product={product} discountColor="red" />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12 bg-slate-800 border-slate-700 text-white hover:bg-red-600" />
              <CarouselNext className="hidden md:flex -right-12 bg-slate-800 border-slate-700 text-white hover:bg-red-600" />
            </Carousel>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/products?sale=true">
              <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30 hover:scale-105 flex items-center space-x-2 mx-auto text-lg">
                <span>View All Deals</span>
                <ArrowRight size={20} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-emerald-400">50+</div>
              <div className="text-slate-400">Premium Products</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-emerald-400">7</div>
              <div className="text-slate-400">Categories</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-emerald-400">24/7</div>
              <div className="text-slate-400">Support</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-emerald-400">Fast</div>
              <div className="text-slate-400">Shipping</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
