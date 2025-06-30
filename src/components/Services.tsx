import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Cloud, GitBranch, Globe, Shield, Lightbulb, Database, } from 'lucide-react';

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Cloud,
      title: 'Cloud Consulting',
      description: 'Seamless cloud migration and optimization strategies to reduce costs and improve scalability.',
      features: ['AWS/Azure/GCP Migration', 'Cost Optimization', 'Security Implementation', 'Performance Monitoring'],
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50'
    },
    {
      icon: GitBranch,
      title: 'DevOps & Automation',
      description: 'Streamline your development pipeline with modern DevOps practices and automation tools.',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Container Orchestration', 'Monitoring & Logging'],
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks and scalable architectures.',
      features: ['React/Vue/Angular', 'API Development', 'Database Design', 'Performance Optimization'],
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50'
    },
    {
      icon: Shield,
      title: 'AI & Data Intelligence',
      description: 'Comprehensive security assessments and implementation of robust security measures.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance Management', 'Incident Response'],
      gradient: 'from-red-500 to-orange-500',
      bgGradient: 'from-red-50 to-orange-50'
    },
    {
      icon: Lightbulb,
      title: 'IT Strategy',
      description: 'Strategic technology planning aligned with your business objectives and growth plans.',
      features: ['Technology Roadmaps', 'Digital Transformation', 'Vendor Management', 'ROI Analysis'],
      gradient: 'from-yellow-500 to-amber-500',
      bgGradient: 'from-yellow-50 to-amber-50'
    },
    {
      icon: Database,
      title: 'Data Solutions',
      description: 'Turn your data into actionable insights with modern analytics and BI solutions.',
      features: ['Data Architecture', 'Business Intelligence', 'Data Warehousing', 'Analytics Platforms'],
      gradient: 'from-indigo-500 to-blue-500',
      bgGradient: 'from-indigo-50 to-blue-50'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary-200 to-accent-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-r from-accent-200 to-primary-200 rounded-full blur-3xl opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={ref} className={`${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-2 mb-6">
              <Lightbulb className="h-4 w-4 text-primary-500" />
              <span className="text-sm font-medium text-primary-700">Our Services</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-secondary-900 to-secondary-700 bg-clip-text text-transparent">
                Comprehensive IT Solutions
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                Tailored for Your Success
              </span>
            </h2>
            
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              From cloud consulting to cybersecurity, we provide end-to-end IT solutions 
              that drive innovation and business growth.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-gray-200"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative">
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    <div className={`relative bg-gradient-to-r ${service.gradient} p-3 rounded-xl`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-secondary-900 mb-3 group-hover:text-secondary-800 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-secondary-600 mb-6 leading-relaxed group-hover:text-secondary-700 transition-colors">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-secondary-600 group-hover:text-secondary-700 transition-colors">
                        <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.gradient} rounded-full mr-3`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Services;