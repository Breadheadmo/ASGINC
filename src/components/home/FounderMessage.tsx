import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';

const FounderMessage = () => {
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
          backgroundImage: "linear-gradient(rgba(30, 58, 138, 0.9), rgba(30, 58, 138, 0.8)), url('https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=1920')"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Founder Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <img
                src="/Vusi Zwane copy.jpg"
                alt="Vusi Zwane - ASGINC Africa Founder"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent-500 rounded-full opacity-20" />
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-white/20 rounded-full" />
            </div>
          </motion.div>

          {/* Message Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white"
          >
            <div className="mb-6">
              <Quote className="h-12 w-12 text-accent-400 mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                A Message from Our Founder
              </h2>
            </div>

            <blockquote className="text-lg md:text-xl leading-relaxed mb-8 font-serif italic">
              "When we founded ASGINC Africa in 2018, our vision was clear: to build not just infrastructure, 
              but to build the foundation for Africa's prosperous future. Every project we undertake is a step 
              towards creating sustainable communities, empowering local talent, and driving economic growth 
              across our continent."
            </blockquote>

            <blockquote className="text-lg md:text-xl leading-relaxed mb-8 font-serif italic">
              "Our commitment goes beyond delivering exceptional engineering solutions. We believe in integrity, 
              innovation, and the transformative power of collaboration. Together with our clients and communities, 
              we're not just building structures – we're building dreams into reality."
            </blockquote>

            <div className="border-l-4 border-accent-500 pl-6">
              <p className="font-semibold text-xl">Vusi Zwane</p>
              <p className="text-accent-200">Founder & CEO</p>
              <p className="text-sm text-neutral-300 mt-2">B.Eng (Civil), MBA, Professional Engineer</p>
            </div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute top-1/4 right-8 w-2 h-2 bg-accent-400 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-16 w-1 h-1 bg-white rounded-full"
              animate={{
                scale: [1, 2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-16 fill-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48V120z" />
        </svg>
      </div>
    </section>
  );
};

export default FounderMessage;