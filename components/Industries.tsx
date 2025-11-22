
import React, { useState } from 'react';
import { IndustryTab } from '../types';
import { Factory, Truck, Users, CheckCircle2, ArrowRight, PieChart, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Industries: React.FC = () => {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState('manufacturing');

  const industries: IndustryTab[] = [
    {
      id: 'manufacturing',
      label: t('industries.items.manufacturing.label'),
      title: t('industries.items.manufacturing.title'),
      description: t('industries.items.manufacturing.description'),
      benefits: t('industries.items.manufacturing.benefits', { returnObjects: true }) as string[],
      quote: {
        text: t('industries.items.manufacturing.quote'),
        author: "Tootmisjuht, 15a staaži"
      }
    },
    {
      id: 'wholesale',
      label: t('industries.items.wholesale.label'),
      title: t('industries.items.wholesale.title'),
      description: t('industries.items.wholesale.description'),
      benefits: t('industries.items.wholesale.benefits', { returnObjects: true }) as string[],
      quote: {
        text: t('industries.items.wholesale.quote'),
        author: "Logistikadirektor"
      }
    },
    {
      id: 'service',
      label: t('industries.items.service.label'),
      title: t('industries.items.service.title'),
      description: t('industries.items.service.description'),
      benefits: t('industries.items.service.benefits', { returnObjects: true }) as string[],
      quote: {
        text: "Täpne arveldus on meie kasvu alus.",
        author: "Tegevjuht"
      }
    },
    {
      id: 'finance',
      label: t('industries.items.finance.label'),
      title: t('industries.items.finance.title'),
      description: t('industries.items.finance.description'),
      benefits: t('industries.items.finance.benefits', { returnObjects: true }) as string[],
      quote: {
        text: "Finantside konsolideerimine on nüüd automaatne.",
        author: "CFO"
      }
    }
  ];

  const activeTab = industries.find(i => i.id === activeId) || industries[0];

  return (
    <section id="industries" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16">
           <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900">
             {t('industries.header')}
           </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Left: Tabs Navigation */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {industries.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveId(tab.id)}
                className={`group text-left px-6 py-5 rounded-2xl transition-all duration-300 flex items-center gap-4 border relative overflow-hidden ${
                  activeTab.id === tab.id
                    ? 'bg-white border-primary-500 shadow-xl shadow-primary-900/5 ring-1 ring-primary-500'
                    : 'bg-white border-slate-200 text-slate-500 hover:border-primary-300 hover:bg-slate-50'
                }`}
              >
                <div className={`p-3 rounded-xl transition-colors ${activeTab.id === tab.id ? 'bg-primary-50 text-primary-600' : 'bg-slate-100 text-slate-400 group-hover:bg-white group-hover:text-primary-500'}`}>
                  {tab.id === 'manufacturing' && <Factory size={24} />}
                  {tab.id === 'wholesale' && <Truck size={24} />}
                  {tab.id === 'service' && <Users size={24} />}
                  {tab.id === 'finance' && <PieChart size={24} />}
                </div>
                <div>
                  <h4 className={`font-bold text-lg ${activeTab.id === tab.id ? 'text-slate-900' : 'text-slate-600 group-hover:text-slate-900'}`}>
                    {tab.label}
                  </h4>
                </div>
                {activeTab.id === tab.id && (
                    <div className="absolute right-4 text-primary-500 animate-in fade-in slide-in-from-left-2">
                        <ArrowRight size={20} />
                    </div>
                )}
              </button>
            ))}
          </div>

          {/* Right: Content Card */}
          <div className="lg:col-span-8">
            <div key={activeId} className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-xl shadow-slate-200/50 h-full flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500">
                
                <div className="mb-8">
                    <h3 className="text-3xl font-display font-bold text-slate-900 mb-4">
                    {activeTab.title}
                    </h3>
                    <p className="text-slate-600 text-lg leading-relaxed">
                    {activeTab.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                  {activeTab.benefits.slice(0,4).map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-0.5 min-w-[20px] text-emerald-500">
                        <CheckCircle2 size={20} strokeWidth={2.5} />
                      </div>
                      <span className="text-slate-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>

                {activeTab.quote && (
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 mb-8 relative">
                     <Quote size={24} className="text-primary-200 absolute top-4 left-4" />
                     <div className="relative z-10 pl-2">
                        <p className="italic text-slate-600 mb-3 font-medium">"{activeTab.quote.text}"</p>
                        <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">— {activeTab.quote.author}</p>
                     </div>
                  </div>
                )}
                
                <div className="mt-auto pt-8 border-t border-slate-100">
                   <a href="#contact" className="inline-flex items-center gap-2 bg-slate-900 hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-primary-600/30 transform hover:-translate-y-0.5">
                     Loe lähemalt
                     <ArrowRight size={18} />
                   </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};