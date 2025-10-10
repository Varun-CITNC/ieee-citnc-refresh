import { Card } from '@/components/ui/card';
import { Mail, Linkedin } from 'lucide-react';

const Team = () => {
  const coreTeam = [
    {
      name: "Chairman",
      role: "Chairman",
      description: "Leads the student branch, oversees all activities, and represents the branch at university and IEEE events"
    },
    {
      name: "Vice Chairman",
      role: "Vice Chairman",
      description: "Supports the Chairman and coordinates between different teams to ensure smooth operations"
    },
    {
      name: "Secretary",
      role: "Secretary",
      description: "Manages communications, maintains records, and handles administrative responsibilities"
    },
    {
      name: "Treasurer",
      role: "Treasurer",
      description: "Oversees financial operations, budgeting, fundraising, and ensures IEEE policy compliance"
    },
    {
      name: "Webmaster",
      role: "Webmaster",
      description: "Manages digital presence, website, social media, and online technical infrastructure"
    },
    {
      name: "Membership Development Chair",
      role: "Membership Development Chair",
      description: "Drives membership growth through recruitment campaigns and engagement programs"
    },
    {
      name: "Technical Team Lead",
      role: "Technical Team Lead",
      description: "Organizes workshops, hackathons, and technical events to enhance technical skills"
    },
    {
      name: "Publicity Head",
      role: "Publicity/PR Head",
      description: "Leads marketing, communications, and builds partnerships with sponsors"
    },
    {
      name: "Design Lead",
      role: "Design Lead",
      description: "Manages all visual design aspects including posters, branding, and creative materials"
    },
    {
      name: "WiE Representative",
      role: "WiE Representative",
      description: "Promotes gender diversity and inclusion in engineering and technology fields"
    }
  ];

  return (
    <section id="team" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Core Team 2025-26
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Meet the dedicated individuals leading IEEE CITNC Student Branch
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreTeam.map((member, index) => (
            <Card 
              key={index}
              className="group p-6 bg-white hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border-border animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
            >
              <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform">
                {member.name.charAt(0)}
              </div>
              
              <h3 className="text-xl font-bold text-center text-foreground mb-2 group-hover:text-primary transition-colors">
                {member.role}
              </h3>
              
              <p className="text-sm text-muted-foreground text-center mb-4">
                {member.description}
              </p>
              
              <div className="flex justify-center gap-3">
                <button className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </button>
                <button className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-white transition-colors">
                  <Linkedin className="w-4 h-4" />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
