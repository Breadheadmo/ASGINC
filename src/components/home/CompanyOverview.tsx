import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Award, Users, Calendar, Target, ArrowRight, Shield, CheckCircle } from 'lucide-react';

const CompanyOverview = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: Calendar, value: '6+', label: 'Years Experience' },
    { icon: Target, value: '150+', label: 'Projects Completed' },
    { icon: Users, value: '25+', label: 'Expert Team Members' },
    { icon: Award, value: '100%', label: 'Client Satisfaction' },
  ];

  const coreValues = [
    { title: 'Trusted Experience', description: 'Proven track record in engineering excellence' },
    { title: 'Skilled Professionals', description: 'Team of qualified technical experts' },
    { title: 'Timely Completion', description: 'Projects delivered on schedule' },
    { title: 'Quality Standards', description: 'High quality results guaranteed' },
    { title: 'Client Satisfaction', description: '100% commitment to client success' },
  ];

  return (
    <section className="py-20 bg-neutral-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              About
              <span className="text-accent-500"> ASGINC Africa</span>
            </h2>
            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
              ASGINC AFRICA is a multi-disciplinary company specializing in Engineering, Construction, 
              Civil Works, and Cleaning Services.
            </p>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              With a team of skilled professionals, we pride ourselves on quality service delivery, 
              integrity, and safety across all our operations.
            </p>
            
            {/* Why Choose Us Values */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-primary-900 mb-6">Why Choose Us?</h3>
              <div className="space-y-3">
                {coreValues.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="h-5 w-5 text-accent-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary-900">{value.title}</h4>
                      <p className="text-sm text-neutral-600">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center space-x-3 bg-primary-900 hover:bg-primary-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors group"
            >
              <span>Learn More</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right Column - Stats and Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Background Image */}
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="ASGINC Team at Work"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent rounded-2xl" />
            </div>

            {/* Stats Overlay */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-neutral-200">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="flex justify-center mb-2">
                      <div className="p-2 bg-accent-100 rounded-lg">
                        <stat.icon className="h-5 w-5 text-accent-600" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-primary-900">{stat.value}</div>
                    <div className="text-xs text-neutral-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 bg-accent-400 rounded-full opacity-20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute top-1/3 -left-8 w-12 h-12 bg-primary-400 rounded-full opacity-20"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;