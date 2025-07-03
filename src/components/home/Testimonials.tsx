import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'City of Johannesburg',
      service: 'Civil Engineering',
      image: 'https://images.pexels.com/photos/3760809/pexels-photo-3760809.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: "ASGINC Africa delivered our water infrastructure project ahead of schedule and within budget. Their technical expertise and commitment to quality is unmatched in the industry.",
      rating: 5,
    },
    {
      id: 2,
      name: 'David Mbeki',
      company: 'Industrial Holdings Ltd',
      service: 'Electrical Engineering',
      image: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: "The electrical systems ASGINC installed for our manufacturing facility have been flawless. Their attention to safety standards and regulatory compliance is exceptional.",
      rating: 5,
    },
    {
      id: 3,
      name: 'Maria Santos',
      company: 'Cape Property Developers',
      service: 'Construction & Renovation',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: "Working with ASGINC on our residential complex was seamless. They brought innovative solutions to complex challenges and maintained the highest quality standards throughout.",
      rating: 5,
    },
    {
      id: 4,
      name: 'James Mitchell',
      company: 'Mitchell Corporate Services',
      service: 'Corporate Cleaning',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: "ASGINC's corporate cleaning services have transformed our office environment. Professional, reliable, and always exceeding our expectations. Highly recommended.",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const clientLogos = [
    { name: 'City of Johannesburg', logo: 'https://via.placeholder.com/120x60/e5e7eb/6b7280?text=COJ' },
    { name: 'Industrial Holdings', logo: 'https://via.placeholder.com/120x60/e5e7eb/6b7280?text=IHL' },
    { name: 'Cape Developers', logo: 'https://via.placeholder.com/120x60/e5e7eb/6b7280?text=CPD' },
    { name: 'Mining Corp', logo: 'https://via.placeholder.com/120x60/e5e7eb/6b7280?text=MC' },
    { name: 'Tech Solutions', logo: 'https://via.placeholder.com/120x60/e5e7eb/6b7280?text=TS' },
    { name: 'Energy Partners', logo: 'https://via.placeholder.com/120x60/e5e7eb/6b7280?text=EP' },
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
            Client
            <span className="text-accent-500"> Testimonials</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear what our clients have to say about 
            their experience working with ASGINC Africa.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative mb-16">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-8 left-8">
              <Quote className="h-12 w-12 text-accent-200" />
            </div>

            <div className="relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center"
                >
                  {/* Testimonial Content */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-accent-500 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-xl md:text-2xl text-neutral-700 leading-relaxed mb-6 font-serif italic">
                      "{testimonials[currentIndex].quote}"
                    </blockquote>
                    <div className="border-l-4 border-accent-500 pl-4">
                      <p className="font-semibold text-lg text-neutral-900">
                        {testimonials[currentIndex].name}
                      </p>
                      <p className="text-accent-600 font-medium">
                        {testimonials[currentIndex].company}
                      </p>
                      <p className="text-sm text-neutral-500">
                        Service: {testimonials[currentIndex].service}
                      </p>
                    </div>
                  </div>

                  {/* Client Photo */}
                  <div className="flex justify-center lg:justify-end">
                    <div className="relative">
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-32 h-32 rounded-full object-cover ring-4 ring-accent-100"
                      />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center">
                        <Quote className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-8">
              <button
                onClick={prevTestimonial}
                className="p-3 bg-white shadow-lg rounded-full hover:bg-neutral-50 transition-colors"
              >
                <ChevronLeft className="h-6 w-6 text-neutral-600" />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-8">
              <button
                onClick={nextTestimonial}
                className="p-3 bg-white shadow-lg rounded-full hover:bg-neutral-50 transition-colors"
              >
                <ChevronRight className="h-6 w-6 text-neutral-600" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-accent-500' : 'bg-neutral-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-lg font-semibold text-neutral-600 mb-8">
            Trusted by Leading Organizations
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
            {clientLogos.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="flex justify-center"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-12 grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;