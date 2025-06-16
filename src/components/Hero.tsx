
import { ArrowRight, ChevronDown, Zap, Rocket, Star, Code, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 bg-gradient-dark">
        <div className="absolute inset-0 circuit-pattern opacity-30"></div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse-emerald"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-orange-500/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-green-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Floating Tech Elements */}
      <div className="absolute top-20 left-10 animate-float animate-sparkle">
        <div className="w-6 h-6 bg-emerald-400/60 rounded-full neon-glow"></div>
      </div>
      <div className="absolute top-32 right-16 animate-float" style={{ animationDelay: '1s' }}>
        <Code className="h-8 w-8 text-emerald-400/50" />
      </div>
      <div className="absolute bottom-40 left-16 animate-float" style={{ animationDelay: '2s' }}>
        <Cpu className="h-6 w-6 text-orange-400/60" />
      </div>
      <div className="absolute top-60 right-32 animate-sparkle" style={{ animationDelay: '1.5s' }}>
        <div className="w-4 h-4 bg-teal-400/70 rotate-45"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-12 animate-fade-in">
          {/* Tech Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass-effect glow-effect">
            <Zap className="h-5 w-5 text-emerald-400 animate-sparkle" />
            <span className="text-base font-semibold text-gradient-primary">
              NextWallace Technologies
            </span>
            <Star className="h-5 w-5 text-orange-400 animate-sparkle" />
          </div>

          {/* Dynamic Hero Title */}
          <div className="space-y-8">
            <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-bold leading-tight tracking-tight">
              <span className="block text-gradient mb-4 animate-gradient-wave bg-gradient-to-r from-white via-emerald-200 to-white">Next-Level</span>
              <span className="block text-gradient-primary mb-4 text-8xl md:text-[10rem] lg:text-[14rem] neon-glow">Tech.</span>
              <span className="block text-gradient mb-4 animate-gradient-wave bg-gradient-to-r from-gray-200 via-white to-emerald-100">Real-World</span>
              <span className="block text-gradient-accent text-8xl md:text-[10rem] lg:text-[14rem]">Impact</span>
            </h1>
          </div>
          
          {/* Enhanced Description */}
          <div className="max-w-5xl mx-auto space-y-8">
            <p className="text-3xl md:text-4xl text-emerald-100 leading-relaxed font-light">
              Transforming ideas into <span className="text-gradient-primary font-bold">digital reality</span>
            </p>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              We craft cutting-edge web applications, stunning user interfaces, and powerful digital solutions 
              that drive real business growth and user engagement.
            </p>
          </div>

          {/* Futuristic CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white px-12 py-8 text-2xl font-bold rounded-2xl transition-all duration-300 hover:scale-110 neon-glow group border-0 shadow-2xl"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Rocket className="mr-4 h-7 w-7" />
              Launch Project
              <ArrowRight className="ml-4 h-7 w-7 transition-transform group-hover:translate-x-2" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-emerald-400/50 text-emerald-100 hover:bg-emerald-500/20 px-12 py-8 text-2xl font-bold rounded-2xl transition-all duration-300 hover:scale-110 glass-effect hover-glow"
              onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Our Work
            </Button>
          </div>

          {/* Tech Stats */}
          <div className="grid grid-cols-3 gap-12 pt-20 max-w-3xl mx-auto">
            <div className="text-center glass-effect rounded-2xl p-6 hover-glow">
              <div className="text-5xl font-bold text-gradient-primary mb-3">100+</div>
              <div className="text-emerald-200 text-lg">Projects Launched</div>
            </div>
            <div className="text-center glass-effect rounded-2xl p-6 hover-glow">
              <div className="text-5xl font-bold text-gradient-primary mb-3">24/7</div>
              <div className="text-emerald-200 text-lg">Tech Support</div>
            </div>
            <div className="text-center glass-effect rounded-2xl p-6 hover-glow">
              <div className="text-5xl font-bold text-gradient-primary mb-3">99.9%</div>
              <div className="text-emerald-200 text-lg">Uptime SLA</div>
            </div>
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-12 border-2 border-emerald-400/60 rounded-full flex justify-center neon-glow">
              <div className="w-2 h-4 bg-emerald-400 rounded-full mt-3 animate-pulse"></div>
            </div>
            <ChevronDown className="h-6 w-6 text-emerald-400 animate-sparkle" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
