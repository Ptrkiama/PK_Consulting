
import { Award, Target, Lightbulb, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'Every pixel, every interaction, every line of code is crafted with meticulous attention to detail.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We push boundaries and explore new technologies to deliver cutting-edge solutions.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We love what we do, and it shows in every project we undertake.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We never settle for good enough. We strive for exceptional in everything we create.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-950 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="text-gradient">Crafting Digital</span><br />
              <span className="text-gradient-primary">Experiences</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                At Hepha, we believe in the power of exceptional design and flawless execution. 
                Our team of passionate creators and technical experts work together to bring 
                your vision to life.
              </p>
              
              <p>
                We don't just build websites and applications – we craft digital experiences 
                that resonate with your audience and drive meaningful results for your business.
              </p>
              
              <p>
                From concept to launch, we're with you every step of the way, ensuring that 
                every detail aligns with your goals and exceeds your expectations.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="bg-card/30 border border-border rounded-2xl p-6 hover:bg-card/50 transition-all duration-300 group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
