import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, Linkedin, Mail } from 'lucide-react';

const TeamPreview = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teamMembers = [
    {
      name: 'Sipho Mthembu',
      title: 'Founder & CEO',
      role: 'Strategic Leadership & Business Development',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      email: 'sipho@asginc.co.za',
    },
    {
      name: 'Dr. Thandiwe Mokoena',
      title: 'Chief Technical Officer',
      role: 'Engineering Excellence & Innovation',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      email: 'thandiwe@asginc.co.za',
    },
    {
      name: 'Michael van der Merwe',
      title: 'Head of Operations',
      role: 'Project Management & Quality Assurance',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      email: 'michael@asginc.co.za',
    },
    {
      name: 'Nomsa Dlamini',
      title: 'Head of Safety & Compliance',
      role: 'Safety Standards & Regulatory Compliance',
      image: 'https://images.pexels.com/photos/3760316/pexels-photo-3760316.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      email: 'nomsa@asginc.co.za',
    },
  ];

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Meet Our
            <span className="text-accent-500"> Leadership</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Our experienced leadership team combines decades of engineering expertise 
            with innovative thinking to deliver exceptional results for our clients.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 text-center relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-accent-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Member Photo */}
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-neutral-100 group-hover:ring-accent-200 transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {/* Floating Dots */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Member Info */}
              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-neutral-900 mb-1 group-hover:text-primary-900 transition-colors">
                  {member.name}
                </h3>
                <p className="text-accent-600 font-medium text-sm mb-2">
                  {member.title}
                </p>
                <p className="text-neutral-600 text-sm mb-4 leading-relaxed">
                  {member.role}
                </p>

                {/* Social Links */}
                <div className="flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={member.linkedin}
                    className="p-2 bg-primary-100 hover:bg-primary-200 text-primary-600 rounded-full transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="p-2 bg-accent-100 hover:bg-accent-200 text-accent-600 rounded-full transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Meet Full Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Link
            to="/team"
            className="inline-flex items-center space-x-3 bg-primary-900 hover:bg-primary-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors group"
          >
            <span>Meet the Full Team</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamPreview;