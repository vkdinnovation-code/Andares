import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const navItems = [
    { label: t('nav.solutions'), path: '/#solutions' },
    { label: t('nav.services'), path: '/#process' }, // Mapping Services to Process/Implementation
    { label: t('nav.about'), path: '/#about' },
    { label: t('nav.contact'), path: '/#contact' },
  ];

  // Dynamic classes based on scroll state
  const navContainerClass = scrolled 
    ? 'bg-white/90 backdrop-blur-xl border-slate-200/50 shadow-lg shadow-slate-200/20 py-3 px-6' 
    : 'bg-transparent border-transparent py-5 px-0';
    
  const linkClass = scrolled
    ? 'text-slate-600 hover:text-primary-700 hover:bg-slate-50'
    : 'text-slate-300 hover:text-white hover:bg-white/10';

  const logoBoxClass = scrolled
    ? 'bg-primary-900 text-white shadow-primary-900/20'
    : 'bg-white text-primary-900 shadow-white/20';

  const logoTextClass = scrolled ? 'text-primary-900' : 'text-white';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'pt-4' : 'pt-6'}`}>
      <div className="container mx-auto px-4">
        <div className={`
          mx-auto max-w-7xl rounded-2xl transition-all duration-300 border ${navContainerClass}
        `}>
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className={`w-10 h-10 flex items-center justify-center rounded-xl font-display font-bold text-xl shadow-lg transition-all group-hover:scale-105 ${logoBoxClass}`}>
                A
              </div>
              <div className="flex flex-col">
                <span className={`font-display text-xl font-bold tracking-tight leading-none transition-colors ${logoTextClass}`}>
                  Andares Consulting
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link 
                  key={item.label} 
                  to={item.path}
                  className={`px-5 py-2 text-sm font-medium rounded-lg transition-all ${linkClass}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            
            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Phone Number */}
              <a href="tel:+3726776791" className={`flex items-center gap-2 text-sm font-bold ${scrolled ? 'text-slate-700' : 'text-white'} hover:opacity-80 transition-opacity`}>
                <Phone size={16} className="text-primary-500" />
                <span>6776 791</span>
              </a>

              <div className="h-6 w-px bg-slate-200/20"></div>

              <div className="flex items-center gap-1">
                 <button onClick={() => changeLanguage('et')} className={`px-2 py-1 text-xs font-bold rounded transition-colors ${i18n.language === 'et' ? 'bg-primary-500 text-white' : scrolled ? 'text-slate-500 hover:text-primary-600' : 'text-slate-400 hover:text-white'}`}>ET</button>
                 <button onClick={() => changeLanguage('en')} className={`px-2 py-1 text-xs font-bold rounded transition-colors ${i18n.language === 'en' ? 'bg-primary-500 text-white' : scrolled ? 'text-slate-500 hover:text-primary-600' : 'text-slate-400 hover:text-white'}`}>EN</button>
              </div>
            </div>

            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-slate-700 bg-slate-100' : 'text-white bg-white/10'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-[80px] left-4 right-4 bg-white rounded-3xl shadow-2xl border border-slate-100 p-4 animate-in slide-in-from-top-5 z-50">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link 
                key={item.label} 
                to={item.path}
                className="py-3 px-4 text-slate-700 font-medium hover:bg-slate-50 rounded-xl flex justify-between items-center group"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
                <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary-600" />
              </Link>
            ))}
          </div>
          <div className="h-px bg-slate-100 my-4"></div>
          <div className="flex items-center justify-between px-4 mb-4">
             <a href="tel:+3726776791" className="flex items-center gap-2 font-bold text-slate-900">
                <Phone size={18} className="text-primary-600" />
                6776 791
             </a>
             <div className="flex gap-1 bg-slate-100 p-1 rounded-lg">
               <button onClick={() => changeLanguage('et')} className={`px-3 py-1 rounded-md text-xs font-bold ${i18n.language === 'et' ? 'bg-white shadow-sm text-primary-900' : 'text-slate-500'}`}>ET</button>
               <button onClick={() => changeLanguage('en')} className={`px-3 py-1 rounded-md text-xs font-bold ${i18n.language === 'en' ? 'bg-white shadow-sm text-primary-900' : 'text-slate-500'}`}>EN</button>
             </div>
          </div>
        </div>
      )}
    </nav>
  );
};