
import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { ParticlesBackground } from './ParticlesBackground';
import { useTranslation } from 'react-i18next';

export const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-950 min-h-[85vh] flex items-center">
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0B1120] to-slate-950 z-0"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light z-0"></div>
      <ParticlesBackground />
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-slate-50 to-transparent z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Text */}
          <div className="max-w-3xl">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
              <ShieldCheck size={14} className="text-emerald-400" />
              <span className="text-sm font-bold text-emerald-400 tracking-wide uppercase">{t('hero.badge')}</span>
            </div>
            
            {/* H1 */}
            <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold text-white leading-[1.05] mb-8 tracking-tight drop-shadow-2xl animate-in fade-in slide-in-from-bottom-6 duration-1000 fill-mode-both delay-100">
              {t('hero.title')}
            </h1>
            
            {/* Subtext */}
            <p className="text-xl md:text-2xl text-slate-400 mb-12 font-medium max-w-xl animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both delay-200">
              {t('hero.description')}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-start gap-5 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-10 duration-1000 fill-mode-both delay-300">
              <a 
                href="#contact" 
                className="w-full sm:w-auto px-10 py-5 bg-primary-600 hover:bg-primary-500 text-white font-bold text-lg rounded-2xl shadow-lg shadow-primary-900/50 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 border-t border-white/10"
              >
                {t('hero.audit')}
                <ArrowRight size={20} />
              </a>
              <a 
                href="#solutions" 
                className="w-full sm:w-auto px-10 py-5 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold text-lg rounded-2xl shadow-sm transition-all backdrop-blur-sm flex items-center justify-center gap-2"
              >
                {t('hero.howItWorks')}
              </a>
            </div>
          </div>

          {/* Right Column: Visual Element (Visible on Large Screens) */}
          <div className="hidden lg:block relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-500 perspective-1000">
             {/* Decorative Glow */}
             <div className="absolute -top-20 -right-20 w-[120%] h-[120%] bg-primary-500/10 rounded-full blur-[100px] pointer-events-none"></div>
             
             {/* Image Container */}
             <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 bg-slate-900/50 backdrop-blur-sm transform rotate-1 hover:rotate-0 transition-all duration-700 group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 to-transparent z-10 pointer-events-none mix-blend-overlay"></div>
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
                  alt="Modern ERP Dashboard" 
                  className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
             </div>

             {/* Decorative Floating Element - Small Card */}
             <div className="absolute -bottom-6 -left-6 bg-slate-800/90 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-xl animate-in fade-in slide-in-from-bottom-4 delay-700 duration-1000">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                   </div>
                   <div>
                      <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Status</div>
                      <div className="text-white font-bold text-lg">Optimeeritud</div>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
