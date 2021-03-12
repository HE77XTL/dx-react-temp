import AntZhCN from 'caihrc/lib/locale/zh_CN';
import AntEnGB from 'caihrc/lib/locale/en_GB';

const languageUtils = {
    updateObject(oldObject, newValues) {
        // 用空对象作为第一个参数传递给 Object.assign，以确保是复制数据，而不是去改变原来的数据
        return Object.assign({}, oldObject, newValues);
    },
    getAntLanguage(type) {
        switch (type) {
            case 'zh_CN':
                return AntZhCN;
            case 'en_GB':
                return AntEnGB;
            default:
                return AntZhCN;
        }
    }

};
export default languageUtils
