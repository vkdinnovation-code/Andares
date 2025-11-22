
import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { TrustStats } from '../components/TrustStats';
import { Solutions } from '../components/Solutions';
import { Industries } from '../components/Industries';
import { WhyUs } from '../components/WhyUs';
import { Comparison } from '../components/Comparison';
import { Process } from '../components/Process';
import { References } from '../components/References';
import { LocalExpertise } from '../components/LocalExpertise';
import { ContactForm } from '../components/ContactForm';
import { Footer } from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden selection:bg-primary-200 selection:text-primary-900">
      <Navbar />
      <main>
        <Hero />
        <TrustStats />
        <Solutions />
        <Industries />
        <WhyUs />
        <Comparison />
        <References />
        <LocalExpertise />
        <Process />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Home;