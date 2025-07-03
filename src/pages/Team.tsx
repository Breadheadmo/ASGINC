import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Linkedin, Mail, Award, GraduationCap } from 'lucide-react';

const Team = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [leadershipRef, leadershipInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [operationsRef, operationsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [technicalRef, technicalInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const leadership = [
    {
      name: 'Sipho Mthembu',
      title: 'Founder & CEO',
      role: 'Strategic Leadership & Business Development',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=400',
      qualifications: 'B.Eng (Civil), MBA, Professional Engineer',
      experience: '15+ years',
      specialization: 'Infrastructure Development, Strategic Planning',
      quote: 'Building Africa\'s future through engineering excellence and innovation.',
      linkedin: '#',
      email: 'sipho@asginc.co.za',
      achievements: [
        'Founded ASGINC Africa in 2018',
        'Led R2.5 billion in infrastructure projects',
        'SAICE Engineering Excellence Award 2023'
      ]
    },
    {
      name: 'Dr. Thandiwe Mokoena',
      title: 'Chief Technical Officer',
      role: 'Engineering Excellence & Innovation',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400',
      qualifications: 'PhD (Electrical Engineering), Professional Engineer',
      experience: '12+ years',
      specialization: 'Power Systems, Renewable Energy, Smart Infrastructure',
      quote: 'Innovation is at the heart of sustainable infrastructure development.',
      linkedin: '#',
      email: 'thandiwe@asginc.co.za',
      achievements: [
        'PhD in Electrical Engineering from UCT',
        '20+ technical publications',
        'IEEE Power & Energy Society Award'
      ]
    }
  ];

  const operations = [
    {
      name: 'Michael van der Merwe',
      title: 'Head of Operations',
      role: 'Project Management & Quality Assurance',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400',
      qualifications: 'B.Eng (Industrial), PMP, Six Sigma Black Belt',
      experience: '10+ years',
      specialization: 'Project Management, Quality Systems, Process Optimization',
      linkedin: '#',
      email: 'michael@asginc.co.za'
    },
    {
      name: 'Nomsa Dlamini',
      title: 'Head of Safety & Compliance',
      role: 'Safety Standards & Regulatory Compliance',
      image: 'https://images.pexels.com/photos/3760316/pexels-photo-3760316.jpeg?auto=compress&cs=tinysrgb&w=400',
      qualifications: 'B.Tech (Safety Management), SAMTRAC, Professional Safety Manager',
      experience: '8+ years',
      specialization: 'Occupational Health & Safety, Risk Management, Compliance',
      linkedin: '#',
      email: 'nomsa@asginc.co.za'
    },
    {
      name: 'Robert Johnson',
      title: 'Head of Business Development',
      role: 'Client Relations & Market Expansion',
      image: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=400',
      qualifications: 'BCom (Business Management), MBA',
      experience: '12+ years',
      specialization: 'Business Strategy, Client Management, Market Analysis',
      linkedin: '#',
      email: 'robert@asginc.co.za'
    }
  ];

  const technical = [
    {
      name: 'Sarah Ndaba',
      title: 'Senior Civil Engineer',
      role: 'Infrastructure Design & Construction',
      image: 'https://images.pexels.com/photos/3760809/pexels-photo-3760809.jpeg?auto=compress&cs=tinysrgb&w=400',
      qualifications: 'B.Eng (Civil), Professional Engineer',
      experience: '8+ years',
      specialization: 'Structural Design, Water Infrastructure, Roads & Bridges',
      linkedin: '#',
      email: 'sarah@asginc.co.za'
    },
    {
      name: 'Ahmed Hassan',
      title: 'Senior Electrical Engineer',
      role: 'Power Systems & Automation',
      image: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=400',
      qualifications: 'B.Eng (Electrical), Professional Engineer',
      experience: '7+ years',
      specialization: 'Power Distribution, Industrial Automation, Renewable Energy',
      linkedin: '#',
      email: 'ahmed@asginc.co.za'
    },
    {
      name: 'Linda Makola',
      title: 'Senior Mechanical Engineer',
      role: 'HVAC & Mechanical Systems',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400',
      qualifications: 'B.Eng (Mechanical), Professional Engineer',
      experience: '9+ years',
      specialization: 'HVAC Design, Industrial Machinery, Energy Efficiency',
      linkedin: '#',
      email: 'linda@asginc.co.za'
    },
    {
      name: 'David Moropane',
      title: 'Senior Project Manager',
      role: 'Construction Project Management',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400',
      qualifications: 'B.Const (Project Management), PMP',
      experience: '11+ years',
      specialization: 'Construction Management, Contract Administration, Cost Control',
      linkedin: '#',
      email: 'david@asginc.co.za'
    }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-900 to-primary-800 text-white relative overflow-hidden" ref={heroRef}>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Our
              <span className="text-accent-400"> Team</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Meet the passionate professionals who bring decades of expertise, innovation, 
              and dedication to every project we undertake.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white" ref={leadershipRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={leadershipInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Leadership <span className="text-accent-500">Team</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Visionary leaders driving innovation and excellence in African infrastructure development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {leadership.map((member, index) => (
              <LeadershipCard key={member.name} member={member} index={index} inView={leadershipInView} />
            ))}
          </div>
        </div>
      </section>

      {/* Operations Team */}
      <section className="py-20 bg-neutral-50" ref={operationsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={operationsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Operations <span className="text-accent-500">Team</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Experienced professionals ensuring project success through operational excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {operations.map((member, index) => (
              <TeamCard key={member.name} member={member} index={index} inView={operationsInView} />
            ))}
          </div>
        </div>
      </section>

      {/* Technical Team */}
      <section className="py-20 bg-white" ref={technicalRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={technicalInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Technical <span className="text-accent-500">Experts</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Skilled engineers and specialists delivering innovative solutions across all disciplines.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technical.map((member, index) => (
              <TeamCard key={member.name} member={member} index={index} inView={technicalInView} />
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our Team
          </h2>
          <p className="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto">
            We're always looking for talented professionals who share our passion for 
            engineering excellence and infrastructure development.
          </p>
          <a
            href="mailto:careers@asginc.co.za"
            className="inline-flex items-center space-x-3 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors group"
          >
            <Mail className="h-5 w-5" />
            <span>View Career Opportunities</span>
          </a>
        </div>
      </section>
    </div>
  );
};

const LeadershipCard = ({ member, index, inView }: { member: any; index: number; inView: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-white rounded-2xl shadow-xl overflow-hidden border border-neutral-200"
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Photo */}
        <div className="relative">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-80 md:h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">{member.name}</h3>
            <p className="text-accent-600 font-semibold text-lg mb-1">{member.title}</p>
            <p className="text-neutral-600">{member.role}</p>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex items-start space-x-3">
              <GraduationCap className="h-5 w-5 text-accent-500 mt-1 flex-shrink-0" />
              <span className="text-sm text-neutral-600">{member.qualifications}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Award className="h-5 w-5 text-accent-500 flex-shrink-0" />
              <span className="text-sm text-neutral-600">{member.experience} experience</span>
            </div>
          </div>

          <blockquote className="text-neutral-700 italic mb-6 border-l-4 border-accent-500 pl-4">
            "{member.quote}"
          </blockquote>

          {member.achievements && (
            <div className="mb-6">
              <h4 className="font-semibold text-neutral-900 mb-2">Key Achievements</h4>
              <ul className="space-y-1">
                {member.achievements.map((achievement: string, idx: number) => (
                  <li key={idx} className="text-sm text-neutral-600 flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 flex-shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex space-x-3">
            <a
              href={member.linkedin}
              className="p-2 bg-primary-100 hover:bg-primary-200 text-primary-600 rounded-lg transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${member.email}`}
              className="p-2 bg-accent-100 hover:bg-accent-200 text-accent-600 rounded-lg transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TeamCard = ({ member, index, inView }: { member: any; index: number; inView: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-neutral-200 group"
    >
      {/* Photo */}
      <div className="relative overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex space-x-2">
            <a
              href={member.linkedin}
              className="p-2 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${member.email}`}
              className="p-2 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-colors"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-neutral-900 mb-1">{member.name}</h3>
        <p className="text-accent-600 font-medium mb-2">{member.title}</p>
        <p className="text-neutral-600 text-sm mb-4">{member.role}</p>

        <div className="space-y-2 text-sm">
          <div className="flex items-start space-x-2">
            <GraduationCap className="h-4 w-4 text-accent-500 mt-0.5 flex-shrink-0" />
            <span className="text-neutral-600">{member.qualifications}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Award className="h-4 w-4 text-accent-500 flex-shrink-0" />
            <span className="text-neutral-600">{member.experience}</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-neutral-200">
          <p className="text-xs text-neutral-500 mb-1">Specialization</p>
          <p className="text-sm text-neutral-700">{member.specialization}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Team;