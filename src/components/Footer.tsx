
import { TrendingUp, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-between">
          {/* General */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-red-500" />
              <span>General</span>
            </h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Your trusted crypto tracking platform</p>
              <p>Real-time market data and analysis</p>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>New York, NY</span>
              </div>
            </div>
          </div>

          {/* About Us */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">About Us</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Leading cryptocurrency tracking platform</p>
              <p>Providing accurate market insights since 2024</p>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@cryptotracker.com</span>
              </div>
            </div>
          </div>

          {/* Follow Us */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="space-y-4">
              <p className="text-muted-foreground">Stay updated with the latest crypto news</p>
              <div className="flex space-x-4">
                <a href="#" className="p-2 rounded-lg bg-secondary hover:crypto-gradient transition-all duration-300">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 rounded-lg bg-secondary hover:crypto-gradient transition-all duration-300">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 rounded-lg bg-secondary hover:crypto-gradient transition-all duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 CryptoTracker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
