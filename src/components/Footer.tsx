import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">IEEE CITNC</h3>
            <p className="text-white/80 text-sm">
              Cambridge Institute of Technology North Campus Student Branch
              <br />
              Advancing Technology for Humanity
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#events" className="text-white/80 hover:text-white transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#team" className="text-white/80 hover:text-white transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-white/80">gowrishhb5@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="text-white/80">+91 63611 84577</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="text-white/80">CITNC, Bangalore</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/80">
          <p>© {new Date().getFullYear()} IEEE CITNC Student Branch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
