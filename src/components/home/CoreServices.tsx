import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { HardHat, Zap, Cog, Droplets, Sparkles, ArrowRight, PaintBucket, Lightbulb, Thermometer, Droplet, Chrome as Broom } from 'lucide-react';

const CoreServices = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: HardHat,
      title: 'Construction & Renovation',
      description: 'Building development, ceiling installation, painting & tiling for residential and commercial projects.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      highlights: ['Building Development', 'Ceiling Installation', 'Painting & Tiling']
    },
    {
      icon: Zap,
      title: 'Electrical Engineering',
      description: 'Installations, rewiring, inspections, transformer setup and comprehensive electrical solutions.',
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600',
      highlights: ['Installations', 'Rewiring', 'Transformer Setup']
    },
    {
      icon: Cog,
      title: 'Mechanical Services',
      description: 'HVAC, plumbing, elevator systems and comprehensive mechanical engineering solutions.',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      highlights: ['HVAC Systems', 'Plumbing', 'Elevator Systems']
    },
    {
      icon: Droplets,
      title: 'Civil & Wet Services',
      description: 'Drainage, pipelines, roads, and ablution facilities with expert civil engineering.',
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'bg-cyan-50',
      iconColor: 'text-cyan-600',
      highlights: ['Drainage Systems', 'Pipeline Construction', 'Road Development']
    },
    {
      icon: Sparkles,
      title: 'Cleaning Services',
      description: 'Office, post-construction, high-rise window cleaning and comprehensive facility maintenance.',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      highlights: ['Office Cleaning', 'Post-Construction', 'Window Cleaning']
    },
  ];

  return (
    <section id="services" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Service
            <span className="text-accent-500 relative">
              {' '}Highlights
              <motion.span
                className="absolute bottom-0 left-0 w-full h-1 bg-accent-500"
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Comprehensive engineering and infrastructure solutions tailored to meet 
            the diverse needs of our clients across South Africa.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 hover:border-neutral-200 overflow-hidden"
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              {/* Service Icon */}
              <div className={`inline-flex p-4 ${service.bgColor} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`h-8 w-8 ${service.iconColor}`} />
              </div>

              {/* Service Content */}
              <h3 className="text-xl font-semibold text-neutral-900 mb-3 group-hover:text-primary-900 transition-colors">
                {service.title}
              </h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Service Highlights */}
              <div className="space-y-2 mb-6">
                {service.highlights.map((highlight, idx) => (
                  <div key={highlight} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent-500 rounded-full" />
                    <span className="text-sm text-neutral-600">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Learn More Link */}
              <Link
                to="/services"
                className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-800 font-medium group-hover:translate-x-2 transition-all duration-300"
              >
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-accent-500/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-tl from-primary-500/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}

          {/* View All Services Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="group relative bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-white overflow-hidden"
          >
            <div className="relative z-10">
              <div className="inline-flex p-4 bg-white/10 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <ArrowRight className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">
                View All Services
              </h3>
              <p className="text-neutral-200 mb-6 leading-relaxed">
                Explore our complete range of engineering and construction services.
              </p>
              
              <Link
                to="/services"
                className="inline-flex items-center space-x-2 text-accent-400 hover:text-accent-300 font-medium group-hover:translate-x-2 transition-all duration-300"
              >
                <span>Explore Services</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 right-4 w-32 h-32 border border-white/20 rounded-full" />
              <div className="absolute bottom-4 left-4 w-24 h-24 border border-white/20 rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoreServices;