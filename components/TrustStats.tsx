
import React from 'react';
import { ShieldCheck, Users, History, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const TrustStats: React.FC = () => {
  const { t } = useTranslation();

  const stats = [
    {
      icon: <History size={32} />,
      value: t('trust.stat1.value'),
      label: t('trust.stat1.label'),
      desc: t('trust.stat1.desc'),
    },
    {
      icon: <Users size={32} />,
      value: t('trust.stat2.value'),
      label: t('trust.stat2.label'),
      desc: t('trust.stat2.desc'),
    },
    {
      icon: <Award size={32} />,
      value: t('trust.stat3.value'),
      label: t('trust.stat3.label'),
      desc: t('trust.stat3.desc'),
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-100 relative overflow-hidden animate-in fade-in duration-700">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-50"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-bold mb-4 shadow-sm">
            <ShieldCheck size={16} />
            <span className="uppercase tracking-wider">{t('trust.badge')}</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t('trust.title')}
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            {t('trust.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:border-primary-200 hover:-translate-y-1 transition-all duration-300 group text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-50 text-primary-600 mb-6 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                {stat.icon}
              </div>
              <div className="font-display text-4xl font-bold text-slate-900 mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-primary-700 font-bold uppercase tracking-wider text-sm mb-4">
                {stat.label}
              </div>
              <p className="text-slate-500 leading-relaxed text-sm font-medium">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Partner Logos Section */}
        <div className="border-t border-slate-200 pt-16">
          <p className="text-center text-slate-400 text-sm font-bold uppercase tracking-widest mb-10">
            {t('trust.partnersLabel')}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Epicor Logo Simulation */}
            <div className="flex items-center gap-2 group cursor-default">
               <span className="font-display font-extrabold text-4xl text-slate-800 group-hover:text-[#0096D6] transition-colors">Epicor</span>
            </div>
            
            {/* iScala Logo Simulation */}
            <div className="flex items-center gap-2 group cursor-default">
               <span className="font-display font-bold text-4xl italic text-slate-800 group-hover:text-[#E31837] transition-colors">iScala</span>
            </div>

            {/* Microsoft Logo Simulation (Standard Tech Partner) */}
            <div className="flex items-center gap-2 group cursor-default">
               <span className="font-sans font-semibold text-3xl text-slate-600 group-hover:text-[#00A4EF] transition-colors">Microsoft</span>
               <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded font-bold ml-2 border border-slate-200">Gold Partner</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
