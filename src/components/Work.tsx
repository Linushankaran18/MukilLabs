import React from 'react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github,} from 'lucide-react';

const Work: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Azure Cloud Migration',
      description: 'Migrated a Fortune 500 manufacturing company\'s entire infrastructure to AWS, reducing operational costs by 40% and improving system reliability to 99.9% uptime.',
      techStack: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
      category: 'Cloud Infrastructure',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      gradient: 'from-blue-500 to-cyan-500',
      results: ['40% Cost Reduction', '99.9% Uptime', '3x Faster Deployments']
    },
    {
      title: 'Real Estate Management for Agents',
      description: 'Developed a comprehensive real estate CRM platform for property agents, featuring lead management, property listings, client communication tools, and automated market analysis.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io', 'Stripe API'],
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      gradient: 'from-green-500 to-emerald-500',
      results: ['30% More Leads', 'Real-time Notifications', 'Automated Workflows']
    },
    {
      title: 'Restaurant Management Application',
      description: 'Built a complete restaurant management system with POS integration, inventory tracking, staff scheduling, customer ordering, and real-time analytics dashboard.',
      techStack: ['React Native', 'Firebase', 'Node.js', 'PostgreSQL', 'PayPal API', 'Twilio'],
      category: 'Mobile & Web App',
      image: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      gradient: 'from-purple-500 to-pink-500',
      results: ['25% Order Efficiency', 'Inventory Automation', 'Customer Satisfaction']
    },
    {
      title: 'R & D for LLM',
      description: 'Conducted advanced research and development on Large Language Models, focusing on fine-tuning, prompt engineering, and developing domain-specific AI applications with natural language processing.',
      techStack: ['Python', 'PyTorch', 'Transformers', 'OpenAI API', 'Langchain', 'Vector Databases'],
      category: 'AI & Data Intelligence',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      gradient: 'from-red-500 to-orange-500',
      results: ['Custom AI Models', 'Enhanced Accuracy', 'Domain Expertise']
    },
    {
      title: 'Digital Transformation Strategy',
      description: 'Led digital transformation initiative for a traditional logistics company, modernizing operations and increasing efficiency by 60% through strategic technology adoption.',
      techStack: ['Strategic Planning', 'Process Automation', 'API Integration', 'Change Management'],
      category: 'IT Strategy',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      gradient: 'from-yellow-500 to-amber-500',
      results: ['60% Efficiency Gain', 'Digital Workflows', 'ROI in 6 Months']
    },
    {
      title: 'Analytics and Monitoring Solution',
      description: 'Created an advanced analytics dashboard for an e-commerce platform, providing real-time insights into customer behavior and driving 25% increase in conversions.',
      techStack: ['Python', 'Tableau', 'Apache Spark', 'MongoDB', 'Machine Learning'],
      category: 'Data Analytics',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      gradient: 'from-indigo-500 to-blue-500',
      results: ['25% Conversion Increase', 'Real-time Insights', 'Predictive Analytics']
    }
  ];

  return (
    <section id="work" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-primary-100 to-accent-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-accent-100 to-primary-100 rounded-full blur-3xl opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={ref} className={`${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-2 mb-6">
              <ExternalLink className="h-4 w-4 text-primary-500" />
              <span className="text-sm font-medium text-primary-700">Our Work</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-secondary-900 to-secondary-700 bg-clip-text text-transparent">
                From Vision to
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                Digital Reality
              </span>
            </h2>
            
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Explore how we've helped businesses transform their technology landscape 
              and achieve measurable results through innovative solutions.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                      <button className="bg-white/20 backdrop-blur-sm text-white p-2.5 rounded-xl hover:bg-white/30 transition-colors">
                        <ExternalLink className="h-4 w-4" />
                      </button>
                      <button className="bg-white/20 backdrop-blur-sm text-white p-2.5 rounded-xl hover:bg-white/30 transition-colors">
                        <Github className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`text-xs font-semibold text-white bg-gradient-to-r ${project.gradient} px-3 py-1.5 rounded-full`}>
                      {project.category}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-secondary-600 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Results */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.results.map((result, resultIndex) => (
                      <span 
                        key={resultIndex} 
                        className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full border border-green-200"
                      >
                        {result}
                      </span>
                    ))}
                  </div>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="text-xs bg-secondary-100 text-secondary-700 px-2 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;