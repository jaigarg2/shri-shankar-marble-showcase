import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/919810935309?text=Hello! I am interested in your marble and granite collection.', '_blank');
  };

  const openGoogleMaps = () => {
    // Replace with your actual Google Maps location
    const address = "A-31, 70/1/2, Mangol Pur Kalan, New Delhi, Delhi 110085";
    //const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    const mapsUrl = `https://maps.app.goo.gl/2Sa8TpSZZxQqt1tAA`;
    window.open(mapsUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 stone-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <span className="text-gold font-medium text-sm uppercase tracking-wider">
            Get in Touch
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-primary mt-2 mb-6">
            Visit Our Showroom
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience our premium collection firsthand. Our experts are ready to help you 
            find the perfect stone for your project.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="slide-in-left space-y-6">
            <Card className="p-6 shadow-medium border-0 bg-card/80 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="bg-gold/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Our Location</h3>
                  <p className="text-muted-foreground">
                    A-31, 70/1/2, <br />
                    Mangol Pur Kalan, Delhi 110085<br />
                    Mangol pur Marble Market.
                  </p>
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto text-gold hover:text-gold-dark mt-2"
                    onClick={openGoogleMaps}
                  >
                    Get Directions →
                  </Button>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 shadow-medium border-0 bg-card/80 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="bg-gold/10 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Contact Details</h3>
                  <p className="text-muted-foreground mb-2">
                    Phone: +91 9810935309<br />
                    Email: shrishankarmarble1@gmail.com
                  </p>
                  <Button 
                    onClick={openWhatsApp}
                    className="btn-gold flex items-center space-x-2 mt-3"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Inquiry</span>
                  </Button>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 shadow-medium border-0 bg-card/80 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="bg-gold/10 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Opening Hours</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>Tuesday - Saturday: 9:00 AM - 8:00 PM</p>
                    <p>Monday: Closed</p>
                    <p className="text-gold text-sm mt-2">Always call before visiting</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Map Placeholder */}
          <div className="slide-in-right">
            <Card className="h-full min-h-[500px] shadow-medium border-0 overflow-hidden bg-card/80 backdrop-blur-sm">
              <div className="relative h-full bg-muted/20 flex items-center justify-center">
                {/* Map placeholder - in a real implementation, you would integrate Google Maps */}
                <div className="text-center p-8">
                  <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-primary mb-2">
                    Find Us Here
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Located in the heart of the Mangol pur Marble Market
                  </p>
                  <Button onClick={openGoogleMaps} className="btn-outline-gold">
                    Open in Google Maps
                  </Button>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 left-4 w-2 h-2 bg-gold rounded-full opacity-60"></div>
                <div className="absolute top-8 right-6 w-1 h-1 bg-gold rounded-full opacity-40"></div>
                <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-gold rounded-full opacity-50"></div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;