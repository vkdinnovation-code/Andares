
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, Factory, TrendingUp, AlertTriangle, CheckCircle2, Settings, BarChart3, ShoppingCart, Users, ShieldCheck, Briefcase, Wrench, Truck } from 'lucide-react';

export const EpicorPage: React.FC = () => {
  const { t } = useTranslation();

  const capabilities = [
    {
      icon: <Factory size={24} />,
      title: t('epicorPage.capabilities.items.production.title'),
      desc: t('epicorPage.capabilities.items.production.desc'),
    },
    {
      icon: <Briefcase size={24} />,
      title: t('epicorPage.capabilities.items.project.title'),
      desc: t('epicorPage.capabilities.items.project.desc'),
    },
    {
      icon: <Settings size={24} />,
      title: t('epicorPage.capabilities.items.asset.title'),
      desc: t('epicorPage.capabilities.items.asset.desc'),
    },
    {
      icon: <Wrench size={24} />,
      title: t('epicorPage.capabilities.items.maintenance.title'),
      desc: t('epicorPage.capabilities.items.maintenance.desc'),
    },
    {
      icon: <Truck size={24} />,
      title: t('epicorPage.capabilities.items.supply.title'),
      desc: t('epicorPage.capabilities.items.supply.desc'),
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-950 to-slate-950 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light z-0"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
               <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
               <span className="text-sm font-bold text-blue-400 tracking-wide uppercase">Manufacturing ERP</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              {t('epicorPage.hero.title')}
            </h1>
            <p className="text-2xl md:text-3xl text-slate-300 font-display font-medium mb-6">
              {t('epicorPage.hero.subtitle')}
            </p>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              {t('epicorPage.hero.desc')}
            </p>
            
            <div className="flex justify-center gap-4">
              <Link to="/#contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-900/50 transition-all hover:-translate-y-1 flex items-center gap-2">
                {t('epicorPage.hero.cta')}
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
              {t('epicorPage.problems.title')}
            </h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600 mb-6">
                <AlertTriangle size={24} />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">{t('epicorPage.problems.p1.title')}</h3>
              <p className="text-slate-600 leading-relaxed">{t('epicorPage.problems.p1.desc')}</p>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 mb-6">
                <TrendingUp size={24} />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">{t('epicorPage.problems.p2.title')}</h3>
              <p className="text-slate-600 leading-relaxed">{t('epicorPage.problems.p2.desc')}</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-slate-200 rounded-xl flex items-center justify-center text-slate-600 mb-6">
                <Settings size={24} />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">{t('epicorPage.problems.p3.title')}</h3>
              <p className="text-slate-600 leading-relaxed">{t('epicorPage.problems.p3.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-900/10 to-slate-950 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="mb-16">
             <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
               {t('epicorPage.features.title')}
             </h2>
             <p className="text-slate-400 text-lg max-w-2xl">
               Täisfunktsionaalne lahendus, mis katab kogu tootmisettevõtte vajadused.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Module 1 */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group">
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400 group-hover:text-blue-300 transition-colors">
                  <Factory size={24} />
                </div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider border border-white/10 px-2 py-1 rounded">Core</div>
              </div>
              <h3 className="font-bold text-xl mb-3">{t('epicorPage.features.f1.title')}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{t('epicorPage.features.f1.desc')}</p>
            </div>

            {/* Module 2 */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group">
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-emerald-500/20 rounded-lg text-emerald-400 group-hover:text-emerald-300 transition-colors">
                  <BarChart3 size={24} />
                </div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider border border-white/10 px-2 py-1 rounded">AI Ready</div>
              </div>
              <h3 className="font-bold text-xl mb-3">{t('epicorPage.features.f2.title')}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{t('epicorPage.features.f2.desc')}</p>
            </div>

            {/* Module 3 */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group">
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-amber-500/20 rounded-lg text-amber-400 group-hover:text-amber-300 transition-colors">
                  <ShieldCheck size={24} />
                </div>
              </div>
              <h3 className="font-bold text-xl mb-3">{t('epicorPage.features.f3.title')}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{t('epicorPage.features.f3.desc')}</p>
            </div>

            {/* Module 4 */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group">
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400 group-hover:text-purple-300 transition-colors">
                  <ShoppingCart size={24} />
                </div>
              </div>
              <h3 className="font-bold text-xl mb-3">{t('epicorPage.features.f4.title')}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{t('epicorPage.features.f4.desc')}</p>
            </div>

            {/* Module 5 */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group">
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-pink-500/20 rounded-lg text-pink-400 group-hover:text-pink-300 transition-colors">
                  <Users size={24} />
                </div>
              </div>
              <h3 className="font-bold text-xl mb-3">{t('epicorPage.features.f5.title')}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{t('epicorPage.features.f5.desc')}</p>
            </div>

            {/* Module 6 */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group">
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-cyan-500/20 rounded-lg text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  <CheckCircle2 size={24} />
                </div>
              </div>
              <h3 className="font-bold text-xl mb-3">{t('epicorPage.features.f6.title')}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{t('epicorPage.features.f6.desc')}</p>
            </div>

          </div>
        </div>
      </section>

      {/* Capabilities Checklist Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {t('epicorPage.capabilities.title')}
            </h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 max-w-6xl mx-auto">
            {capabilities.map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start group">
                <div className="mt-1 w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 border border-blue-100">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1 group-hover:text-blue-700 transition-colors">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Break / CTA */}
      <section className="py-24 bg-blue-600 text-white relative overflow-hidden">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
         <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-8">
               {t('epicorPage.cta.title')}
            </h2>
            <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-10">
               {t('epicorPage.cta.text')}
            </p>
            <Link to="/#contact" className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-xl">
               {t('contact.startProject')}
               <ArrowRight size={20} />
            </Link>
         </div>
      </section>
    </>
  );
};
