import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import arTranslation from './ar.json';
import enTranslation from './en.json';
document.documentElement.dir = 'ltr';
i18n.use(initReactI18next).init({
  debug: true,
  resources: {
    ar: { translation: arTranslation },
    en: { translation: enTranslation },
  },
  lng: 'en',
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
  },
});

i18n.on('languageChanged', lng => {
  document.documentElement.lang = lng;
  document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
});

export default i18n;
