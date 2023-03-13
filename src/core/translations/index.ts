import i18next from "i18next";
import {initReactI18next} from "react-i18next";
import {extractObjectPath} from "./utils";
import {en} from "./resources/en";
import {es} from "./resources/es";

const DEFAULT_LANGUAGE= 'en';

i18next.use(initReactI18next).init({
    resources: {
        en: {
            translation: en
        },
        es: {
            translation: es
        }
    },
    lng: DEFAULT_LANGUAGE,
    fallbackLng: DEFAULT_LANGUAGE,
    keySeparator: '.',
    interpolation: {
        escapeValue: false
    }
});

export default i18next;
export const tkeys = extractObjectPath({...es});