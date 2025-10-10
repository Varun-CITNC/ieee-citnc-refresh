import { useState, useEffect } from 'react';
import ieeeLogo from '@/assets/ieee-logo.png';
import cambridgeLogo from '@/assets/cambridge-logo.jpg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-soft' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 animate-fade-in">
            <img 
              src={ieeeLogo} 
              alt="IEEE CITNC Student Branch" 
              className="h-12 md:h-16 w-auto transition-transform duration-300 hover:scale-105"
            />
            <img 
              src={cambridgeLogo} 
              alt="Cambridge Group of Institutions North Campus" 
              className="h-12 md:h-16 w-auto transition-transform duration-300 hover:scale-105"
            />
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('events')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
            >
              Events
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
            >
              Team
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
            >
              Contact
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
