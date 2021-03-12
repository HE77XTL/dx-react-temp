import React from 'react'
import {Button} from 'caihrc';
import {useTranslation} from "react-i18next";
import {connect} from 'react-redux'
import {
    Link
} from "react-router-dom";

import {changeLanguage} from '../../actions/index'

const mapStateToProps = state => {
    return {
        languageType: state.languageType,
    }
};


const Demo01 = function ({languageType, dispatch}) {
    const {t} = useTranslation();

//--- useState ----------------------

//--- function ----------------------
    function onLanguageChange(type) {
        dispatch(changeLanguage(type))
    }


//--- useEffect ----------------------

//--- operate ----------------------

    return (<div>
        <h2>Demo01</h2>

        <h1>{t('hello')}</h1>

        <Button type="primary" onClick={() => {
            onLanguageChange('en_GB')
        }}>英语</Button>
        <Button onClick={() => {
            onLanguageChange('zh_CN')
        }}>中文</Button>

        <div>
            <Link to="/">demo02</Link>
        </div>
    </div>)
}

export default connect(mapStateToProps)(Demo01)
