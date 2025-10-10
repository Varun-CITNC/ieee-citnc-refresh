import { Card } from '@/components/ui/card';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Events = () => {
  const upcomingEvents = [
    {
      title: "IEEE Inauguration",
      date: "17th October 2025",
      location: "CITNC Campus",
      description: "Join us for the grand inauguration ceremony of IEEE Student Branch 2025-26, featuring esteemed speakers and networking opportunities",
      status: "upcoming"
    },
    {
      title: "Tech Tussle 2.0",
      date: "17th October 2025",
      location: "CITNC Campus",
      description: "An exciting technical competition showcasing innovation, problem-solving skills, and cutting-edge technology solutions",
      status: "upcoming"
    }
  ];

  return (
    <section id="events" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Upcoming Events
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Stay tuned for exciting events and opportunities to learn, network, and grow
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {upcomingEvents.map((event, index) => (
            <Card 
              key={index}
              className="group p-8 bg-gradient-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border-border animate-slide-up overflow-hidden relative"
              style={{ animationDelay: `${index * 0.2}s`, opacity: 0 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative z-10">
                <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  {event.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{event.date}</span>
                </div>
                
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{event.location}</span>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  {event.description}
                </p>
                
                <Button 
                  variant="ghost" 
                  className="text-primary hover:text-primary-light p-0 h-auto group/btn"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
