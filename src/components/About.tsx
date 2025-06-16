
import { Award, Target, Lightbulb, Heart, Code2, Rocket } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Precision Engineering',
      description: 'Every algorithm, every interface, every system is architected with meticulous attention to technical excellence.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We embrace emerging technologies and push the boundaries of what\'s possible in digital solutions.'
    },
    {
      icon: Heart,
      title: 'Client Partnership',
      description: 'Your success drives our passion. We invest deeply in understanding and achieving your business objectives.'
    },
    {
      icon: Award,
      title: 'Technical Mastery',
      description: 'We maintain expertise across the full technology stack to deliver enterprise-grade solutions.'
    }
  ];

  return (
    <section id="about" className="py-32 bg-gradient-to-b from-emerald-950/20 to-slate-950 relative">
      <div className="absolute inset-0 hex-pattern opacity-15"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold mb-10">
              <span className="text-gradient">Engineering</span><br />
              <span className="text-gradient-primary">Digital Future</span>
            </h2>
            
            <div className="space-y-8 text-xl text-emerald-100 leading-relaxed">
              <p>
                At NextWallace Technologies, we combine cutting-edge technical expertise 
                with strategic business insight to create transformative digital solutions.
              </p>
              
              <p>
                Our multidisciplinary team of engineers, designers, and strategists 
                collaborates closely with clients to architect scalable, secure, and 
                user-centric applications that drive measurable business growth.
              </p>
              
              <p>
                From concept through deployment and beyond, we leverage the latest 
                technologies and industry best practices to ensure every project 
                exceeds expectations and delivers lasting value.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-8">
              <div className="flex items-center gap-3">
                <Code2 className="h-8 w-8 text-emerald-400" />
                <span className="text-emerald-100 text-lg font-semibold">Clean Code</span>
              </div>
              <div className="flex items-center gap-3">
                <Rocket className="h-8 w-8 text-emerald-400" />
                <span className="text-emerald-100 text-lg font-semibold">Fast Delivery</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="bg-gradient-card border border-emerald-500/20 rounded-3xl p-8 hover:border-emerald-400/40 transition-all duration-500 group hover-glow"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/30 transition-colors duration-300 neon-glow">
                  <value.icon className="h-8 w-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-emerald-100 mb-4">{value.title}</h3>
                <p className="text-emerald-200 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
