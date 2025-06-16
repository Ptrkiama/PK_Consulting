
import { ArrowRight, ChevronDown, Zap, Rocket, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-gray-950/50 to-purple-950/20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-4 h-4 bg-primary/60 rounded-full blur-sm"></div>
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-6 h-6 bg-cyan-400/40 rounded-full blur-sm"></div>
      </div>
      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-3 h-3 bg-pink-400/50 rounded-full blur-sm"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-12 animate-fade-in">
          {/* Enhanced Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-effect glow-effect">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-gradient-primary">
              Innovative Technology Solutions
            </span>
            <Star className="h-4 w-4 text-yellow-400" />
          </div>

          {/* Enhanced Hero Title */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-tight tracking-tight">
              <span className="block text-gradient mb-2 animate-gradient bg-gradient-to-r from-white via-gray-200 to-white">Next-Level</span>
              <span className="block text-gradient-primary mb-2 text-7xl md:text-9xl lg:text-[10rem]">Tech.</span>
              <span className="block text-gradient mb-2 animate-gradient bg-gradient-to-r from-gray-300 via-white to-gray-300">Real-World</span>
              <span className="block text-gradient-accent text-7xl md:text-9xl lg:text-[10rem]">Impact</span>
            </h1>
          </div>
          
          {/* Enhanced Description */}
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed font-light">
              <span className="text-gradient-primary font-semibold">NextWallace Technologies</span> crafts extraordinary digital experiences
            </p>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
              We elevate your brand and drive meaningful results through innovative design, 
              cutting-edge technology, and strategic digital solutions.
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white px-10 py-7 text-xl font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover-glow group border-0 shadow-2xl"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Rocket className="mr-3 h-6 w-6" />
              Start Your Project
              <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary/40 text-white hover:bg-primary/10 px-10 py-7 text-xl font-semibold rounded-2xl transition-all duration-300 hover:scale-105 glass-effect hover-glow"
              onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Our Work
            </Button>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient-primary mb-2">50+</div>
              <div className="text-gray-400 text-sm">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient-primary mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient-primary mb-2">99%</div>
              <div className="text-gray-400 text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
            </div>
            <ChevronDown className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
