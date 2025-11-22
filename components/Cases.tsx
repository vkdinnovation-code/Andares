import React from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Cases: React.FC = () => {
  const { t } = useTranslation();

  const cases = [
    {
      category: t('industries.items.manufacturing.label'),
      title: t('cases.items.0.title'),
      metric: '-15%',
      metricDesc: t('cases.items.0.metricDesc'),
      tags: ['Epicor', 'MES', 'IoT'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
    },
    {
      category: t('industries.items.wholesale.label'),
      title: t('cases.items.1.title'),
      metric: '2x',
      metricDesc: t('cases.items.1.metricDesc'),
      tags: ['iScala', 'WMS', 'Mobile'],
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800'
    },
    {
      category: t('industries.items.service.label'),
      title: t('cases.items.2.title'),
      metric: '+12%',
      metricDesc: t('cases.items.2.metricDesc'),
      tags: ['Service', 'Billing', 'Mobile App'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section id="cases" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {t('cases.title')}
            </h2>
            <p className="text-slate-500 text-lg">
              {t('cases.subtitle')}
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-primary-700 font-bold hover:gap-3 transition-all border-b-2 border-primary-100 hover:border-primary-700 pb-1">
            {t('cases.portfolioBtn')} <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6 bg-slate-100">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors z-10"></div>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider text-slate-900">
                  {item.category}
                </div>
              </div>
              
              <div className="flex justify-between items-start gap-4 mb-4">
                <h3 className="font-display text-xl font-bold text-slate-900 leading-tight group-hover:text-primary-600 transition-colors">
                  {item.title}
                </h3>
                <div className="flex flex-col items-end shrink-0">
                  <span className="font-display text-2xl font-bold text-primary-600 flex items-center gap-1">
                    {item.metric}
                    <TrendingUp size={16} />
                  </span>
                  <span className="text-xs text-slate-400 font-medium text-right">{item.metricDesc}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-medium text-slate-500 bg-slate-50 px-2 py-1 rounded border border-slate-100">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <button className="mt-8 md:hidden w-full py-4 bg-slate-50 rounded-xl font-bold text-slate-700 flex justify-center items-center gap-2">
          {t('cases.portfolioBtn')} <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};
