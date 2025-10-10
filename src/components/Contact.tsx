import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Have questions? Reach out to us and we'll get back to you soon
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 bg-gradient-card border-border shadow-soft animate-slide-up">
            <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Address</h4>
                  <p className="text-muted-foreground">
                    Cambridge Institute of Technology North Campus
                    <br />
                    Bangalore, Karnataka
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <a 
                    href="mailto:gowrishhb5@gmail.com" 
                    className="text-primary hover:text-primary-light transition-colors"
                  >
                    gowrishhb5@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                  <p className="text-muted-foreground">
                    Chairman: +91 63611 84577
                  </p>
                </div>
              </div>
            </div>

            <Button 
              className="mt-8 w-full bg-gradient-primary hover:opacity-90 text-white shadow-glow"
              onClick={() => window.open('https://northcampus.cambridge.edu.in/', '_blank')}
            >
              Visit Official Website
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </Card>

          <Card className="p-8 bg-gradient-primary text-white border-none shadow-glow animate-slide-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
            <h3 className="text-2xl font-bold mb-6">Join IEEE CITNC</h3>
            
            <p className="mb-6 text-white/90">
              Become part of our vibrant community of tech enthusiasts. Experience innovation, collaboration, and professional growth.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Access to exclusive workshops and seminars</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Networking with industry professionals</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Hands-on experience with cutting-edge technology</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Leadership and skill development opportunities</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Participation in competitions and hackathons</span>
              </div>
            </div>

            <Button 
              variant="outline" 
              className="mt-8 w-full border-white text-white hover:bg-white hover:text-primary"
            >
              Learn More About Membership
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
