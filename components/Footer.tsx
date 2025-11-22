import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, ArrowRight, Linkedin, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10 border-t border-slate-900 font-sans">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Top Section: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Description */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5">
               <div className="w-10 h-10 flex items-center justify-center rounded-xl font-display font-bold text-xl bg-primary-900 text-white shadow-lg shadow-primary-900/20">
                A
              </div>
              <span className="font-display text-2xl font-bold text-white tracking-tight">Andares Consulting</span>
            </div>
            <p className="text-slate-500 leading-relaxed text-sm">
              {t('footer.tagline')}
            </p>
            <div className="flex gap-4 pt-2">
               <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all duration-300">
                 <Linkedin size={18} />
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all duration-300">
                 <Facebook size={18} />
               </a>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h4 className="text-white font-display font-bold text-lg mb-6">{t('nav.solutions')}</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <a href="#solutions" className="flex items-center gap-2 hover:text-primary-400 transition-colors group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-primary-500 transition-colors"></span>
                  Epicor ERP
                </a>
              </li>
              <li>
                <a href="#solutions" className="flex items-center gap-2 hover:text-primary-400 transition-colors group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-primary-500 transition-colors"></span>
                  iScala
                </a>
              </li>
              <li>
                <a href="#industries" className="flex items-center gap-2 hover:text-primary-400 transition-colors group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-primary-500 transition-colors"></span>
                  {t('industries.items.manufacturing.label')}
                </a>
              </li>
              <li>
                <a href="#industries" className="flex items-center gap-2 hover:text-primary-400 transition-colors group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-primary-500 transition-colors"></span>
                  {t('industries.items.wholesale.label')}
                </a>
              </li>
              <li>
                <a href="#modules" className="flex items-center gap-2 hover:text-primary-400 transition-colors group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-primary-500 transition-colors"></span>
                  {t('modules.financeContent.title')}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-white font-display font-bold text-lg mb-6">{t('footer.company')}</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <a href="#about" className="hover:text-white transition-colors">Andares Consulting OÜ</a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">{t('nav.services')}</a>
              </li>
              <li>
                <a href="#cases" className="hover:text-white transition-colors">{t('references.title')}</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">{t('nav.contact')}</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-white font-display font-bold text-lg mb-6">{t('nav.contact')}</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="mt-1 w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-primary-500 shrink-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">{t('contact.office')}</p>
                  <p className="text-slate-300 text-sm leading-relaxed">Mustamäe tee 55,<br/>10621, Tallinn, Eesti</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-primary-500 shrink-0">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">{t('contact.phone')}</p>
                  <a href="tel:+3726776791" className="text-white hover:text-primary-400 transition-colors font-bold">6776 791</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-primary-500 shrink-0">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Email</p>
                  <a href="mailto:info@andares.ee" className="text-slate-300 hover:text-primary-400 transition-colors">info@andares.ee</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-600">
          <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-center md:text-left">
            <p>&copy; 2025 Andares Consulting OÜ</p>
            <span className="hidden md:inline text-slate-800">|</span>
            <p>{t('footer.regCode')}: 11929816</p>
            <span className="hidden md:inline text-slate-800">|</span>
            <p>{t('footer.vatCode')}: EE101365039</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};