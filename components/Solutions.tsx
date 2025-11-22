
import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Solutions: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16">
           <h2 className="font-display text-4xl font-bold text-slate-900 mb-4">
             {t('solutions.title')}
           </h2>
           <p className="text-slate-500 text-lg max-w-2xl mx-auto">
             {t('solutions.chooseTitle')}
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Epicor Card */}
            <div className="flex flex-col bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 group">
                <div className="h-64 overflow-hidden relative">
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
                        alt="Manufacturing" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                    <div className="mb-6">
                        <span className="text-xs font-bold text-primary-600 uppercase tracking-wider block mb-2">
                            {t('solutions.epicor.tag')}
                        </span>
                        <h3 className="font-display text-3xl font-bold text-slate-900 mb-6">
                            {t('solutions.epicor.header')}
                        </h3>

                        <ul className="space-y-3">
                            {(t('solutions.epicor.features', { returnObjects: true }) as string[]).map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                                        <Check size={12} strokeWidth={3} />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-auto pt-6 border-t border-slate-200">
                        <a href="#contact" className="inline-flex items-center gap-2 text-slate-900 font-bold hover:text-primary-600 transition-colors group/btn">
                           {t('solutions.learnMore')}
                           <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>

            {/* iScala Card */}
            <div className="flex flex-col bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 group">
                <div className="h-64 overflow-hidden relative">
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" 
                        alt="Logistics" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                    <div className="mb-6">
                        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-2">
                            {t('solutions.iscala.tag')}
                        </span>
                        <h3 className="font-display text-3xl font-bold text-slate-900 mb-6">
                            {t('solutions.iscala.header')}
                        </h3>

                        <ul className="space-y-3">
                            {(t('solutions.iscala.features', { returnObjects: true }) as string[]).map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                    <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                                        <Check size={12} strokeWidth={3} />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-auto pt-6 border-t border-slate-200">
                        <a href="#contact" className="inline-flex items-center gap-2 text-slate-900 font-bold hover:text-blue-600 transition-colors group/btn">
                           {t('solutions.learnMore')}
                           <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};
