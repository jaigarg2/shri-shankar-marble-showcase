import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import pWhite from "@/assets/P-White-Granite.jpg";
import kotlaGranite from "@/assets/Kotla-Granite.jpg";
import jaisalmer from "@/assets/Jaisalmer-Yellow.jpg";
import greenMarble from "@/assets/Bardoda-green.jpg";

const products = [
  {
    id: 1,
    slug: "premium-white-granite",
    name: "Premium White Granite",
    type: "P White Granite",
    size: "Large slabs available",
    image: pWhite,
    description: "Premium quality white granite with Black speckles. Most Commercially Sold + Custom Cuts Available"
  },
  {
    id: 2,
    slug: "bardoda-green-marble",
    name: "Bardoda Green Marble", 
    type: "Premium Green Marble",
    size: "Large slabs available",
    image: greenMarble,
    description: "Rich emerald green marble with distinctive white veining patterns + Precision Custom Cutting"
  },
  {
    id: 3,
    slug: "kotla-black-granite",
    name: "Kotla Black Granite",
    type: "Kotla Black Granite", 
    size: "Various sizes available",
    image: kotlaGranite,
    description: "Deep black granite with elegant Coffee Speckles + Custom Dimensions Available"
  },
  {
    id: 4,
    slug: "jaisalmer-yellow-stone",
    name: "Jaisalmer Yellow Stone",
    type: "Natural Yellow Granite",
    size: "Custom sizes available", 
    image: jaisalmer,
    description: "Durable yellow granite with natural dark viens + Expert Custom Cutting Services"
  }
];

const Products = () => {
  const navigate = useNavigate();

  return (
    <section id="products" className="py-20 marble-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <span className="text-gold font-medium text-sm uppercase tracking-wider">
            Current Stock + Custom Cutting Services
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-primary mt-2 mb-6">
            Featured Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of premium marble and granite. 
            <span className="text-gold font-medium"> Each piece can be custom cut to your exact specifications</span> - our specialty service.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className={`group overflow-hidden border-0 shadow-medium hover:shadow-large transition-all duration-500 hover:scale-105 fade-in bg-card/80 backdrop-blur-sm`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-gold text-xs font-medium uppercase tracking-wider">
                    {product.type}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-primary mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {product.size}
                  </span>
                  <button 
                    onClick={() => navigate(`/product/${product.slug}`)}
                    className="text-gold hover:text-gold-dark font-medium text-sm transition-colors duration-200"
                  >
                    View Details →
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 fade-in">
          <p className="text-muted-foreground mb-6">
            <span className="text-gold font-medium">Specializing in custom cuts and tailored solutions</span> for your project needs. 
            Any dimension, any specification - we deliver precision results.
          </p>
          <Button 
            onClick={() => navigate('/catalogue')}
            className="btn-outline-gold"
          >
            View Complete Catalog
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;