import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Award, 
  Shield, 
  Users, 
  Target, 
  Calendar, 
  CheckCircle, 
  MapPin,
  Building,
  Zap,
  HardHat,
  Sparkles,
  Eye,
  Heart,
  Star
} from 'lucide-react';

const About = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [whoWeAreRef, whoWeAreInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [missionVisionRef, missionVisionInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [complianceRef, complianceInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const timeline = [
    {
      year: '2018',
      title: 'Company Founded',
      description: 'ASGINC Africa (PTY) LTD established as a 100% black-owned company with headquarters in Johannesburg.',
    },
    {
      year: '2019',
      title: 'Provincial Expansion',
      description: 'Expanded operations to North West, Free State, Mpumalanga, and KwaZulu-Natal provinces.',
    },
    {
      year: '2021',
      title: 'BEE Level 1 Achievement',
      description: 'Achieved BEE Level 1 Contributor status and expanded into municipal projects.',
    },
    {
      year: '2024',
      title: 'Industry Leadership',
      description: 'Established as a leading force in South Africa\'s infrastructure transformation.',
    },
  ];

  const coreValues = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Ethical and honest business practices built on trust and transparency in all our operations.',
      color: 'bg-blue-500',
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Adapting modern technologies and creative ideas to tackle complex engineering challenges.',
      color: 'bg-green-500',
    },
    {
      icon: Award,
      title: 'Safety',
      description: 'Prioritizing health and safety on all job sites with zero-compromise approach to workplace safety.',
      color: 'bg-red-500',
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'Striving for top-quality results and maintaining the highest standards in all our deliverables.',
      color: 'bg-purple-500',
    },
    {
      icon: Users,
      title: 'Empowerment',
      description: 'Investing in community development and black empowerment through skills transfer and job creation.',
      color: 'bg-orange-500',
    },
  ];

  const services = [
    {
      icon: HardHat,
      title: 'Construction & Building Renovation',
      description: 'Comprehensive construction solutions for all sectors'
    },
    {
      icon: Zap,
      title: 'Electrical Engineering',
      description: 'Power systems and electrical infrastructure'
    },
    {
      icon: Building,
      title: 'Mechanical & Structural Engineering',
      description: 'HVAC systems and structural solutions'
    },
    {
      icon: Target,
      title: 'Civil Engineering',
      description: 'Infrastructure and civil works projects'
    },
    {
      icon: Sparkles,
      title: 'Corporate Cleaning Services',
      description: 'Outsourced cleaning for commercial facilities'
    }
  ];

  const branches = [
    'Johannesburg (Headquarters)',
    'North West',
    'Free State', 
    'Mpumalanga',
    'KwaZulu-Natal'
  ];

  const industries = [
    'Infrastructure Development',
    'Commercial Facilities',
    'Municipal Projects',
    'Residential Projects'
  ];

  const certifications = [
    'CIDB (Construction Industry Development Board)',
    'NHBRC (National Home Builders Registration Council)',
    'BEE Level 1 Contributor',
    'Health & Safety Act Compliance',
    'ISO Quality Management Systems',
    'Professional Engineering Council Registration'
  ];

  const whyChooseUs = [
    'Experienced, qualified technical teams',
    'Nationwide project delivery capacity',
    'Diverse industry experience',
    'Hands-on executive management',
    'Commitment to transformation and empowerment',
    '100% black-owned company'
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-900 to-primary-800 text-white relative overflow-hidden" ref={heroRef}>
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              About
              <span className="text-accent-400"> ASGINC</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              A 100% black-owned company transforming Africa's infrastructure through 
              engineering excellence, innovation, and unwavering commitment to empowerment since 2018.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white" ref={whoWeAreRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={whoWeAreInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Who <span className="text-accent-500">We Are</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-4xl mx-auto">
              ASGINC Africa (PTY) LTD is a 100% black-owned company founded in 2018, 
              operating across South Africa with a commitment to excellence and empowerment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={whoWeAreInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold text-primary-900 mb-6">Our Presence</h3>
              <p className="text-lg text-neutral-600 mb-6">
                With headquarters in Johannesburg, we operate across multiple provinces, 
                delivering comprehensive engineering and construction solutions.
              </p>
              
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-neutral-900">Our Branches:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {branches.map((branch, index) => (
                    <motion.div
                      key={branch}
                      initial={{ opacity: 0, y: 20 }}
                      animate={whoWeAreInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <MapPin className="h-5 w-5 text-accent-500" />
                      <span className="text-neutral-700">{branch}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={whoWeAreInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="/Vusi Zwane.jpg"
                alt="Vusi Zwane - ASGINC Africa Founder"
                className="w-full rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent-500 text-white p-6 rounded-xl shadow-lg">
                <p className="text-sm font-semibold">100% Black-Owned</p>
                <p className="text-xs opacity-90">Since 2018</p>
              </div>
            </motion.div>
          </div>

          {/* Services Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={whoWeAreInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-primary-900 mb-8 text-center">Our Specializations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={whoWeAreInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="p-3 bg-accent-100 rounded-lg">
                      <service.icon className="h-6 w-6 text-accent-600" />
                    </div>
                    <h4 className="font-semibold text-neutral-900">{service.title}</h4>
                  </div>
                  <p className="text-neutral-600 text-sm">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Industries Served */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={whoWeAreInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <h3 className="text-3xl font-bold text-primary-900 mb-8">Industries We Serve</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={whoWeAreInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="bg-primary-50 p-6 rounded-xl border border-primary-200"
                >
                  <p className="font-semibold text-primary-900">{industry}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-neutral-50" ref={missionVisionRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={missionVisionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-12">
                <div className="border-l-4 border-accent-500 pl-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Target className="h-8 w-8 text-accent-500" />
                    <h3 className="text-3xl font-semibold text-primary-900">Our Mission</h3>
                  </div>
                  <p className="text-lg text-neutral-600 leading-relaxed">
                    "Our mission is to deliver quality and cost-effective services in engineering and 
                    construction by fostering innovation, maintaining high safety standards, and 
                    empowering communities through job creation."
                  </p>
                </div>

                <div className="border-l-4 border-primary-500 pl-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Eye className="h-8 w-8 text-primary-500" />
                    <h3 className="text-3xl font-semibold text-primary-900">Our Vision</h3>
                  </div>
                  <p className="text-lg text-neutral-600 leading-relaxed">
                    "To be a leading force in Africa's infrastructure transformation by providing 
                    integrated solutions in construction and engineering services."
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={missionVisionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="ASGINC Vision"
                className="w-full rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary-500 text-white p-6 rounded-xl shadow-lg">
                <p className="text-sm font-semibold">Leading Africa's</p>
                <p className="text-sm font-semibold">Transformation</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company History Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={missionVisionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Our <span className="text-accent-500">Journey</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              From our founding in 2018 to becoming a leading force in African infrastructure, 
              our growth story reflects our commitment to excellence and empowerment.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-accent-200 hidden lg:block" />

            <div className="space-y-16">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 50 }}
                  animate={missionVisionInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className="flex-1 lg:pr-8 lg:pl-8">
                    <div className={`text-${index % 2 === 0 ? 'left' : 'right'} lg:text-${index % 2 === 0 ? 'right' : 'left'}`}>
                      <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-200">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="bg-accent-500 text-white px-4 py-2 rounded-full font-bold">
                            {item.year}
                          </div>
                          <Calendar className="h-5 w-5 text-accent-500" />
                        </div>
                        <h3 className="text-2xl font-semibold text-primary-900 mb-3">{item.title}</h3>
                        <p className="text-neutral-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden lg:block relative">
                    <div className="w-6 h-6 bg-accent-500 rounded-full border-4 border-white shadow-lg" />
                  </div>

                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-neutral-50" ref={valuesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Our Core <span className="text-accent-500">Values</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              These fundamental principles guide everything we do and define who we are as a company.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-neutral-200"
              >
                <div className="relative mb-6">
                  <div className={`inline-flex p-6 ${value.color} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="h-12 w-12 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-neutral-900 mb-4">{value.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Certifications */}
      <section className="py-20 bg-white" ref={complianceRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={complianceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Compliance & <span className="text-accent-500">Certifications</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our commitment to quality and compliance is validated by leading industry certifications and registrations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={complianceInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-4 bg-neutral-50 p-6 rounded-xl border border-neutral-200 hover:shadow-lg transition-shadow"
              >
                <CheckCircle className="h-6 w-6 text-accent-500 flex-shrink-0" />
                <span className="text-neutral-700 font-medium">{cert}</span>
              </motion.div>
            ))}
          </div>

          {/* Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={complianceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-primary-900 text-white rounded-3xl p-12 text-center"
          >
            <h3 className="text-4xl font-bold mb-8">
              Why Choose <span className="text-accent-400">ASGINC Africa?</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((reason, index) => (
                <motion.div
                  key={reason}
                  initial={{ opacity: 0, y: 20 }}
                  animate={complianceInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl"
                >
                  <CheckCircle className="h-5 w-5 text-accent-400 flex-shrink-0" />
                  <span className="text-white">{reason}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;