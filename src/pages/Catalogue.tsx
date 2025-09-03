import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Search, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";
import carraraMarble from "@/assets/carrara-marble.jpg";
import blackGranite from "@/assets/black-granite.jpg";
import travertine from "@/assets/travertine.jpg";
import greenMarble from "@/assets/green-marble.jpg";

const allProducts = [
  {
    id: 1,
    name: "Premium White Marble",
    type: "Pure White Marble",
    sizes: ["Large slabs", "Medium slabs", "Custom cuts"],
    image: carraraMarble,
    description: "Premium quality white marble with subtle natural veining, perfect for countertops and flooring",
    price: "Available on request",
    origin: "India"
  },
  {
    id: 2,
    name: "Forest Green Marble", 
    type: "Premium Green Marble",
    sizes: ["Large slabs", "Medium slabs", "Custom sizes"],
    image: greenMarble,
    description: "Rich emerald green marble with distinctive white veining patterns, ideal for luxury applications",
    price: "Available on request",
    origin: "India"
  },
  {
    id: 3,
    name: "Black Galaxy Granite",
    type: "Premium Black Granite", 
    sizes: ["Large slabs", "Medium slabs", "Custom cuts"],
    image: blackGranite,
    description: "Deep black granite with elegant golden speckles, perfect for kitchen countertops",
    price: "Available on request",
    origin: "India"
  },
  {
    id: 4,
    name: "Speckled Grey Granite",
    type: "Natural Grey Granite",
    sizes: ["Various sizes", "Custom dimensions", "Standard slabs"], 
    image: travertine,
    description: "Durable grey granite with natural white speckled pattern, excellent for commercial use",
    price: "Available on request",
    origin: "India"
  },
  {
    id: 5,
    name: "Golden Sandstone Strips",
    type: "Natural Sandstone",
    sizes: ["Strip format", "Custom lengths", "Various widths"],
    image: carraraMarble,
    description: "Beautiful golden yellow sandstone in convenient strip format, perfect for wall cladding",
    price: "Available on request", 
    origin: "India"
  },
  {
    id: 6,
    name: "Mixed Marble Collection",
    type: "Various Marble Types",
    sizes: ["Large inventory", "Multiple varieties", "Custom selection"],
    image: blackGranite,
    description: "Extensive collection of marble slabs in various colors and patterns, visit our yard for selection",
    price: "Available on request",
    origin: "India"
  }
];

const Catalogue = () => {
  const navigate = useNavigate();

  const openWhatsApp = (productName: string) => {
    const message = `Hello! I am interested in ${productName}. Could you please provide more details about pricing and availability?`;
    window.open(`https://wa.me/919999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="stone-bg border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/')}
                className="text-gold hover:text-gold-dark"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </div>
            <h1 className="font-display text-2xl font-bold text-primary">
              Complete Catalogue
            </h1>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="marble-bg py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-primary mb-6">
            Our Complete Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our extensive range of premium marble and granite. Each piece is carefully 
            selected for quality, beauty, and durability.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProducts.map((product) => (
              <Card key={product.id} className="group overflow-hidden shadow-medium hover:shadow-large transition-all duration-500 hover:scale-105 bg-card border-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-gold text-primary text-xs px-2 py-1 rounded-full font-medium">
                    {product.origin}
                  </div>
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
                  <p className="text-muted-foreground text-sm mb-4">
                    {product.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <h4 className="text-sm font-medium text-primary">Available Sizes:</h4>
                    <ul className="text-xs text-muted-foreground">
                      {product.sizes.map((size, index) => (
                        <li key={index}>• {size}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-sm font-medium text-gold">
                      {product.price}
                    </span>
                    <Button 
                      size="sm" 
                      onClick={() => openWhatsApp(product.name)}
                      className="btn-gold text-xs px-4 py-2"
                    >
                      Inquire Now
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Don't see what you're looking for? We have many more varieties in stock.
            </p>
            <Button 
              onClick={() => openWhatsApp("custom cutting services and complete stone collection")}
              className="btn-outline-gold"
            >
              Contact for More Options
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Catalogue;