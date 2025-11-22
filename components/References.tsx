
import React from 'react';
import { Factory, Truck, Utensils, ShoppingBag } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const References: React.FC = () => {
  const { t } = useTranslation();

  const industries = [
    { icon: <Factory size={40} />, label: "Tootmisettevõtted" },
    { icon: <Truck size={40} />, label: "Logistika ja Hulgimüük" },
    { icon: <Utensils size={40} />, label: "Teenindus ja Horeca" },
    { icon: <ShoppingBag size={40} />, label: "Jaekaubandus" }
  ];

  const clientNames = [
    "Kalev", "Põltsamaa", "A. Le Coq", "Saku", "Würth", "Tele2", "Alexela", "Harju Elekter"
  ];

  return (
    <section id="cases" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 opacity-90">
            Meid usaldavad tööstusliidrid
          </h2>
        </div>

        {/* Industry Placeholders */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-20 max-w-5xl mx-auto">
          {industries.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center gap-5 p-8 rounded-2xl border border-slate-200/60 bg-white hover:bg-white hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300 group cursor-default">
              <div className="text-slate-300 group-hover:text-primary-600 transition-colors duration-300 transform group-hover:scale-110">
                {item.icon}
              </div>
              <span className="font-display font-bold text-sm text-slate-500 text-center group-hover:text-slate-900 transition-colors">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Subtle Text List */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 opacity-50 grayscale hover:opacity-80 transition-opacity duration-500 max-w-4xl mx-auto">
           {clientNames.map((name, i) => (
             <span key={i} className="text-lg font-bold text-slate-400">{name}</span>
           ))}
        </div>

      </div>
    </section>
  );
};
