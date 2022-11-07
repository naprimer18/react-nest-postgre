import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { I18N_DEFAULT_LANG } from "./constants/default";
import en_default from "./locales/en/default.json";
import ru_default from "./locales/ru/default.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true, // actual for development period
    fallbackLng: I18N_DEFAULT_LANG,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: en_default,
      },
      ru: {
        translation: ru_default,
      },
    },
  });

export default i18n;
