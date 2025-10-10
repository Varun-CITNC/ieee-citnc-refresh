import { Card } from '@/components/ui/card';
import { Award, Users, Lightbulb } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Vibrant Community",
      description: "Join a dynamic network of engineering students passionate about technology and innovation"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
      title: "Innovation Hub",
      description: "Engage with cutting-edge technology through workshops, seminars, and hands-on projects"
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Award-Winning",
      description: "Recognized as Most Promising Student Branch by IEEE Bangalore Section"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About IEEE CITNC
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            A vibrant community of engineering students dedicated to fostering innovation, learning, and professional growth through IEEE activities and initiatives
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 bg-gradient-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border-border animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s`, opacity: 0 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

        <Card className="p-8 md:p-12 bg-white shadow-soft border-border">
          <h3 className="text-2xl font-bold text-foreground mb-6">About Cambridge Institute of Technology - North Campus</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Located in Bangalore off the International Airport road, Cambridge Institute of Technology – North Campus is a symbol of academic excellence and innovation. Our state-of-the-art campus provides an ideal environment for transformative learning.
            </p>
            <p>
              Accredited by AICTE and affiliated with VTU, we offer programs in Computer Science & Engineering, Electronics & Communication Engineering, and Mechanical Engineering. With over 150 placement partners and 90%+ placement rate, we ensure holistic education and career development.
            </p>
            <p>
              Awarded Best Emerging Engineering College in India – South 2018, we take pride in our industry-academic approach that fosters collaboration between students and professionals.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
