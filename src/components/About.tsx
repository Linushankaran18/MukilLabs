import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Shield, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const [ref] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-primary-50 to-transparent rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-accent-50 to-transparent rounded-full blur-3xl opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={ref}>
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-2 mb-6">
              <Award className="h-4 w-4 text-primary-500" />
              <span className="text-sm font-medium text-primary-700">About Mammilway Inc</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-secondary-900 to-secondary-700 bg-clip-text text-transparent">
                Transforming Businesses
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                Through Technology
              </span>
            </h2>
            
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              We bridge the gap between complex technology and business success, 
              delivering solutions that drive growth, efficiency, and innovation.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-1 gap-16 items-center mb-20">
            {/* Center Content - Team Image and Mission */}
            <div className="text-center space-y-12">
              {/* Team Image */}
              <div className="relative max-w-2xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-100 to-accent-100 rounded-3xl blur-xl opacity-50"></div>
                <div className="relative bg-white rounded-3xl p-2 shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&crop=faces"
                    alt="Our dedicated team at Mammilway Inc working on innovative technology solutions"
                    className="w-full h-80 object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                </div>
                
                {/* Floating stats */}
                <div className="absolute -top-4 -right-4 bg-white border border-gray-200 rounded-2xl p-4 shadow-lg">
                  <div className="text-2xl font-bold text-primary-600">24/7</div>
                  <div className="text-sm text-secondary-600">Support</div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white border border-gray-200 rounded-2xl p-4 shadow-lg">
                  <div className="text-2xl font-bold text-accent-500">100%</div>
                  <div className="text-sm text-secondary-600">Dedicated</div>
                </div>
              </div>

              {/* Mission Content */}
              <div className="max-w-4xl mx-auto">
                
    
                <h3 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6 leading-tight">
                  Empowering Businesses Through 
                  <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent"> Innovative Technology</span>
                </h3>
                
                <p className="text-lg text-secondary-600 leading-relaxed mb-8">
                  At Mammilway Inc, we're passionate about transforming the way businesses operate. Our team of expert developers, designers, and strategists work collaboratively to deliver cutting-edge solutions that drive real results.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-primary-100 p-3 rounded-xl w-fit mx-auto mb-3">
                      <Lightbulb className="h-6 w-6 text-primary-600" />
                    </div>
                    <h4 className="font-semibold text-secondary-900 mb-2">Innovation-Driven Approach</h4>
                    <p className="text-secondary-600 text-sm">We leverage the latest technologies to create solutions that give you a competitive edge.</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-accent-100 p-3 rounded-xl w-fit mx-auto mb-3">
                      <Users className="h-6 w-6 text-accent-600" />
                    </div>
                    <h4 className="font-semibold text-secondary-900 mb-2">Client-Centric Focus</h4>
                    <p className="text-secondary-600 text-sm">Your success is our priority. We work closely with you to understand and exceed your expectations.</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-green-100 p-3 rounded-xl w-fit mx-auto mb-3">
                      <Shield className="h-6 w-6 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-secondary-900 mb-2">Quality Assurance</h4>
                    <p className="text-secondary-600 text-sm">Every solution undergoes rigorous testing to ensure reliability, security, and performance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default About;