import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const CTABanner = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 relative overflow-hidden" ref={ref}>
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "linear-gradient(rgba(30, 58, 138, 0.9), rgba(15, 23, 42, 0.9)), url('https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=1920')"
        }}
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent-500/10 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-white/5 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Main CTA Content */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Need a professional and reliable
            <span className="text-accent-400 block">partner for your next project?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-neutral-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join the growing list of satisfied clients who trust ASGINC Africa for their 
            engineering and infrastructure needs. Let's transform your vision into reality.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          >
            <Link
              to="/contact"
              className="group bg-accent-500 hover:bg-accent-600 text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center space-x-3 hover:shadow-lg hover:shadow-accent-500/25 hover:scale-105"
            >
              <Phone className="h-6 w-6" />
              <span>Get In Touch</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/services"
              className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 hover:border-white/50 px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center space-x-3"
            >
              <span>Explore Services</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {/* Phone */}
            <div className="flex flex-col items-center space-y-3 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="p-3 bg-accent-500 rounded-full">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div className="text-center">
                <p className="text-white font-semibold">Call Us</p>
                <p className="text-neutral-200">+27 11 026 7123</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center space-y-3 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="p-3 bg-accent-500 rounded-full">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div className="text-center">
                <p className="text-white font-semibold">Email Us</p>
                <p className="text-neutral-200">info@asginc.co.za</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex flex-col items-center space-y-3 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="p-3 bg-accent-500 rounded-full">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div className="text-center">
                <p className="text-white font-semibold">Visit Us</p>
                <p className="text-neutral-200 text-sm">31 Albrecht Street, Sunward Park, Boksburg</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-1/4 right-8 w-2 h-2 bg-accent-400 rounded-full"
        animate={{
          scale: [1, 2, 1],
          opacity: [1, 0.3, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-8 w-1 h-1 bg-white rounded-full"
        animate={{
          scale: [1, 3, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </section>
  );
};

export default CTABanner;