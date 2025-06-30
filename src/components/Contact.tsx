import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'info@mukillabs.com',
      href: 'mailto:info@mukillabs.com',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '732-668-5425',
      href: 'tel:+732-668-5425',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      label: 'Office',
      value: '2607 Brahms Ave, \nSan Jose, CA 95122',
      href: 'https://www.google.com/maps/place/2607+Brahms+Ave,+San+Jose,+CA+95122,+USA/@37.3204934,-121.8213415,17z/data=!3m1!4b1!4m6!3m5!1s0x808e3298f1129ff3:0x243af67afc0cc44d!8m2!3d37.3204934!4d-121.8187666!16s%2Fg%2F11c12qnx3f?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="contact" className="py-18 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-primary-100 to-accent-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-accent-100 to-primary-100 rounded-full blur-3xl opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={ref} className={`${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-2 mb-6">
              <MessageSquare className="h-4 w-4 text-primary-500" />
              <span className="text-sm font-medium text-primary-700">Get in Touch</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-secondary-900 to-secondary-700 bg-clip-text text-transparent">
                Ready to Transform
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                Your Business?
              </span>
            </h2>
            
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Let's discuss your project and explore how our expert team can help 
              you achieve your technology goals and drive business success.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="group">
                      <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
                        <div className="relative">
                          <div className={`absolute inset-0 bg-gradient-to-r ${info.gradient} rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity`}></div>
                          <div className={`relative bg-gradient-to-r ${info.gradient} p-3 rounded-xl`}>
                            <info.icon className="h-5 w-5 text-white" />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-secondary-900 mb-1">{info.label}</h4>
                          <a 
                            href={info.href}
                            className="text-secondary-600 hover:text-primary-600 transition-colors whitespace-pre-line text-sm"
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-gradient-to-r from-primary-500 to-accent-500 p-2 rounded-lg">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-secondary-900">Business Hours</h4>
                </div>
                <div className="text-sm text-secondary-600 space-y-1">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                  <p>Saturday: 10:00 AM - 2:00 PM EST</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6">
                <h4 className="font-semibold text-green-800 mb-2">Quick Response</h4>
                <p className="text-sm text-green-700">
                  We typically respond to all inquiries within 2-4 hours during business hours.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-secondary-900 mb-6">
                  Send us a Message
                </h3>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-200 to-emerald-200 rounded-full blur opacity-75"></div>
                      <div className="relative bg-gradient-to-r from-green-500 to-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <h4 className="text-2xl font-bold text-secondary-900 mb-3">
                      Thank you for your message!
                    </h4>
                    <p className="text-secondary-600 leading-relaxed">
                      We've received your inquiry and will get back to you within 24 hours. 
                      Our team is excited to discuss your project!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-secondary-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-secondary-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-secondary-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                        placeholder="Your Company Inc."
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-secondary-700 mb-2">
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 resize-none bg-gray-50 focus:bg-white"
                        placeholder="Tell us about your project, challenges, and goals. The more details you provide, the better we can help you..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;