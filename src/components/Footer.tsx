import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = {
    company: [
      { label: 'About Us', href: 'about' },
      { label: 'Our Services', href: 'services' },
      { label: 'Our Work', href: 'work' },
      { label: 'Contact', href: 'contact' }
    ],
    services: [
      { label: 'Cloud Consulting', href: 'services' },
      { label: 'DevOps & Automation', href: 'services' },
      { label: 'Web Development', href: 'services' },
      { label: 'AI & Data Intelligence', href: 'services' }
    ]
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', gradient: 'from-blue-500 to-blue-600' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook', gradient: 'from-blue-600 to-blue-700' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram', gradient: 'from-pink-500 to-purple-600' }
  ];

  return (
    <footer className="bg-secondary-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-primary-900/20 to-accent-900/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-accent-900/20 to-primary-900/20 rounded-full blur-3xl"></div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="relative inset-0 bg-gradient-to-r from-primary-200 to-accent-200 rounded-xl blur opacity-75"></div>
                  <div className="relative bg-gradient-to-r from-primary-100 to-accent-100 p-2 rounded-xl">
                    <img 
                      src="/images/fullLogo.png" 
                      alt="MukilLabs Inc Logo"
                      className="h-8 w-auto object-contain"
                    />
                  </div>
                </div>
                <span className="text-xl font-bold">MukilLabs</span>
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Empowering businesses with smart IT solutions and strategic guidance 
                for 3 years. Your technology partner for digital transformation.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="group relative"
                    aria-label={social.label}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${social.gradient} rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity`}></div>
                    <div className={`relative bg-gradient-to-r ${social.gradient} p-3 rounded-xl hover:scale-110 transition-transform duration-300`}>
                      <social.icon className="h-5 w-5 text-white" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                  <a 
                    href="mailto:hello@techconsultpro.com"
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    info@mukillabs.com
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                  <a 
                    href="tel:+15551234567"
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    732-668-5425
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    2607 Brahms Ave,<br />
                    San Jose, CA 95122
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © {currentYear} MukilLabs Inc. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 mt-4 md:mt-0">
                <div className="flex space-x-6">
                  <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200">
                    Privacy Policy
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200">
                    Terms of Service
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200">
                    Cookie Policy
                  </a>
                </div>
                <button
                  onClick={scrollToTop}
                  className="bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 p-2 rounded-lg transition-all duration-300 hover:scale-110"
                  aria-label="Scroll to top"
                >
                  <ArrowUp className="h-4 w-4 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;