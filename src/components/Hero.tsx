import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    // Delay background rendering slightly for smoother perceived load
    const timer = setTimeout(() => setShowBackground(true), 300); // adjust delay as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-dark"
    >
      {/* Lazy Background Effects */}
      {showBackground && (
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-40 h-40 sm:w-72 sm:h-72 bg-primary/10 rounded-full blur-2xl sm:blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-56 h-56 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-1000" />
        </div>
      )}

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-10">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
          <span className="block text-gradient typewriter-line" style={{ animationDelay: '0.2s' }}>
            Your Growth
          </span>
          <span className="block text-gradient-primary typewriter-line" style={{ animationDelay: '1s' }}>
            Is Built
          </span>
          <span className="block text-gradient typewriter-line" style={{ animationDelay: '1.8s' }}>
            Into Our Code.
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-md sm:max-w-xl mx-auto">
          We design and build web solutions that help startups and businesses grow faster — with clean code, scalable systems, and a growth mindset.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 w-full px-2">
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-2 border-primary/30 text-white hover:bg-primary/10 px-6 py-4 text-sm sm:text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
            onClick={() =>
              document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Explore Our Services
          </Button>

          <Button
            variant="default"
            size="lg"
            className="w-full sm:w-auto bg-primary text-white px-6 py-4 text-sm sm:text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
            onClick={() =>
              document.querySelector('#Portfolio')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            See Our Work
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-gray-400" />
        </div>
      </div>

      {/* Typewriter animation */}
      <style jsx>{`
        .typewriter-line {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          width: 0;
          animation: typing 1.2s steps(20, end) forwards;
        }
        .typewriter-line:nth-child(1) {
          animation-delay: 0.2s;
        }
        .typewriter-line:nth-child(2) {
          animation-delay: 1s;
        }
        .typewriter-line:nth-child(3) {
          animation-delay: 1.8s;
        }

        @keyframes typing {
          to {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
