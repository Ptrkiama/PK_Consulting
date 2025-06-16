
import { Code, Palette, Rocket, Zap, Globe, Users, Database, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'End-to-end web applications built with modern frameworks and optimized for peak performance.',
      features: ['React & Next.js', 'Node.js & Python', 'Cloud Integration', 'API Development']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Stunning, user-centric interfaces that drive engagement and deliver exceptional experiences.',
      features: ['Design Systems', 'Prototyping', 'User Research', 'Brand Identity']
    },
    {
      icon: Database,
      title: 'Data Solutions',
      description: 'Robust database architectures and analytics platforms that scale with your business growth.',
      features: ['Database Design', 'Data Analytics', 'Business Intelligence', 'Migration Services']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Enterprise-grade security solutions to protect your digital assets and user data.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Risk Assessment']
    },
    {
      icon: Globe,
      title: 'Digital Transformation',
      description: 'Strategic digital initiatives that modernize operations and accelerate business growth.',
      features: ['Process Automation', 'Legacy Migration', 'Digital Strategy', 'Change Management']
    },
    {
      icon: Users,
      title: 'Tech Consulting',
      description: 'Expert guidance to navigate complex technology decisions and optimize your tech stack.',
      features: ['Architecture Review', 'Team Scaling', 'Technology Strategy', 'Performance Optimization']
    }
  ];

  return (
    <section id="services" className="py-32 bg-gradient-to-b from-slate-950 to-emerald-950/20 relative">
      <div className="absolute inset-0 hex-pattern opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="text-gradient">Our</span>{' '}
            <span className="text-gradient-primary">Expertise</span>
          </h2>
          <p className="text-2xl text-emerald-100 max-w-4xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to transform your business 
            and drive measurable results in today's digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="bg-gradient-card border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-500 group hover:scale-105 hover-glow"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-10">
                <div className="mb-8">
                  <div className="w-20 h-20 bg-emerald-500/20 rounded-3xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/30 transition-colors duration-300 neon-glow">
                    <service.icon className="h-10 w-10 text-emerald-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-emerald-100 mb-4">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-lg">{service.description}</p>
                </div>
                
                <div className="space-y-3">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center text-emerald-200">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-4 animate-sparkle"></div>
                      <span className="text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
