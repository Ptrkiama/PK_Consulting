
import { ExternalLink, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Work = () => {
  const projects = [
    {
      title: 'MECS General Supply',
      description: 'A comprehensive clearing and forwarding company website for East Africa. Features professional business presentation with services showcase, contact information, and modern design.',
      image: '/lovable-uploads/2e1e9bb8-e85a-4348-bf04-e56f9c39d89a.png',
      url: 'https://mecgeneralsupply.co.tz',
      tags: ['Web Development', 'Business Website', 'Responsive Design'],
      category: 'Business Solutions'
    },
    {
      title: 'Lwandai Friends Association',
      description: 'A modern dashboard application for managing group contributions and member tracking. Features real-time progress monitoring, member management, and financial tracking.',
      image: '/lovable-uploads/14b89bca-d5d3-4d6c-9482-bdb0e3e803a3.png',
      url: 'https://lwandai.vercel.app/',
      tags: ['Dashboard', 'React', 'Data Management'],
      category: 'Web Application'
    }
  ];

  return (
    <section id="work" className="py-24 bg-gradient-to-b from-gray-950 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Our</span>{' '}
            <span className="text-gradient-primary">Work</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our latest projects and see how we transform ideas into 
            exceptional digital experiences that drive results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="bg-card/50 border-border hover:bg-card/80 transition-all duration-300 group hover:scale-105 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="bg-secondary/50 text-gray-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary/30 text-primary hover:bg-primary/10 group/btn"
                    onClick={() => window.open(project.url, '_blank')}
                  >
                    <Globe className="h-4 w-4 mr-2 transition-transform group-hover/btn:scale-110" />
                    Visit Site
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-gray-400 hover:text-primary group/btn"
                    onClick={() => window.open(project.url, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2 transition-transform group-hover/btn:scale-110" />
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 group"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Your Project
            <ExternalLink className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Work;
