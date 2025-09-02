import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import carraraMarble from "@/assets/carrara-marble.jpg";
import blackGranite from "@/assets/black-granite.jpg";
import travertine from "@/assets/travertine.jpg";
import greenMarble from "@/assets/green-marble.jpg";

const products = [
  {
    id: 1,
    name: "Premium White Marble",
    type: "Pure White Marble",
    size: "Large slabs available",
    image: carraraMarble,
    description: "Premium quality white marble with subtle natural veining"
  },
  {
    id: 2,
    name: "Forest Green Marble", 
    type: "Premium Green Marble",
    size: "Large slabs available",
    image: greenMarble,
    description: "Rich emerald green marble with distinctive white veining patterns"
  },
  {
    id: 3,
    name: "Black Galaxy Granite",
    type: "Premium Black Granite", 
    size: "Various sizes available",
    image: blackGranite,
    description: "Deep black granite with elegant golden speckles"
  },
  {
    id: 4,
    name: "Speckled Grey Granite",
    type: "Natural Grey Granite",
    size: "Custom sizes available", 
    image: travertine,
    description: "Durable grey granite with natural white speckled pattern"
  }
];

const Products = () => {
  return (
    <section id="products" className="py-20 marble-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <span className="text-gold font-medium text-sm uppercase tracking-wider">
            Current Stock
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-primary mt-2 mb-6">
            Featured Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of premium marble and granite. 
            Each piece represents the finest quality natural stone materials.
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
                  <button className="text-gold hover:text-gold-dark font-medium text-sm transition-colors duration-200">
                    View Details →
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 fade-in">
          <p className="text-muted-foreground mb-6">
            Looking for specific dimensions or custom cuts? We offer tailored solutions for your project needs.
          </p>
          <Button 
            onClick={() => window.location.href = '/catalogue'}
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