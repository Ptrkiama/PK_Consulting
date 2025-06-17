import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-dark"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="block text-gradient mb-4 typewriter-line" style={{ animationDelay: '0s' }}>
              &nbsp;
            </span>
            <span className="block text-gradient mb-4 typewriter-line" style={{ animationDelay: '0.5s' }}>
              “Your Growth
            </span>
            <span className="block text-gradient-primary typewriter-line" style={{ animationDelay: '1.5s' }}>
              Is
            </span>
            <span className="block text-gradient typewriter-line" style={{ animationDelay: '2.2s' }}>
              Built
            </span>
            <span className="block text-gradient-primary typewriter-line" style={{ animationDelay: '3s' }}>
              Into Our Code.”
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Our software development company enables businesses to grow and transform using the latest technologies in the software industry.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary/30 text-white hover:bg-primary/10 px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
              onClick={() =>
                document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Explore Our Service
            </Button>

            <Button
              variant="default"
              size="lg"
              className="bg-primary text-white px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
              onClick={() =>
                document.querySelector('#Portfolio')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-gray-400" />
        </div>
      </div>

      {/* Typewriter CSS styles */}
      <style jsx>{`
        .typewriter-line {
          display: block;
          overflow: hidden;
          white-space: nowrap;
          width: 0;
          animation: typing 1s steps(20, end) forwards;
        }
        .typewriter-line:nth-child(1) {
          animation-duration: 0.5s;
          animation-delay: 0s;
        }
        .typewriter-line:nth-child(2) {
          animation-duration: 1s;
          animation-delay: 0.5s;
        }
        .typewriter-line:nth-child(3) {
          animation-duration: 0.7s;
          animation-delay: 1.5s;
        }
        .typewriter-line:nth-child(4) {
          animation-duration: 0.8s;
          animation-delay: 2.2s;
        }
        .typewriter-line:nth-child(5) {
          animation-duration: 1s;
          animation-delay: 3s;
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
