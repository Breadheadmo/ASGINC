import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Users, Target, Filter, ExternalLink } from 'lucide-react';

const Projects = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Construction', 'Electrical', 'Civil', 'Mechanical', 'Cleaning'];

  const projects = [
    {
      id: 1,
      title: 'Sandton Corporate Complex',
      category: 'Construction',
      location: 'Sandton, Johannesburg',
      year: '2024',
      duration: '18 months',
      client: 'Corporate Holdings Ltd',
      value: 'R 450 million',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Modern 15-story office complex featuring sustainable design, state-of-the-art facilities, and LEED certification. The project includes retail spaces, parking facilities, and advanced building management systems.',
      services: ['Construction', 'Electrical', 'Mechanical'],
      achievements: [
        'Completed 2 months ahead of schedule',
        'LEED Gold certification achieved',
        'Zero workplace incidents recorded',
        '15% under budget delivery'
      ],
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Renewable Energy Plant',
      category: 'Electrical',
      location: 'Durban, KwaZulu-Natal',
      year: '2023',
      duration: '12 months',
      client: 'Green Energy Solutions',
      value: 'R 320 million',
      image: 'https://images.pexels.com/photos/9875420/pexels-photo-9875420.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete electrical infrastructure for a 50MW solar power facility including grid connection, control systems, and maintenance protocols. Features advanced monitoring and automated systems.',
      services: ['Electrical', 'Civil'],
      achievements: [
        '50MW clean energy generation',
        'Advanced monitoring systems',
        'Grid-tie integration completed',
        'Training provided to local staff'
      ],
      status: 'Completed'
    },
    {
      id: 3,
      title: 'Municipal Water Treatment',
      category: 'Civil',
      location: 'Cape Town, Western Cape',
      year: '2023',
      duration: '24 months',
      client: 'City of Cape Town',
      value: 'R 180 million',
      image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Advanced water treatment plant serving 500,000 residents with cutting-edge filtration technology, automated monitoring systems, and environmental compliance protocols.',
      services: ['Civil', 'Mechanical', 'Electrical'],
      achievements: [
        '500,000 residents served',
        'Advanced filtration technology',
        'Environmental compliance achieved',
        '99.9% uptime reliability'
      ],
      status: 'Completed'
    },
    {
      id: 4,
      title: 'Industrial Manufacturing Hub',
      category: 'Construction',
      location: 'Port Elizabeth, Eastern Cape',
      year: '2024',
      duration: '15 months',
      client: 'Manufacturing Corp',
      value: 'R 280 million',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Large-scale industrial facility with specialized manufacturing areas, quality control laboratories, and logistics infrastructure. Includes automated systems and safety protocols.',
      services: ['Construction', 'Mechanical', 'Electrical'],
      achievements: [
        '50,000 sqm facility completed',
        'Automated systems integration',
        'Safety excellence award',
        'Local job creation: 200 positions'
      ],
      status: 'In Progress'
    },
    {
      id: 5,
      title: 'Hospital HVAC Upgrade',
      category: 'Mechanical',
      location: 'Pretoria, Gauteng',
      year: '2023',
      duration: '8 months',
      client: 'Provincial Health Department',
      value: 'R 45 million',
      image: 'https://images.pexels.com/photos/162568/gears-cogs-machine-machinery-162568.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete HVAC system upgrade for a 300-bed hospital including ICU environmental controls, operating theater systems, and energy-efficient solutions.',
      services: ['Mechanical', 'Electrical'],
      achievements: [
        'Zero downtime during installation',
        '40% energy efficiency improvement',
        'Critical care standards met',
        'Preventive maintenance program'
      ],
      status: 'Completed'
    },
    {
      id: 6,
      title: 'Corporate Campus Maintenance',
      category: 'Cleaning',
      location: 'Sandton, Johannesburg',
      year: '2024',
      duration: 'Ongoing',
      client: 'Financial Services Group',
      value: 'R 12 million/year',
      image: 'https://images.pexels.com/photos/4107120/pexels-photo-4107120.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Comprehensive facility management and cleaning services for a 40-story financial services headquarters including specialized equipment maintenance and 24/7 support.',
      services: ['Cleaning', 'Facilities Support'],
      achievements: [
        '40-story building maintenance',
        '24/7 service availability',
        '99% client satisfaction rating',
        'Green cleaning protocols'
      ],
      status: 'Ongoing'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
              <span className="text-accent-400"> Projects</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Showcasing our commitment to excellence through transformative infrastructure 
              projects that shape communities and drive economic growth across Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-neutral-200" ref={projectsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-between"
          >
            <div className="flex items-center space-x-2 mb-4 sm:mb-0">
              <Filter className="h-5 w-5 text-neutral-600" />
              <span className="text-lg font-semibold text-neutral-900">Filter by Category:</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeFilter === category
                      ? 'bg-accent-500 text-white'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} inView={projectsInView} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const ProjectCard = ({ project, index, inView }: { project: any; index: number; inView: boolean }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800';
      case 'Ongoing':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden border border-neutral-200 hover:shadow-xl transition-shadow duration-300"
    >
      {/* Project Image */}
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            {project.category}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
            {project.status}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>{project.location}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{project.year}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Project Details */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4 text-accent-500" />
            <div>
              <p className="text-xs text-neutral-500">Client</p>
              <p className="text-sm font-medium text-neutral-900">{project.client}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Target className="h-4 w-4 text-accent-500" />
            <div>
              <p className="text-xs text-neutral-500">Value</p>
              <p className="text-sm font-medium text-neutral-900">{project.value}</p>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-neutral-600 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Services Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.services.map((service: string) => (
            <span
              key={service}
              className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-xs font-medium"
            >
              {service}
            </span>
          ))}
        </div>

        {/* Expandable Achievements */}
        <div className="border-t border-neutral-200 pt-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center justify-between w-full text-left"
          >
            <span className="font-semibold text-neutral-900">Key Achievements</span>
            <ExternalLink className={`h-4 w-4 text-accent-500 transition-transform ${isExpanded ? 'rotate-45' : ''}`} />
          </button>
          
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="mt-4 space-y-2"
            >
              {project.achievements.map((achievement: string, idx: number) => (
                <div key={idx} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm text-neutral-600">{achievement}</span>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;