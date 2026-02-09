import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Импортируем переводы напрямую
import ru from './locales/ru.json';
import en from './locales/en.json';

i18n
  .use(LanguageDetector) // Определяет язык (браузер/localStorage)
  .use(initReactI18next)
  .init({
    resources: {
      ru: { translation: ru },
      en: { translation: en },
    },
    fallbackLng: 'ru', // Язык по умолчанию
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;