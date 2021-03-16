import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import store from "store";

import zh_CN from './locales/zh_CN'
import en_GB from './locales/en_GB'

const languageType = store.get('languageType') || 'zh_CN';
//const languageType = 'en_GB';


const resources = {
    en_GB: {
        translation: en_GB
    },
    zh_CN: {
        translation: zh_CN
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: languageType,

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
