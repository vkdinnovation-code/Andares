import React, { useState } from 'react';
import { Factory, Truck, Users, PieChart, ArrowRight, CheckCircle2, Quote } from 'lucide-react';
import { Link } from 'react-router-dom'; // Важно: импорт для переходов

interface Feature {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  benefits: string[];
  quote: string;
  author: string;
  link: string; // Добавили поле для ссылки
}

const features: Feature[] = [
  {
    id: 'tootmine',
    icon: Factory,
    title: 'Tootmine (MES)',
    description: 'Ressursside planeerimine ja andmete sünkroniseerimine reaalajas.',
    benefits: ['MRP Planeerimine', 'Partiide jälgitavus', 'Kvaliteedikontroll', 'Omahinna arvestus'],
    quote: "Tootmistsükkel vähenes 20% tänu täpsele planeerimisele.",
    author: "CTO, Metallitööstus",
    link: '/epicor' // Ссылка на Epicor
  },
  {
    id: 'logistika',
    icon: Truck,
    title: 'WMS & Logistika',
    description: 'Täpsed laoseisud ja optimeeritud tarned.',
    benefits: ['WMS vöötkoodidega', 'Nõudluse prognoos', 'Tarneahela juhtimine', 'Otsetarned'],
    quote: "Reaalajas kasumlikkus ja laovarude vähenemine.",
    author: "Logistikadirektor",
    link: '/iscala' // Ссылка на iScala
  },
  {
    id: 'teenindus',
    icon: Users,
    title: 'Teenindus & Horeca',
    description: 'Kliendisuhete ja lepingute haldus ühes süsteemis.',
    benefits: ['Lepingute haldus', 'Hooldustööd', 'Mobiilne ligipääs', 'Kliendiportaal'],
    quote: "Kliendirahulolu kasvas märgatavalt.",
    author: "Teenindusjuht",
    link: '/iscala' // Ссылка на iScala
  },
  {
    id: 'finantsid',
    icon: PieChart,
    title: 'Finantsjuhtimine',
    description: 'Konsolideeritud aruandlus ja mitme valuuta tugi.',
    benefits: ['Eelarvestamine', 'Rahavood', 'Pangaliidesed', 'E-arved'],
    quote: "Finantside sulgemine võtab nüüd vaid 2 päeva.",
    author: "Finantsjuht",
    link: '/iscala' // Ссылка на iScala
  }
];

export function Industries() {
  const [activeTab, setActiveTab] = useState('tootmine');
  const activeFeature = features.find(f => f.id === activeTab) || features[0];

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="industries">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
            Lahendused teie äri eripäradele
          </h2>
          <p className="text-lg text-slate-600">
            Vali oma valdkond ja vaata, kuidas me saame aidata.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Navigation */}
          <div className="lg:col-span-4 space-y-2">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveTab(feature.id)}
                className={`w-full flex items-center p-4 rounded-xl transition-all duration-300 border text-left group ${
                  activeTab === feature.id
                    ? 'bg-white border-primary-500 shadow-lg shadow-primary-500/10 ring-1 ring-primary-500'
                    : 'bg-slate-50 border-transparent hover:bg-white hover:border-slate-200'
                }`}
              >
                <div className={`p-2 rounded-lg mr-4 transition-colors ${
                  activeTab === feature.id ? 'bg-primary-50 text-primary-600' : 'bg-white text-slate-400 group-hover:text-primary-500'
                }`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <span className={`font-semibold ${
                  activeTab === feature.id ? 'text-slate-900' : 'text-slate-500'
                }`}>
                  {feature.title.split(' (')[0]}
                </span>
              </button>
            ))}
          </div>

          {/* Right Content Area */}
          <div className="lg:col-span-8">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="relative z-10">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{activeFeature.title}</h3>
                  <p className="text-lg text-slate-600">{activeFeature.description}</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {activeFeature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                      <CheckCircle2 className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                      <span className="text-slate-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-white/50 border border-slate-100 rounded-xl p-6 mb-8 backdrop-blur-sm">
                  <Quote className="w-8 h-8 text-primary-200 mb-2" />
                  <p className="text-slate-700 italic mb-2">"{activeFeature.quote}"</p>
                  <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">— {activeFeature.author}</p>
                </div>

                {/* ВОТ ЗДЕСЬ ИСПРАВЛЕННАЯ КНОПКА */}
                <Link 
                  to={activeFeature.link} 
                  className="inline-flex items-center justify-center px-6 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors group"
                >
                  Loe lähemalt
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}