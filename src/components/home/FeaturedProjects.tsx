import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, ArrowRight, ExternalLink } from 'lucide-react';

const FeaturedProjects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      title: 'Corporate Office Complex',
      location: 'Sandton, Johannesburg',
      year: '2024',
      category: 'Construction',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Modern 15-story office complex featuring sustainable design and state-of-the-art facilities.',
      services: ['Construction', 'Electrical', 'Mechanical'],
    },
    {
      id: 2,
      title: 'Industrial Power Plant',
      location: 'Durban, KwaZulu-Natal',
      year: '2023',
      category: 'Electrical',
      image: 'https://images.pexels.com/photos/9875420/pexels-photo-9875420.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete electrical infrastructure for a 50MW renewable energy facility.',
      services: ['Electrical', 'Civil'],
    },
    {
      id: 3,
      title: 'Water Treatment Facility',
      location: 'Cape Town, Western Cape',
      year: '2023',
      category: 'Civil',
      image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Advanced water treatment plant serving 500,000 residents with cutting-edge filtration technology.',
      services: ['Civil', 'Mechanical'],
    },
  ];

  return (
    <section className="py-20 bg-neutral-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Featured
            <span className="text-accent-500"> Projects</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Showcasing our commitment to excellence through transformative infrastructure 
            projects that shape communities and drive economic growth.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors">
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-neutral-900 mb-2 group-hover:text-primary-900 transition-colors">
                  {project.title}
                </h3>
                
                <div className="flex items-center space-x-4 text-sm text-neutral-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{project.year}</span>
                  </div>
                </div>

                <p className="text-neutral-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Services Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.services.map((service) => (
                    <span
                      key={service}
                      className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                {/* View Details Link */}
                <Link
                  to="/projects"
                  className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-800 font-medium group-hover:translate-x-2 transition-all duration-300"
                >
                  <span>View Details</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <Link
            to="/projects"
            className="inline-flex items-center space-x-3 bg-primary-900 hover:bg-primary-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors group"
          >
            <span>View All Projects</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;