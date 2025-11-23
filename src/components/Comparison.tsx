import React from 'react';
import { Check, X, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Comparison: React.FC = () => {
  const { t } = useTranslation();

  const getRows = () => {
    const res = t('comparison.rows', { returnObjects: true });
    return Array.isArray(res) ? res : [];
  };
  const rows = getRows() as any[];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t('comparison.title')}
          </h2>
          <p className="text-slate-500 text-lg">
            {t('comparison.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
          {/* Header Row */}
          <div className="grid grid-cols-3 border-b border-slate-100 bg-slate-50/50">
            <div className="p-6 md:p-8 font-bold text-slate-400 uppercase tracking-wider text-xs md:text-sm flex items-center">
              {t('comparison.headers.feature')}
            </div>
            <div className="p-6 md:p-8 text-center font-bold text-slate-500 border-l border-slate-100">
              {t('comparison.headers.standard')}
            </div>
            <div className="p-6 md:p-8 text-center font-bold text-slate-900 bg-primary-50/50 border-l border-slate-100 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary-500"></div>
              {t('comparison.headers.andares')}
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-slate-100">
             {rows.map((row, idx) => (
                <div key={idx} className="grid grid-cols-3 hover:bg-slate-50/50 transition-colors">
                    <div className="p-6 md:p-8 font-bold text-slate-700 flex items-center">
                    {row.label}
                    </div>
                    <div className="p-6 md:p-8 flex items-center justify-center border-l border-slate-100 text-slate-400">
                        {row.checkStandard === false ? <X size={24} /> : null}
                        {row.checkStandard === true ? <Check size={24} strokeWidth={3} /> : null}
                        {row.standard && row.standard.length > 0 && <span className={`${row.checkStandard === false ? 'hidden md:inline ml-2' : ''} text-sm text-slate-400`}>{row.standard}</span>}
                    </div>
                    <div className="p-6 md:p-8 flex items-center justify-center border-l border-primary-100 bg-primary-50/10 text-primary-600 font-bold">
                        {row.checkAndares === true ? <Check size={24} strokeWidth={3} className={row.andares ? "mr-2" : ""} /> : null}
                        {row.andares && <span className="text-sm">{row.andares}</span>}
                    </div>
                </div>
             ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 text-slate-500 text-sm font-medium bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200">
                <ShieldCheck size={16} className="text-primary-500" />
                <span>{t('comparison.guarantee')}</span>
            </div>
        </div>

      </div>
    </section>
  );
};