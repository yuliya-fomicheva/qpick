import i18next from "i18next";
import { initReactI18next } from "react-i18next";


import translationEnglish from "./Translation/English/translation.json";
import translationRussian from "./Translation/Russian/translation.json";
import translationKazakh from "./Translation/Kazakh/translation.json";


const resources = {
    ru: {
        translation: translationRussian,
    },
    en: {
        translation: translationEnglish,
    },
    kz: {
        translation: translationKazakh,
    },
}

i18next
.use(initReactI18next)
.init({
  resources,
  lng:"ru", //default language
});

export default i18next;