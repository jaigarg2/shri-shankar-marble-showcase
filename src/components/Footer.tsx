import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-2xl font-bold mb-4 bg-gradient-gold bg-clip-text text-transparent">
              Shri Shankar Marble House
            </h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Your trusted partner for premium marble and granite solutions. 
              With over 30 years of experience, we bring timeless elegance to every space.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-primary-foreground/10 p-2 rounded-lg hover:bg-gold hover:text-primary transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-primary-foreground/10 p-2 rounded-lg hover:bg-gold hover:text-primary transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-primary-foreground/10 p-2 rounded-lg hover:bg-gold hover:text-primary transition-colors duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-gold transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="text-primary-foreground/80 hover:text-gold transition-colors duration-200">
                  Our Collection
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-gold transition-colors duration-200">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-gold transition-colors duration-200">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-gold transition-colors duration-200">
                  Installation
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gold" />
                <span className="text-primary-foreground/80">+91 9810935309</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gold" />
                <span className="text-primary-foreground/80">shrishankarmarble1@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5" />
                <span className="text-primary-foreground/80">
                  A-31, Marble Market<br />
                  Mangolpur Kalan, Delhi - 110085
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="my-8 bg-primary-foreground/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-primary-foreground/60 text-sm mb-4 md:mb-0">
            © {currentYear} Shri Shankar Marble House. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-sm text-primary-foreground/60">
            <span>Tuesday - Sunday: 9:00 AM - 8:30 PM</span>
            <span>Monday: Closed</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;