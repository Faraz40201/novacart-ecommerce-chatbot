import { Link } from "react-router-dom";
import { ArrowRight, Truck, Shield, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/products/ProductCard";
import ChatBot from "@/components/chatbot/ChatBot";
import { products } from "@/data/products";

const Index = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/50 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
            <div className="max-w-3xl">
              <span className="nova-badge mb-6">
                New Collection Available
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
                Smart Shopping.
                <br />
                <span className="text-accent">Elevated.</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
                Discover our curated collection of premium products, designed for 
                those who appreciate quality and seamless experiences.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/products">
                  <Button variant="hero" size="xl">
                    Browse Collection
                    <ArrowRight className="h-5 w-5 ml-1" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="hero-outline" size="xl">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-96 bg-gradient-to-l from-accent/5 to-transparent blur-3xl pointer-events-none" />
        </section>

        {/* Features */}
        <section className="border-y border-border/50 bg-card/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border/50">
              {[
                { icon: Truck, title: "Free Shipping", desc: "On orders over $100" },
                { icon: Shield, title: "Secure Checkout", desc: "100% protected payments" },
                { icon: RefreshCw, title: "Easy Returns", desc: "30-day return policy" },
              ].map((feature, index) => (
                <div key={feature.title} className="py-8 px-6 text-center">
                  <feature.icon className="h-6 w-6 mx-auto text-accent" />
                  <h3 className="mt-4 font-medium text-foreground">{feature.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-3xl font-semibold text-foreground">Featured Products</h2>
                <p className="mt-2 text-muted-foreground">Handpicked favorites for you</p>
              </div>
              <Link to="/products" className="hidden sm:block">
                <Button variant="outline">
                  View All
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
            
            <div className="mt-8 text-center sm:hidden">
              <Link to="/products">
                <Button variant="outline" className="w-full">
                  View All Products
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold">Ready to elevate your style?</h2>
            <p className="mt-4 text-primary-foreground/70 max-w-lg mx-auto">
              Join thousands of satisfied customers who trust NovaCart for their premium shopping needs.
            </p>
            <Link to="/products" className="inline-block mt-8">
              <Button variant="accent" size="xl">
                Start Shopping
                <ArrowRight className="h-5 w-5 ml-1" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
