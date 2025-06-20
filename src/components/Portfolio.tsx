
import { ExternalLink, Globe, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Portfolio = () => {
  const projects = [
    {
      title: 'MECS General Supply',
      description: 'A comprehensive clearing and forwarding company website for East Africa. Features professional business presentation with services showcase, contact information, and modern design.',
      image: '/lovable-uploads/2e1e9bb8-e85a-4348-bf04-e56f9c39d89a.png',
      url: 'https://mecgeneralsupply.co.tz',
      github: '',
      tags: ['Web Development', 'Business Website', 'Responsive Design'],
      category: 'Business Solutions'
    },
    {
      title: 'Lwandai Friends Association',
      description: 'A modern dashboard application for managing group contributions and member tracking. Features real-time progress monitoring, member management, and financial tracking.',
      image: '/lovable-uploads/14b89bca-d5d3-4d6c-9482-bdb0e3e803a3.png',
      url: 'https://lwandai.vercel.app/',
      github: '',
      tags: ['Dashboard', 'React', 'Data Management'],
      category: 'Web Application'
    }
  ];

  return (
    <section id="Portfolio" className="py-24 bg-gradient-to-b from-gray-950 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Our</span>{' '}
            <span className="text-gradient-primary">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Here’s a look at what we’ve built. These projects reflect our passion, skills, and the trust our clients place in us.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 300}ms` }}
            >
              <Card className="bg-card/30 border-border/50 hover:bg-card/60 transition-all duration-500 group-hover:border-primary/30 overflow-hidden backdrop-blur-sm">
                {/* Project Image */}
                <div className="relative overflow-hidden h-80">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6">
                    <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30 font-semibold">
                      {project.category}
                    </Badge>
                  </div>

                  {/* Action Buttons Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="flex gap-4">
                      <Button 
                        size="lg"
                        className="bg-primary/90 hover:bg-primary text-white shadow-lg backdrop-blur-sm"
                        onClick={() => window.open(project.url, '_blank')}
                      >
                        <Globe className="h-5 w-5 mr-2" />
                        View Live
                      </Button>
                      {project.github && (
                        <Button 
                          variant="outline" 
                          size="lg"
                          className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                          onClick={() => window.open(project.github, '_blank')}
                        >
                          <Github className="h-5 w-5 mr-2" />
                          Code
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Project Details */}
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed text-lg">
                        {project.description}
                      </p>
                    </div>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-3">
                      {project.tags.map((tag) => (
                        <Badge 
                          key={tag} 
                          variant="outline"
                          className="border-secondary/50 text-gray-300 hover:border-primary/50 hover:text-primary transition-colors duration-300"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Bottom Actions */}
                    <div className="flex justify-between items-center pt-4 border-t border-border/30">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-gray-400 hover:text-primary group/btn p-0"
                        onClick={() => window.open(project.url, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2 transition-transform group-hover/btn:scale-110" />
                        View Details
                      </Button>
                      
                      <div className="text-sm text-gray-500">
                        Click to explore
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Let's collaborate to bring your vision to life with cutting-edge technology and innovative solutions.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 group shadow-lg shadow-primary/25"
            >
              Get In Touch
              <ExternalLink className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
