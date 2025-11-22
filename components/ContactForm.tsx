import React, { useState } from 'react';
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t('contact.submit') + '!');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-white rounded-[3rem] overflow-hidden border border-slate-100 shadow-2xl shadow-slate-200/50">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Contact Info - Updated to Green to match original site branding */}
            <div className="lg:col-span-5 p-10 md:p-16 bg-primary-600 text-white relative overflow-hidden flex flex-col justify-between">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
              <div className="absolute top-[-50%] right-[-50%] w-full h-full bg-gradient-to-b from-white/10 to-transparent rounded-full transform rotate-45"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-800 rounded-full blur-[80px] opacity-50"></div>
              
              <div className="relative z-10">
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 leading-tight text-white shadow-sm">
                  {t('contact.bannerTitle')}
                </h2>
                <p className="text-primary-50 mb-12 text-lg leading-relaxed font-medium border-l-2 border-primary-400 pl-4">
                   {t('contact.bannerText')}
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-primary-700/30 border border-primary-500/30 hover:bg-primary-700/50 transition-colors backdrop-blur-sm">
                    <div className="p-2 bg-white text-primary-600 rounded-lg shadow-sm">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-primary-200 uppercase font-bold tracking-wider">{t('contact.office')}</p>
                      <p className="font-medium text-white">Mustamäe tee 55, Tallinn</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-primary-700/30 border border-primary-500/30 hover:bg-primary-700/50 transition-colors backdrop-blur-sm">
                    <div className="p-2 bg-white text-primary-600 rounded-lg shadow-sm">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-primary-200 uppercase font-bold tracking-wider">Email</p>
                      <p className="font-medium text-white">info@andares.ee</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-primary-700/30 border border-primary-500/30 hover:bg-primary-700/50 transition-colors backdrop-blur-sm">
                    <div className="p-2 bg-white text-primary-600 rounded-lg shadow-sm">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-primary-200 uppercase font-bold tracking-wider">{t('contact.phone')}</p>
                      <p className="font-medium text-white">6776 791</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative z-10 mt-12 pt-8 border-t border-white/10">
                 <p className="text-sm text-primary-100">Andares Consulting OÜ</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7 p-10 md:p-16 bg-white">
              <div className="mb-10">
                <h3 className="font-display text-2xl font-bold text-slate-900">{t('contact.formTitle')}</h3>
                <p className="text-slate-500 mt-2">{t('contact.formSubtitle')}</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">{t('contact.fields.name')}</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-transparent focus:bg-white focus:border-primary-500 transition-all outline-none font-medium text-slate-900 placeholder-slate-400"
                      placeholder={t('contact.fields.placeholderName')}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">{t('contact.fields.company')}</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-transparent focus:bg-white focus:border-primary-500 transition-all outline-none font-medium text-slate-900 placeholder-slate-400"
                      placeholder={t('contact.fields.placeholderCompany')}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">{t('contact.fields.email')}</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-transparent focus:bg-white focus:border-primary-500 transition-all outline-none font-medium text-slate-900 placeholder-slate-400"
                    placeholder="email@domain.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">{t('contact.fields.message')}</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-transparent focus:bg-white focus:border-primary-500 transition-all outline-none font-medium text-slate-900 placeholder-slate-400 resize-none"
                    placeholder={t('contact.fields.placeholderMsg')}
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl shadow-lg shadow-slate-900/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 text-lg"
                  >
                    {t('contact.submit')}
                    <ArrowRight size={20} />
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
