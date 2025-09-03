import { Button } from "@/components/ui/button";
import heroTexture from "@/assets/marble-texture-hero.jpg";

const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden marble-texture">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroTexture})` }}
      >
        <div className="absolute inset-0 bg-background/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="fade-in">
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight">
            Shri Shankar
            <span className="block bg-gradient-gold bg-clip-text text-transparent">
              Marble House
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Premium Marble & Granite + <span className="text-gold font-medium">Expert Custom Cutting</span>
          </p>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Discover exquisite natural stone materials crafted with heritage and expertise. 
            <span className="text-gold font-medium">Specializing in precision custom cuts</span> to transform your spaces with our premium collection.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToProducts}
              className="btn-gold text-lg px-8 py-4 h-auto"
            >
              Explore Our Collection
            </Button>
            <Button 
              variant="outline" 
              className="btn-outline-gold text-lg px-8 py-4 h-auto"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;