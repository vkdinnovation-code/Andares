import React from 'react';
import { Users, Globe, Briefcase } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const WhyUs: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-12 bg-white border-y border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            
            {/* Metric 1 - Clients */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex items-center gap-5 group hover:border-emerald-200 hover:shadow-md transition-all">
                <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                    <Users size={26} strokeWidth={2} />
                </div>
                <div>
                    <div className="text-3xl font-bold font-display text-slate-900">{t('whyUs.stats.clients.val')}</div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">{t('whyUs.stats.clients.label')}</div>
                </div>
            </div>

            {/* Metric 2 - Countries */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex items-center gap-5 group hover:border-emerald-200 hover:shadow-md transition-all">
                <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                    <Globe size={26} strokeWidth={2} />
                </div>
                <div>
                    <div className="text-3xl font-bold font-display text-slate-900">{t('whyUs.stats.countries.val')}</div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">{t('whyUs.stats.countries.label')}</div>
                </div>
            </div>

            {/* Metric 3 - Partners */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex items-center gap-5 group hover:border-emerald-200 hover:shadow-md transition-all">
                <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                    <Briefcase size={26} strokeWidth={2} />
                </div>
                <div>
                    <div className="text-3xl font-bold font-display text-slate-900">{t('whyUs.stats.partners.val')}</div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">{t('whyUs.stats.partners.label')}</div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};