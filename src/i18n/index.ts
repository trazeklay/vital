import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translation JSON files
import enTranslation from "../locales/en.json";
import frTranslation from "../locales/fr.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // Ensure this is used
  .init({
    resources: {
      en: { translation: enTranslation },
      fr: { translation: frTranslation },
    },
    fallbackLng: "en",
    lng: localStorage.getItem("language") || "en", // Persist selected language
    interpolation: { escapeValue: false },
  });

// Save selected language to localStorage
i18n.on("languageChanged", (lng) => {
  localStorage.setItem("language", lng);
});

export default i18n;
