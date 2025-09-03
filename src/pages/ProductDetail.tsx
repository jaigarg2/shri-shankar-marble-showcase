import { useParams, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MessageCircle, Ruler, Palette, Truck } from "lucide-react";
import pWhite from "@/assets/P-White-Granite.jpg";
import kotlaGranite from "@/assets/Kotla-Granite.jpg";
import jaisalmer from "@/assets/Jaisalmer-Yellow.jpg";
import greenMarble from "@/assets/Bardoda-green.jpg";
import kitchenPartition from "@/assets/Kitchen-Partition-Slabs.jpg";
import mainShop from "@/assets/Main-Shop.jpg";
import shawarkaSlabs from "@/assets/Shawarka-Slabs.jpg";
import carraraMarble from "@/assets/carrara-marble.jpg";
import blackGranite from "@/assets/black-granite.jpg";
import travertine from "@/assets/travertine.jpg";

const productDetails = {
  "premium-white-granite": {
    id: 1,
    name: "Premium White Granite",
    type: "P White Granite", 
    images: [pWhite, mainShop, kitchenPartition],
    description: "Premium quality white granite with black speckles. Our most commercially sold variety, perfect for kitchen countertops, flooring, and architectural applications.",
    features: [
      "Heat resistant and durable",
      "Natural antibacterial properties", 
      "Available in multiple finishes",
      "Custom cutting available"
    ],
    sizes: [
      "Standard Slabs: 8x4 feet",
      "Large Format: 10x5 feet", 
      "Custom Cuts: Any dimension",
      "Thickness: 15mm, 18mm, 20mm"
    ],
    applications: ["Kitchen Countertops", "Flooring", "Wall Cladding", "Bathroom Vanities"],
    price: "₹45-65 per sq ft",
    origin: "Rajasthan, India"
  },
  "bardoda-green-marble": {
    id: 2,
    name: "Bardoda Green Marble",
    type: "Premium Green Marble",
    images: [greenMarble, shawarkaSlabs, mainShop],
    description: "Rich emerald green marble with distinctive white veining patterns. A luxury choice for premium interior applications.",
    features: [
      "Natural veining patterns",
      "Polished finish available",
      "Premium grade quality",
      "Custom cutting expertise"
    ],
    sizes: [
      "Standard Slabs: 6x3 feet", 
      "Medium Slabs: 8x4 feet",
      "Custom Cuts: Any specification",
      "Thickness: 18mm, 20mm, 25mm"
    ],
    applications: ["Luxury Flooring", "Feature Walls", "Reception Areas", "Decorative Elements"],
    price: "₹85-120 per sq ft",
    origin: "Rajasthan, India"
  },
  "kotla-black-granite": {
    id: 3,
    name: "Kotla Black Granite", 
    type: "Kotla Black Granite",
    images: [kotlaGranite, kitchenPartition, mainShop],
    description: "Deep black granite with elegant coffee speckles. Highly durable and perfect for both residential and commercial use.",
    features: [
      "Superior durability",
      "Stain resistant surface",
      "Coffee speckle pattern", 
      "Professional custom cutting"
    ],
    sizes: [
      "Standard Slabs: 8x4 feet",
      "Large Format: 10x6 feet",
      "Custom Dimensions: Available",
      "Thickness: 15mm, 18mm, 20mm, 25mm"
    ],
    applications: ["Kitchen Platforms", "Commercial Flooring", "Staircase", "Exterior Cladding"],
    price: "₹55-75 per sq ft", 
    origin: "Telangana, India"
  },
  "jaisalmer-yellow-stone": {
    id: 4,
    name: "Jaisalmer Yellow Stone",
    type: "Natural Yellow Granite", 
    images: [jaisalmer, shawarkaSlabs, mainShop],
    description: "Durable yellow granite with natural dark veins. Perfect for creating warm, inviting spaces with a natural aesthetic.",
    features: [
      "Natural color variations",
      "Weather resistant",
      "Unique vein patterns",
      "Precision custom cutting"
    ],
    sizes: [
      "Random Slabs: Various sizes",
      "Standard Cuts: 6x3, 8x4 feet", 
      "Custom Sizes: As per requirement",
      "Thickness: 18mm, 20mm, 25mm, 30mm"
    ],
    applications: ["Exterior Facades", "Garden Features", "Interior Accent walls", "Traditional Architecture"],
    price: "₹65-90 per sq ft",
    origin: "Rajasthan, India"
  }
};

const ProductDetail = () => {
  const { productSlug } = useParams<{ productSlug: string }>();
  const navigate = useNavigate();
  
  const product = productSlug ? productDetails[productSlug as keyof typeof productDetails] : null;

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Product Not Found</h2>
          <Button onClick={() => navigate('/')} className="btn-gold">
            Return Home
          </Button>
        </div>
      </div>
    );
  }

  const openWhatsApp = () => {
    const message = `Hello! I am interested in ${product.name}. Could you please provide pricing and availability details? I'm also interested in custom cutting services.`;
    window.open(`https://wa.me/919810935309?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="stone-bg border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate(-1)}
              className="text-gold hover:text-gold-dark"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <Badge variant="outline" className="text-gold border-gold">
              {product.origin}
            </Badge>
          </div>
        </div>
      </header>

      {/* Product Hero */}
      <section className="py-12 marble-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-lg shadow-large">
                <img 
                  src={product.images[0]} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {product.images.slice(1).map((image, index) => (
                  <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-medium">
                    <img 
                      src={image} 
                      alt={`${product.name} ${index + 2}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <span className="text-gold text-sm font-medium uppercase tracking-wider">
                  {product.type}
                </span>
                <h1 className="font-display text-4xl font-bold text-primary mt-2 mb-4">
                  {product.name}
                </h1>
                <p className="text-lg text-muted-foreground">
                  {product.description}
                </p>
              </div>

              <Card className="p-6 bg-card/80 backdrop-blur-sm border-0 shadow-medium">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-primary">Starting Price</h3>
                  <span className="text-2xl font-bold text-gold">{product.price}</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Ruler className="w-4 h-4 text-gold" />
                    <span className="text-sm text-muted-foreground">Custom cutting available</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Palette className="w-4 h-4 text-gold" />
                    <span className="text-sm text-muted-foreground">Multiple finish options</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Truck className="w-4 h-4 text-gold" />
                    <span className="text-sm text-muted-foreground">Delivery available in Delhi NCR</span>
                  </div>
                </div>
              </Card>

              <Button 
                onClick={openWhatsApp}
                className="btn-gold w-full flex items-center justify-center space-x-2 text-lg py-3"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Get Custom Quote via WhatsApp</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Details Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Features */}
            <Card className="p-6 shadow-medium border-0">
              <h3 className="font-display text-xl font-semibold text-primary mb-4">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Sizes */}
            <Card className="p-6 shadow-medium border-0">
              <h3 className="font-display text-xl font-semibold text-primary mb-4">Available Sizes</h3>
              <ul className="space-y-2">
                {product.sizes.map((size, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-muted-foreground text-sm">{size}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Applications */}
            <Card className="p-6 shadow-medium border-0">
              <h3 className="font-display text-xl font-semibold text-primary mb-4">Best Used For</h3>
              <ul className="space-y-2">
                {product.applications.map((application, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-muted-foreground text-sm">{application}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Custom Cutting CTA */}
      <section className="py-16 stone-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-primary mb-4">
            Need Custom Dimensions?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our specialty is precision custom cutting. We can cut any marble or granite 
            to your exact specifications with professional-grade equipment and expertise.
          </p>
          <Button 
            onClick={openWhatsApp}
            className="btn-outline-gold"
          >
            Discuss Custom Requirements
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;