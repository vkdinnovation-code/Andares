
import React from 'react';
import { useTranslation } from 'react-i18next';

export const ERPModules: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="modules" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="w-full max-w-5xl mx-auto">
          
          {/* Main Content */}
          <div>
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-primary-500 to-emerald-600 px-6 py-4 rounded-t-lg shadow-md mb-6">
              <h2 className="text-xl font-bold text-white">{t('modules.financeContent.title')}</h2>
            </div>

            <div className="bg-white pl-2 pr-4">
              <div className="prose prose-slate max-w-none text-slate-700">
                <p className="mb-4 text-sm md:text-base leading-relaxed">
                  {t('modules.financeContent.p1')}
                </p>
                
                <p className="mb-6 text-sm md:text-base leading-relaxed">
                  {t('modules.financeContent.p2')}
                </p>

                <h3 className="text-lg font-bold text-primary-600 mb-3">
                  {t('modules.financeContent.highlight')}
                </h3>
                
                <p className="mb-4 text-sm md:text-base">
                  {t('modules.financeContent.listTitle1')}
                </p>

                <ul className="list-disc pl-5 mb-6 space-y-1 text-sm md:text-base font-medium marker:text-primary-500">
                  {(t('modules.financeContent.list1', { returnObjects: true }) as string[]).map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <h3 className="text-lg font-bold text-primary-600 mb-3">
                  {t('modules.financeContent.listTitle2')}
                </h3>

                <ul className="list-disc pl-5 mb-6 space-y-1 text-sm md:text-base marker:text-primary-500">
                  {(t('modules.financeContent.list2', { returnObjects: true }) as string[]).map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <a href="#contact" className="text-primary-600 font-bold hover:underline inline-block mt-2">
                  {t('modules.financeContent.readMore')}
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
