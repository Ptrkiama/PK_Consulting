
import { Github, Twitter, Linkedin, Instagram, Zap, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const quickLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-gradient-to-t from-background to-gray-950/50 border-t border-primary/20 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center glow-effect">
                <Zap className="h-7 w-7 text-white" />
              </div>
              <span className="text-3xl font-bold text-gradient-primary">NextWallace Technologies</span>
            </div>
            <p className="text-lg text-gradient-primary font-semibold">Next-Level Tech. Real-World Impact</p>
            <p className="text-gray-400 leading-relaxed">
              We specialize in creating innovative digital solutions that transform businesses 
              and deliver exceptional user experiences through cutting-edge technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-primary transition-colors duration-300 hover:underline"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social & Contact */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-12 h-12 glass-effect hover:bg-primary/20 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover-glow group"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6 text-gray-400 group-hover:text-primary transition-colors duration-300" />
                </a>
              ))}
            </div>
            <div className="space-y-2 text-gray-400">
              <p>Ready to start your project?</p>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-300 font-semibold"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get in touch →
              </a>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="border-t border-primary/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 flex items-center gap-2">
              © 2024 NextWallace Technologies. All rights reserved. 
              <span className="flex items-center gap-1">
                Made with <Heart className="h-4 w-4 text-red-400" /> and precision.
              </span>
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-primary transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
