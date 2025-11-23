import React, { useState } from 'react';
import { IndustryTab } from '../types';
import { Factory, Truck, Users, PieChart, CheckCircle2, ArrowRight, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Industries: React.FC = () => {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState('manufacturing');

  // Helper to safely get array from translation
  const getArray = (key: string) => {
    const res = t(key, { returnObjects: true });
    return Array.isArray(res) ? res : [];
  };

  const industries: IndustryTab[] = [
    {
      id: 'manufacturing',
      label: t('industries.items.manufacturing.label'),
      title: t('industries.items.manufacturing.title'),
      description: t('industries.items.manufacturing.description'),
      benefits: getArray('industries.items.manufacturing.benefits') as string[],
      quote: {
        text: t('industries.items.manufacturing.quote.text'),
        author: t('industries.items.manufacturing.quote.author')
      }
    },
    {
      id: 'wholesale',
      label: t('industries.items.wholesale.label'),
      title: t('industries.items.wholesale.title'),
      description: t('industries.items.wholesale.description'),
      benefits: getArray('industries.items.wholesale.benefits') as string[],
      quote: {
        text: t('industries.items.wholesale.quote.text'),
        author: t('industries.items.wholesale.quote.author')
      }
    },
    {
      id: 'service',
      label: t('industries.items.service.label'),
      title: t('industries.items.service.title'),
      description: t('industries.items.service.description'),
      benefits: getArray('industries.items.service.benefits') as string[],
      quote: {
        text: t('industries.items.service.quote.text'),
        author: t('industries.items.service.quote.author')
      }
    },
    {
      id: 'finance',
      label: t('industries.items.finance.label'),
      title: t('industries.items.finance.title'),
      description: t('industries.items.finance.description'),
      benefits: getArray('industries.items.finance.benefits') as string[],
      quote: {
        text: t('industries.items.finance.quote.text'),
        author: t('industries.items.finance.quote.author')
      }
    }
  ];

  const activeTab = industries.find(i => i.id === activeId) || industries[0];

  const getIcon = (id: string) => {
    switch (id) {
      case 'manufacturing': return <Factory size={20} />;
      case 'wholesale': return <Truck size={20} />;
      case 'service': return <Users size={20} />;
      case 'finance': return <PieChart size={20} />;
      default: return <Factory size={20} />;
    }
  };

  return (
    <section id="industries" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16">
           <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900">
             {t('industries.header')}
           </h2>
           <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
             {t('industries.subtext')}
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Left: Tabs Navigation */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {industries.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveId(tab.id)}
                className={`group text-left px-6 py-4 rounded-xl transition-all duration-200 flex items-center gap-4 border ${
                  activeTab.id === tab.id
                    ? 'bg-white border-primary-500 shadow-lg shadow-primary-900/5 ring-1 ring-primary-500'
                    : 'bg-transparent border-transparent hover:bg-white hover:border-slate-200 text-slate-600'
                }`}
              >
                <div className={`p-2.5 rounded-lg transition-colors ${
                  activeTab.id === tab.id 
                    ? 'bg-primary-500 text-white shadow-md shadow-primary-500/20' 
                    : 'bg-slate-100 text-slate-400 group-hover:bg-white group-hover:text-primary-500'
                }`}>
                  {getIcon(tab.id)}
                </div>
                <span className={`font-bold text-lg ${activeTab.id === tab.id ? 'text-slate-900' : 'text-slate-500'}`}>
                  {tab.label}
                </span>
              </button>
            ))}
          </div>

          {/* Right: Content Card */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-xl shadow-slate-200/40 h-full flex flex-col relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-50 to-transparent rounded-bl-full opacity-50 pointer-events-none"></div>

                <div className="relative z-10">
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-4">
                        {activeTab.title}
                    </h3>
                    <p className="text-slate-600 text-lg leading-relaxed mb-8">
                        {activeTab.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        {activeTab.benefits.map((benefit, i) => (
                            <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50/50 border border-slate-100/50">
                                <div className="mt-0.5 min-w-[20px] text-primary-500">
                                    <CheckCircle2 size={20} strokeWidth={2.5} />
                                </div>
                                <span className="text-slate-700 font-medium text-sm">{benefit}</span>
                            </div>
                        ))}
                    </div>

                    {activeTab.quote && (
                        <div className="bg-slate-50 rounded-xl p-5 border-l-4 border-primary-300 mb-8 italic text-slate-600">
                            <div className="flex gap-2 mb-2 text-primary-200">
                                <Quote size={20} />
                            </div>
                            <p className="mb-2">"{activeTab.quote.text}"</p>
                            <p className="text-xs font-bold text-slate-900 uppercase not-italic">— {activeTab.quote.author}</p>
                        </div>
                    )}

                    <div className="mt-auto">
                       <a href="#contact" className="inline-flex items-center gap-2 bg-slate-900 hover:bg-primary-600 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-primary-600/30 transform hover:-translate-y-0.5">
                         {t('solutions.learnMore')}
                         <ArrowRight size={18} />
                       </a>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};