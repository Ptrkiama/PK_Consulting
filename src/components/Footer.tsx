
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-black border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-3xl font-bold text-gradient-primary">Pk Technologies</span>
            <p className="text-gray-400 mt-2">Next-Level Tech. Real-World Impact</p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 bg-card hover:bg-primary/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors duration-300" />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-gray-500">
            © 2025 Pk Technologies. Crafted with passion and precision.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
