
import React from 'react';
import { CheckCircle2, Globe, Map, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const WhyUs: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Why Us List */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-8 text-left border-l-4 border-primary-500 pl-6">{t('whyUs.title')}</h2>
          <div className="grid gap-6">
            {(t('whyUs.items', { returnObjects: true }) as string[]).map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start group bg-slate-50 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-slate-100">
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                  <CheckCircle2 size={16} strokeWidth={3} />
                </div>
                <p className="text-lg text-slate-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Global Scale Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Metric 1 - Clients */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all flex items-center gap-5 group">
                <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                    <Globe size={28} strokeWidth={1.5} />
                </div>
                <div>
                    <div className="text-3xl font-bold font-display text-slate-900">20 000+</div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">Klienti</div>
                </div>
            </div>

            {/* Metric 2 - Countries */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all flex items-center gap-5 group">
                <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                    <Map size={28} strokeWidth={1.5} />
                </div>
                <div>
                    <div className="text-3xl font-bold font-display text-slate-900">150+</div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">Riiki</div>
                </div>
            </div>

            {/* Metric 3 - Partners */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all flex items-center gap-5 group">
                <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                    <Users size={28} strokeWidth={1.5} />
                </div>
                <div>
                    <div className="text-3xl font-bold font-display text-slate-900">500+</div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">Partnerit</div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};
