import React from 'react'
import css from './layoutHeader.module.less'
import logo from '../../assets/image/headerLogo.png'

import {Input} from 'caihrc'

const LayoutHeader = function () {

//--- useState ----------------------

//--- function ----------------------

//--- useEffect ----------------------

//--- operate ----------------------

    return (<div className={css.layoutHeader}>
        <div className={css.headerBar}>
            <div>中文 | 英文</div>
            <div>登陆</div>
        </div>
        <div className={css.headerMenu}>
            <img src={logo} className={css.headerLogo} alt="logo"/>
            <div className={css.menuTabs}>
                <div>政策资讯</div>
                <div>技术供需</div>
                <div>创新服务</div>
                <div>技术交易协作网络</div>
            </div>
            <div>
                <Input type="text"/>
            </div>
        </div>
    </div>)
}

export default LayoutHeader
