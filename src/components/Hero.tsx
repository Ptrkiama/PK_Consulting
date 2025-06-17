
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-dark">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-12 animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="block text-gradient mb-4">Next-Level</span>
            <span className="block text-gradient">Real-World</span>
            <span className="block text-gradient-primary">Impact</span>
          </h1>
          
          <div className="pt-8">
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              NextWallace Technologies crafts extraordinary digital experiences that elevate your brand 
              and drive meaningful results through innovative design and cutting-edge technology.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-12">
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary/30 text-white hover:bg-primary/10 px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
              onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Our Work
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
