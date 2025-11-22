import React from 'react';
import { FileCheck, MessagesSquare, Landmark, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const LocalExpertise: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-emerald-50/50 border-y border-emerald-100 relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-primary-100/40 to-transparent rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:w-1/3">
            <div className="inline-flex items-center gap-2 bg-white border border-primary-100 text-primary-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary-500"></span>
              {t('local.badge')}
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              {t('local.title')}
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              {t('local.description')}
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 text-primary-700 font-bold border-b-2 border-primary-200 hover:border-primary-600 pb-1 transition-all group">
              {t('local.cta')} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Cards Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Compliance Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg shadow-primary-900/5 border border-primary-100/50 hover:border-primary-300 transition-all duration-300 group">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <FileCheck size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                {t('local.compliance.title')}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t('local.compliance.desc')}
              </p>
              <ul className="mt-4 space-y-2">
                <li className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded inline-block mr-2">Käibemaks (VAT)</li>
                <li className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded inline-block">EUR-Lex</li>
              </ul>
            </div>

            {/* Language Support Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg shadow-primary-900/5 border border-primary-100/50 hover:border-primary-300 transition-all duration-300 group">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <MessagesSquare size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                {t('local.language.title')}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t('local.language.desc')}
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white"></div>
                </div>
                <span className="text-xs font-medium text-slate-500">{t('local.language.team')}</span>
              </div>
            </div>

            {/* Local Integrations Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg shadow-primary-900/5 border border-primary-100/50 hover:border-primary-300 transition-all duration-300 group">
              <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <Landmark size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                {t('local.integrations.title')}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t('local.integrations.desc')}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 border border-slate-200 px-2 py-1 rounded">Telema</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 border border-slate-200 px-2 py-1 rounded">E-Arved</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 border border-slate-200 px-2 py-1 rounded">Pangad</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};