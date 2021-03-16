import React from 'react'
import {connect} from 'react-redux'
import css from './languageChange.module.less'
import {changeLanguage} from '../../actions/index'

const mapStateToProps = state => {
    return {
        languageType: state.languageType,
    }
};

const LanguageChange = function ({dispatch, languageType}) {

    console.log('dispatch, languageType')
    console.log(dispatch, languageType)


//--- useState ----------------------

//--- function ----------------------
    function onLanguageClick(type) {
        console.log(111)
        console.log(type)
        dispatch(changeLanguage(type))
    }

    function activeStyleFmt(type) {
        return type === languageType.i18next ? css.active : null
    }

//--- useEffect ----------------------

//--- operate ----------------------

    return (<div className={css.languageChange}>
        <div onClick={() => {
            onLanguageClick('zh_CN')
        }} className={`${css.languageItem} ${activeStyleFmt('zh_CN')}`}>中文
        </div>
        <div className={css.separateLine}>|</div>
        <div onClick={() => {
            onLanguageClick('en_GB')
        }} className={`${css.languageItem} ${activeStyleFmt('en_GB')}`}>英文
        </div>
    </div>)
}

export default connect(mapStateToProps)(LanguageChange)
