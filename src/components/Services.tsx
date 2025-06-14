
import { Code, Palette, Rocket, Zap, Globe, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with cutting-edge technologies and optimized for performance.',
      features: ['React & Next.js', 'TypeScript', 'API Integration', 'Database Design']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that provide exceptional user experiences across all devices.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
    },
    {
      icon: Rocket,
      title: 'Brand Strategy',
      description: 'Comprehensive brand development that captures your essence and resonates with your audience.',
      features: ['Brand Identity', 'Visual Strategy', 'Market Research', 'Brand Guidelines']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Lightning-fast websites and applications that convert visitors into customers.',
      features: ['Speed Optimization', 'SEO Enhancement', 'Analytics Setup', 'Conversion Tracking']
    },
    {
      icon: Globe,
      title: 'Digital Marketing',
      description: 'Strategic digital campaigns that amplify your reach and drive meaningful engagement.',
      features: ['Content Strategy', 'Social Media', 'Email Campaigns', 'Growth Hacking']
    },
    {
      icon: Users,
      title: 'Consulting',
      description: 'Expert guidance to navigate digital transformation and achieve your business objectives.',
      features: ['Tech Strategy', 'Digital Roadmap', 'Team Training', 'Process Optimization']
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Our</span>{' '}
            <span className="text-gradient-primary">Expertise</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We combine strategic thinking with technical excellence to deliver 
            solutions that drive real business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="bg-card/50 border-border hover:bg-card/80 transition-all duration-300 group hover:scale-105 hover:shadow-2xl hover:shadow-primary/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                </div>
                
                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
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
