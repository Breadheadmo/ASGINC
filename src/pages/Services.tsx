import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { HardHat, Zap, Cog, Droplets, Sparkles, Wrench, ArrowRight, CheckCircle, Download, Settings, Building2, Hammer, PaintBucket, Lightbulb, Gauge, Thermometer, Droplet, TreePine, Loader as Road, Chrome as Broom, Shield, ClipboardCheck } from 'lucide-react';

const Services = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = [
    {
      icon: HardHat,
      title: 'Construction & Building Renovation',
      description: 'Comprehensive construction solutions for residential and commercial projects with quality craftsmanship.',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-blue-500 to-blue-600',
      capabilities: [
        'Residential and commercial buildings',
        'Property developments',
        'Building refurbishments',
        'Drywall and ceiling installations',
        'Painting, tiling, and finishing',
        'Maintenance and repairs'
      ],
      subServices: [
        { icon: Building2, name: 'Commercial Buildings' },
        { icon: Hammer, name: 'Renovations' },
        { icon: PaintBucket, name: 'Finishing Works' },
        { icon: Settings, name: 'Maintenance' }
      ]
    },
    {
      icon: Zap,
      title: 'Electrical Engineering',
      description: 'Professional electrical services from installations to maintenance with full compliance and safety standards.',
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-yellow-500 to-yellow-600',
      capabilities: [
        'Electrical reticulation and rewiring',
        'New installations and upgrades',
        'Transformer and substation installations',
        'Street lighting and high-mast lighting',
        'Maintenance and fault finding',
        'Electrical inspections and compliance'
      ],
      subServices: [
        { icon: Lightbulb, name: 'Lighting Systems' },
        { icon: Gauge, name: 'Power Distribution' },
        { icon: Settings, name: 'Installations' },
        { icon: Shield, name: 'Safety Compliance' }
      ]
    },
    {
      icon: Cog,
      title: 'Mechanical Engineering',
      description: 'Advanced mechanical systems including HVAC, pumps, and industrial equipment with expert installation and maintenance.',
      image: 'https://images.pexels.com/photos/162568/gears-cogs-machine-machinery-162568.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-green-500 to-green-600',
      capabilities: [
        'HVAC systems (Heating, Ventilation & Air Conditioning)',
        'Industrial and domestic pumps',
        'Lift and elevator systems',
        'Boiler installations and maintenance',
        'Compressor systems',
        'Plumbing and geyser systems'
      ],
      subServices: [
        { icon: Thermometer, name: 'HVAC Systems' },
        { icon: Settings, name: 'Industrial Pumps' },
        { icon: Cog, name: 'Elevator Systems' },
        { icon: Wrench, name: 'Maintenance' }
      ]
    },
    {
      icon: Droplets,
      title: 'Wet Services – Civil Engineering',
      description: 'Comprehensive water and sanitation solutions including installations, maintenance, and sustainable systems.',
      image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-cyan-500 to-cyan-600',
      capabilities: [
        'Water tank installations',
        'Septic tank systems and toilets',
        'Ablution facilities',
        'Solar geysers and plumbing systems',
        'Irrigation and drainage systems'
      ],
      subServices: [
        { icon: Droplet, name: 'Water Systems' },
        { icon: TreePine, name: 'Solar Geysers' },
        { icon: Settings, name: 'Plumbing' },
        { icon: Droplets, name: 'Drainage' }
      ]
    },
    {
      icon: Road,
      title: 'Civil Engineering',
      description: 'Infrastructure development and civil works including roads, pipelines, and structural projects.',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-gray-500 to-gray-600',
      capabilities: [
        'Pipeline and ducting construction',
        'Retaining walls and fencing',
        'Earthworks and site preparation',
        'Road design and construction',
        'Concrete slabs and drainage',
        'Dam wall construction and structural repair',
        'Residential and township development'
      ],
      subServices: [
        { icon: Road, name: 'Road Construction' },
        { icon: Building2, name: 'Structural Works' },
        { icon: Settings, name: 'Pipeline Systems' },
        { icon: Hammer, name: 'Site Preparation' }
      ]
    },
    {
      icon: Sparkles,
      title: 'Corporate Cleaning Services',
      description: 'Professional cleaning solutions for commercial and government facilities with specialized services.',
      image: 'https://images.pexels.com/photos/4107120/pexels-photo-4107120.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-purple-500 to-purple-600',
      capabilities: [
        'Daily office cleaning (commercial and government)',
        'Specialized deep cleaning',
        'High-rise window cleaning',
        'Post-construction cleanup',
        'Waste and hygiene management',
        'Disinfection and sanitization services'
      ],
      subServices: [
        { icon: Broom, name: 'Office Cleaning' },
        { icon: Sparkles, name: 'Deep Cleaning' },
        { icon: Shield, name: 'Sanitization' },
        { icon: Settings, name: 'Waste Management' }
      ]
    }
  ];

  const additionalServices = [
    {
      icon: ClipboardCheck,
      title: 'Supply & Installation',
      description: 'Construction materials supply and professional installation services'
    },
    {
      icon: Settings,
      title: 'Project Management',
      description: 'Comprehensive project management and site supervision'
    },
    {
      icon: CheckCircle,
      title: 'Consultation Services',
      description: 'Engineering assessments, audits, and professional consultation'
    }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-900 to-primary-800 text-white relative overflow-hidden" ref={heroRef}>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Our
              <span className="text-accent-400"> Services</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-8">
              At ASGINC Africa, we offer a comprehensive range of services across multiple industries. 
              Our strength lies in combining engineering expertise, construction experience, and service 
              delivery to meet diverse client needs.
            </p>
            <p className="text-lg text-neutral-200 max-w-3xl mx-auto">
              We work with clients in both the public and private sector throughout South Africa.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8"
            >
              <Link
                to="/contact"
                className="inline-flex items-center space-x-3 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors group"
              >
                <span>Request a Quote</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Detail Sections */}
      {services.map((service, index) => (
        <ServiceSection key={service.title} service={service} index={index} />
      ))}

      {/* Additional Services */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Additional <span className="text-accent-500">Services</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Comprehensive support services to ensure project success from start to finish.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-neutral-200 text-center"
              >
                <div className="inline-flex p-4 bg-accent-100 rounded-2xl mb-6">
                  <service.icon className="h-12 w-12 text-accent-600" />
                </div>
                <h3 className="text-2xl font-semibold text-neutral-900 mb-4">{service.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your project requirements and discover how 
            ASGINC Africa can bring your vision to life with our comprehensive engineering solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-3 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors group"
            >
              <span>Contact Us Today</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 hover:border-white/50 px-8 py-4 rounded-lg font-semibold transition-colors">
              <Download className="h-5 w-5" />
              <span>Download Brochure</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServiceSection = ({ service, index }: { service: any; index: number }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const isEven = index % 2 === 0;

  return (
    <section className={`py-20 ${isEven ? 'bg-white' : 'bg-neutral-50'}`} ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
          {/* Service Image */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className={`relative ${!isEven ? 'lg:col-start-2' : ''}`}
          >
            <div className="relative">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-20 rounded-2xl`} />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent-500 text-white p-4 rounded-xl shadow-lg">
              <service.icon className="h-8 w-8" />
            </div>

            {/* Sub-services floating cards */}
            <div className="absolute -top-4 -left-4 grid grid-cols-2 gap-2">
              {service.subServices.slice(0, 2).map((subService: any, idx: number) => (
                <motion.div
                  key={subService.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                  className="bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-white/50"
                >
                  <subService.icon className="h-5 w-5 text-accent-600 mb-1" />
                  <p className="text-xs font-medium text-neutral-800">{subService.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Service Content */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? 50 : -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className={`p-3 bg-gradient-to-br ${service.color} rounded-xl shadow-lg`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-neutral-900">{service.title}</h2>
            </div>

            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              {service.description}
            </p>

            {/* Capabilities */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-primary-900 mb-6">Our Capabilities</h3>
              <div className="space-y-3">
                {service.capabilities.map((capability: string, capIndex: number) => (
                  <motion.div
                    key={capability}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + capIndex * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-5 w-5 text-accent-500 flex-shrink-0" />
                    <span className="text-neutral-700">{capability}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sub-services grid */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-primary-900 mb-4">Service Areas</h3>
              <div className="grid grid-cols-2 gap-4">
                {service.subServices.map((subService: any, subIndex: number) => (
                  <motion.div
                    key={subService.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + subIndex * 0.1 }}
                    className="flex items-center space-x-3 bg-neutral-50 p-4 rounded-lg border border-neutral-200"
                  >
                    <subService.icon className="h-5 w-5 text-accent-500" />
                    <span className="text-sm font-medium text-neutral-700">{subService.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center space-x-3 bg-primary-900 hover:bg-primary-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors group"
            >
              <span>Get Quote for This Service</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;