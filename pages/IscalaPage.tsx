
import React from 'react';
import { ArrowRight, Globe, Truck, Hotel, RefreshCw } from 'lucide-react';

export const IscalaPage: React.FC = () => {
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
               <span className="text-sm font-bold text-indigo-400 tracking-wide uppercase">Epicor iScala</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Globaalne äri, lokaalne kontroll.
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-medium mb-10 max-w-3xl mx-auto leading-relaxed">
              Epicor iScala – ideaalne lahendus hulgimüügile, hotellidele ja kontsernidele.
            </p>
            
            <div className="flex justify-center gap-4">
              <a href="#contact" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl shadow-lg shadow-indigo-900/50 transition-all hover:-translate-y-1 flex items-center gap-2">
                Küsi iScala pakkumist
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              iScala eelised
            </h2>
            <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Globe size={24} />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">Finantsjuhtimine</h3>
              <p className="text-slate-600 leading-relaxed text-sm">Mitme valuuta ja ettevõtte tugi ühes süsteemis.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group hover:-translate-y-1">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Truck size={24} />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">Täiustatud logistika</h3>
              <p className="text-slate-600 leading-relaxed text-sm">Optimeeri laovarusid ja tarneid.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group hover:-translate-y-1">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <Hotel size={24} />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">Teenindus ja Horeca</h3>
              <p className="text-slate-600 leading-relaxed text-sm">Spetsiaalsed moodulid hotellidele ja hooldusfirmadele.</p>
            </div>

            {/* Card 4 */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <RefreshCw size={24} />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">Lihtne integratsioon</h3>
              <p className="text-slate-600 leading-relaxed text-sm">Ühendub pankade ja e-poodidega.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
         <div className="absolute inset-0 bg-indigo-900/20"></div>
         <div className="absolute -right-20 -top-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>
         
         <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              Optimeeri oma äriprotsesse.
            </h2>
            <a href="#contact" className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-indigo-50 transition-colors shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transform duration-200">
               Küsi iScala pakkumist
               <ArrowRight size={20} className="text-indigo-600" />
            </a>
         </div>
      </section>
    </>
  );
};
