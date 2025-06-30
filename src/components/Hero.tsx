import React from 'react';
import { ArrowRight, Sparkles, Shield, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-primary-50/30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-primary-200 to-accent-200 rounded-full blur-xl opacity-60 animate-float"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-accent-200 to-primary-200 rounded-full blur-xl opacity-40 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-r from-primary-300 to-accent-300 rounded-full blur-xl opacity-50 animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Sparkles className="h-4 w-4 text-primary-500" />
            <span className="text-sm font-medium text-secondary-700">Trusted by 10+ Companies</span>
          </div> */}

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8 animate-fade-in">
            <span className="bg-gradient-to-r from-secondary-900 via-secondary-800 to-secondary-900 bg-clip-text text-transparent">
              Empowering Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 bg-clip-text text-transparent">
              Business with Smart
            </span>
            <br />
            <span className="bg-gradient-to-r from-secondary-900 via-secondary-800 to-secondary-900 bg-clip-text text-transparent">
              IT Solutions
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-secondary-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            We transform medium to large businesses through expert IT consulting, 
            innovative cloud solutions, and strategic technology guidance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={scrollToContact}
              className="group bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center space-x-2 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              <span>Get in Touch</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={scrollToServices}
              className="group border-2 border-secondary-300 hover:border-primary-500 text-secondary-700 hover:text-primary-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 bg-white/50 backdrop-blur-sm hover:bg-white/80"
            >
              Explore Services
            </button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-6 py-3">
              <Shield className="h-5 w-5 text-green-500" />
              <span className="text-secondary-700 font-medium">24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-6 py-3">
              <Zap className="h-5 w-5 text-primary-500" />
              <span className="text-secondary-700 font-medium">3 Years Experience</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-6 py-3">
              <Sparkles className="h-5 w-5 text-accent-500" />
              <span className="text-secondary-700 font-medium">5 Projects</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;