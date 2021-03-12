import i18next from "i18next";
import languageUtils from '../utils/languageUtils'
import store from "store";
import {Message} from 'caihrc'

function updateObject(oldObject, newValues) {
    // 用空对象作为第一个参数传递给 Object.assign，以确保是复制数据，而不是去改变原来的数据
    return Object.assign({}, oldObject, newValues);
}

const initLanguageType = store.get('languageType') || 'zh_CN';

const languageType = (state = {
    i18next: initLanguageType,
    antDesign:  languageUtils.getAntLanguage(initLanguageType)
}, action) => {
    switch (action.type) {
        case 'TOGGLE_LANGUAGE':
            i18next.changeLanguage(action.languageType).catch(() => {
                Message.error("change language fail")
            });
            store.set("languageType", action.languageType);

            return updateObject(state, {
                i18next: action.languageType,
                antDesign: languageUtils.getAntLanguage(action.languageType)
            });
        default:
            return state
    }
};

export default languageType
