import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mwpbnqqd', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: data
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "We'll get back to you within 24 hours.",
        });

        setFormData({
          name: '',
          email: '',
          company: '',
          message: ''
        });
      } else {
        toast({
          title: "Something went wrong",
          description: "Please try again or email us directly.",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Network issue. Try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@pktechnologies.co.tz',
      link: 'mailto:hello@pktechnologies.co.tz'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+255 675 129 428',
      link: 'tel:+255675129428'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Dar es salaam, TZ',
      link: null
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card/50 border-border">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="_subject" value="New message from contact form" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-background/50 border-border focus:border-primary"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-background/50 border-border focus:border-primary"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-background/50 border-border focus:border-primary"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-background/50 border-border focus:border-primary min-h-[120px]"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 group"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                We’re ready when you are. Bring your ideas, and we’ll bring the tech to make them real.
              </p>
            </div>
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.title} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400">{info.title}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-white hover:text-primary transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-white">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
