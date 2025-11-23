
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Truck, Hotel, RefreshCw, BarChart3, Settings, Banknote, Package, Users, FileText } from 'lucide-react';

export const IscalaPage: React.FC = () => {
  const { t } = useTranslation();

  const capabilities = [
    {
      icon: <Package size={24} />,
      title: t('iscalaPage.capabilities.items.logistics.title'),
      desc: t('iscalaPage.capabilities.items.logistics.desc'),
    },
    {
      icon: <Banknote size={24} />,
      title: t('iscalaPage.capabilities.items.finance.title'),
      desc: t('iscalaPage.capabilities.items.finance.desc'),
    },
    {
      icon: <Truck size={24} />,
      title: t('iscalaPage.capabilities.items.supply.title'),
      desc: t('iscalaPage.capabilities.items.supply.desc'),
    },
    {
      icon: <FileText size={24} />,
      title: t('iscalaPage.capabilities.items.contracts.title'),
      desc: t('iscalaPage.capabilities.items.contracts.desc'),
    },
    {
      icon: <Users size={24} />,
      title: t('iscalaPage.capabilities.items.hr.title'),
      desc: t('iscalaPage.capabilities.items.hr.desc'),
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-950 to-slate-950 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light z-0"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
               <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
               <span className="text-sm font-bold text-indigo-400 tracking-wide uppercase">{t('iscalaPage.hero.title')}</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              {t('iscalaPage.hero.subtitle')}
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-medium mb-10 max-w-3xl mx-auto leading-relaxed">
              {t('iscalaPage.hero.desc')}
            </p>
            
            <div className="flex justify-center gap-4">
              <Link to="/#contact" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl shadow-lg shadow-indigo-900/50 transition-all hover:-translate-y-1 flex items-center gap-2">
                {t('iscalaPage.hero.cta')}
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {t('iscalaPage.problems.title')}
            </h2>
            <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600 mb-6">
                <BarChart3 size={24} />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">{t('iscalaPage.problems.p1.title')}</h3>
              <p className="text-slate-600 leading-relaxed">{t('iscalaPage.problems.p1.desc')}</p>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 mb-6">
                <Settings size={24} />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">{t('iscalaPage.problems.p2.title')}</h3>
              <p className="text-slate-600 leading-relaxed">{t('iscalaPage.problems.p2.desc')}</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                <Globe size={24} />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">{t('iscalaPage.problems.p3.title')}</h3>
              <p className="text-slate-600 leading-relaxed">{t('iscalaPage.problems.p3.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {t('iscalaPage.features.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Globe size={24} />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">{t('iscalaPage.features.f1.title')}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{t('iscalaPage.features.f1.desc')}</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group hover:-translate-y-1">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Truck size={24} />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">{t('iscalaPage.features.f2.title')}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{t('iscalaPage.features.f2.desc')}</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group hover:-translate-y-1">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <Settings size={24} />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">{t('iscalaPage.features.f3.title')}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{t('iscalaPage.features.f3.desc')}</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <BarChart3 size={24} />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">{t('iscalaPage.features.f4.title')}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{t('iscalaPage.features.f4.desc')}</p>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group hover:-translate-y-1">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <Hotel size={24} />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">{t('iscalaPage.features.f5.title')}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{t('iscalaPage.features.f5.desc')}</p>
            </div>

            {/* Card 6 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group hover:-translate-y-1">
              <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center text-cyan-600 mb-6 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                <RefreshCw size={24} />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">{t('iscalaPage.features.f6.title')}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{t('iscalaPage.features.f6.desc')}</p>
            </div>

          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {t('iscalaPage.capabilities.title')}
            </h2>
            <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 max-w-6xl mx-auto">
            {capabilities.map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start group">
                <div className="mt-1 w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 border border-indigo-100">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1 group-hover:text-indigo-700 transition-colors">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
         <div className="absolute inset-0 bg-indigo-900/20"></div>
         <div className="absolute -right-20 -top-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>
         
         <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              {t('iscalaPage.cta.title')}
            </h2>
            <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
               {t('iscalaPage.cta.text')}
            </p>
            <Link to="/#contact" className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-indigo-50 transition-colors shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transform duration-200">
               {t('iscalaPage.hero.cta')}
               <ArrowRight size={20} className="text-indigo-600" />
            </Link>
         </div>
      </section>
    </>
  );
};
