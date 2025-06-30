import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', href: 'home' },
    { label: 'About', href: 'about' },
    { label: 'Services', href: 'services' },
    { label: 'Work', href: 'work' },
    { label: 'Contact', href: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section - Left */}
          <div className="flex items-center space-x-1 flex-shrink-0">
            <div className="relative">
              <img 
                src="/images/FullLogo.png" 
                alt="Mukillabs Inc Logo" 
                className="h-12 sm:h-16 lg:h-18 w-auto object-contain"
              />
            </div>
            <span className="hidden sm:block text-xl sm:text-2xl font-serif font-semibold text-secondary-800 tracking-wide">
              MukilLabs
            </span>
          </div>

          {/* Desktop Navigation - Center */}
          <nav className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="relative text-secondary-600 hover:text-secondary-900 font-medium transition-all duration-300 group focus:outline-none"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* CTA Button - Right */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none"
            >
              Book A Call
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-secondary-700" />
            ) : (
              <Menu className="h-6 w-6 text-secondary-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-lg">
            <nav className="flex flex-col p-4 sm:p-6 space-y-3 sm:space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-secondary-700 hover:text-primary-600 font-medium transition-colors py-2 focus:outline-none"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 mt-4 focus:outline-none"
              >
                Book A Call
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;