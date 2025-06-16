
import { Github, Twitter, Linkedin, Instagram, Zap, Heart, Mail, Phone } from 'lucide-react';

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
    <footer className="bg-gradient-to-t from-slate-950 to-emerald-950/10 border-t border-emerald-500/20 py-20 relative">
      <div className="absolute inset-0 circuit-pattern opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* Company Info */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center neon-glow">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <span className="text-3xl font-bold text-gradient-primary">NextWallace Technologies</span>
            </div>
            <p className="text-xl text-gradient-primary font-bold">Next-Level Tech. Real-World Impact</p>
            <p className="text-emerald-200 leading-relaxed text-lg">
              Pioneering digital transformation through innovative technology solutions 
              that deliver measurable business value and exceptional user experiences.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-emerald-200">
                <Mail className="h-5 w-5 text-emerald-400" />
                <span>contact@nextwallace.tech</span>
              </div>
              <div className="flex items-center gap-3 text-emerald-200">
                <Phone className="h-5 w-5 text-emerald-400" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-emerald-100">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-emerald-200 hover:text-emerald-400 transition-colors duration-300 hover:underline text-lg"
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

          {/* Social & Newsletter */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-emerald-100">Connect With Us</h3>
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-14 h-14 glass-effect hover:bg-emerald-500/30 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover-glow group"
                  aria-label={social.label}
                >
                  <social.icon className="h-7 w-7 text-emerald-300 group-hover:text-emerald-400 transition-colors duration-300" />
                </a>
              ))}
            </div>
            <div className="space-y-4 text-emerald-200">
              <p className="text-lg">Ready to innovate together?</p>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-3 text-emerald-400 hover:text-emerald-300 transition-colors duration-300 font-bold text-xl group"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Start Your Project
                <span className="transition-transform group-hover:translate-x-2">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-emerald-500/20 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-emerald-300 flex items-center gap-3 text-lg">
              © 2024 NextWallace Technologies. All rights reserved. 
              <span className="flex items-center gap-2">
                Built with <Heart className="h-5 w-5 text-red-400 animate-sparkle" /> and innovation.
              </span>
            </p>
            <div className="flex items-center gap-8 text-emerald-300">
              <a href="#" className="hover:text-emerald-400 transition-colors duration-300 text-lg">Privacy Policy</a>
              <a href="#" className="hover:text-emerald-400 transition-colors duration-300 text-lg">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
