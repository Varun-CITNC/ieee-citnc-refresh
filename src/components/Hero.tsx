import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center animate-fade-in">
          <div className="inline-block mb-6 animate-slide-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
            <span className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/30">
              IEEE Student Branch
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slide-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
            Cambridge Institute of Technology
            <br />
            <span className="text-white/90">North Campus</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: '0.6s', opacity: 0 }}>
            Advancing technology for humanity through innovation, collaboration, and professional development
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.8s', opacity: 0 }}>
            <Button 
              onClick={() => scrollToSection('about')}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-glow"
            >
              Learn More
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 backdrop-blur-sm"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce cursor-pointer"
        aria-label="Scroll to content"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default Hero;
