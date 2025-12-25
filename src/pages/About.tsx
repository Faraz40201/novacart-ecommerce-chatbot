import { Link } from "react-router-dom";
import { ArrowRight, Shield, Truck, Heart, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Quality First",
      description: "Every product is carefully curated to meet our exacting standards for craftsmanship and durability.",
    },
    {
      icon: Heart,
      title: "Customer Focus",
      description: "Your satisfaction drives everything we do. We're here to make your shopping experience seamless.",
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Shop with confidence knowing your data and transactions are protected by industry-leading security.",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "We partner with reliable carriers to ensure your orders arrive quickly and safely.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-background via-muted/30 to-background py-20 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-semibold text-foreground leading-tight">
                About <span className="text-accent">NovaCart</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Smart Shopping. Elevated. We believe in curating only the finest products 
                and delivering them with an experience that exceeds expectations.
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-semibold text-foreground text-center">
                Our Story
              </h2>
              <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  NovaCart was founded with a simple mission: to make premium shopping accessible 
                  and enjoyable for everyone. We noticed that finding quality products often meant 
                  navigating cluttered marketplaces or paying inflated prices.
                </p>
                <p>
                  We set out to change that. Our team carefully selects each product in our catalog, 
                  ensuring it meets our standards for quality, design, and value. From electronics 
                  to accessories, every item represents the best in its category.
                </p>
                <p>
                  Today, NovaCart serves thousands of satisfied customers who trust us for their 
                  premium shopping needs. We're committed to continuous improvement, always seeking 
                  new ways to enhance your experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground text-center">
              Our Values
            </h2>
            <p className="mt-4 text-muted-foreground text-center max-w-2xl mx-auto">
              These principles guide everything we do at NovaCart.
            </p>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div key={value.title} className="bg-card rounded-xl p-6 border border-border/50">
                  <value.icon className="h-8 w-8 text-accent" />
                  <h3 className="mt-4 font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold">Ready to start shopping?</h2>
            <p className="mt-4 text-primary-foreground/70 max-w-lg mx-auto">
              Explore our curated collection and discover products you'll love.
            </p>
            <Link to="/products" className="inline-block mt-8">
              <Button variant="accent" size="xl">
                Browse Products
                <ArrowRight className="h-5 w-5 ml-1" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
