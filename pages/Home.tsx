import React from 'react';
import { Hero } from '../components/Hero';
import { Solutions } from '../components/Solutions';
import { Industries } from '../components/Industries';
import { WhyUs } from '../components/WhyUs';
import { Comparison } from '../components/Comparison';
import { Process } from '../components/Process';
import { References } from '../components/References';
import { LocalExpertise } from '../components/LocalExpertise';
import { ContactForm } from '../components/ContactForm';

const Home: React.FC = () => {
  return (
    <>
      {/* 1. Main Screen */}
      <Hero />
      
      {/* 2. Social Proof */}
      <References />

      {/* 3. Solutions (Epicor / iScala) */}
      <Solutions />
      
      {/* 4. Industries (Tabs) */}
      <Industries />
      
      {/* 5. Global Scale (Redesigned) */}
      <WhyUs />
      
      {/* 6. Why Us (Comparison) */}
      <Comparison />
      
      {/* 7. Local Expertise */}
      <LocalExpertise />
      
      {/* 8. Process */}
      <Process />
      
      {/* 9. Contact */}
      <ContactForm />
    </>
  );
};

export default Home;