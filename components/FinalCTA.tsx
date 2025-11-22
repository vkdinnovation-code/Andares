import React from 'react';
import { Phone, Mail, CalendarCheck, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const FinalCTA: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-primary-900 relative overflow-hidden text-center">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-soft-light pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/30 pointer-events-none"></div>
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-primary-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] drop-shadow-sm">
                    {t('finalCta.title')}
                </h2>
                <p className="text-primary-100 text-xl md:text-2xl mb-12 font-medium max-w-3xl mx-auto leading-relaxed opacity-90">
                    {t('finalCta.subtitle')}
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                    <a 
                        href="#contact" 
                        className="w-full md:w-auto px-10 py-5 bg-white text-primary-900 hover:bg-primary-50 font-bold text-xl rounded-2xl transition-all shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] hover:shadow-[0_25px_60px_-12px_rgba(0,0,0,0.6)] hover:-translate-y-1 flex items-center justify-center gap-3 group"
                    >
                        <CalendarCheck size={24} className="text-primary-600" />
                        {t('finalCta.button')}
                        <ArrowRight size={24} className="text-primary-400 group-hover:translate-x-1 transition-transform" />
                    </a>
                    
                    <div className="flex items-center gap-6 md:border-l md:border-white/10 md:pl-8">
                        <a href="tel:+3726776791" className="group flex items-center gap-4 text-white hover:text-primary-200 transition-colors text-left">
                             <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/5">
                                <Phone size={24} />
                             </div>
                             <div>
                                <span className="block text-xs text-primary-300 uppercase font-bold tracking-widest mb-0.5">{t('finalCta.callAction')}</span>
                                <span className="text-2xl font-bold font-display">6776 791</span>
                             </div>
                        </a>
                    </div>
                </div>
                
                <div className="mt-12 pt-8 border-t border-white/5 flex justify-center">
                   <div className="inline-flex items-center gap-2 text-primary-200/60 font-medium bg-white/5 px-4 py-1.5 rounded-full">
                      <Mail size={14} />
                      <span>info@andares.ee</span>
                   </div>
                </div>
            </div>
        </div>
    </section>
  );
};