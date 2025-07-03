import React from 'react';
import Hero from '../components/home/Hero';
import CompanyOverview from '../components/home/CompanyOverview';
import CoreServices from '../components/home/CoreServices';
import FeaturedProjects from '../components/home/FeaturedProjects';
import FounderMessage from '../components/home/FounderMessage';
import TeamPreview from '../components/home/TeamPreview';
import Testimonials from '../components/home/Testimonials';
import CTABanner from '../components/home/CTABanner';

const Home = () => {
  return (
    <div className="pt-16 lg:pt-20">
      <Hero />
      <CompanyOverview />
      <CoreServices />
      <FeaturedProjects />
      <FounderMessage />
      <TeamPreview />
      <Testimonials />
      <CTABanner />
    </div>
  );
};

export default Home;