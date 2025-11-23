import React from 'react';
import { useTranslation } from 'react-i18next';
import { Search, PenTool, Rocket, HeartHandshake } from 'lucide-react';

export const Process: React.FC = () => {
  const { t } = useTranslation();
  
  const stepIcons = [<Search size={24} />, <PenTool size={24} />, <Rocket size={24} />, <HeartHandshake size={24} />];
  
  const getSteps = () => {
    const s = t('process.steps', { returnObjects: true });
    return Array.isArray(s) ? s : [];
  };
  const translatedSteps = getSteps() as { title: string }[];

  const steps = translatedSteps.map((s, i) => ({
      number: `0${i + 1}`,
      title: s.title,
      icon: stepIcons[i]
  }));

  return (
    <section id="process" className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t('process.title')}
          </h2>
          <div className="h-1 w-20 bg-primary-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-slate-100 -z-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group cursor-default">
                <div className="w-20 h-20 rounded-2xl bg-white border-2 border-slate-100 shadow-lg flex items-center justify-center mb-6 group-hover:border-primary-500 group-hover:scale-110 transition-all duration-300 relative z-10 text-slate-400 group-hover:text-primary-600">
                  {step.icon}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs font-bold border-2 border-white shadow-sm">
                    {step.number}
                  </div>
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-primary-700 transition-colors max-w-[150px]">
                  {step.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};