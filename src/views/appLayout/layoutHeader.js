import React from 'react'
import LanguageChange from '../../components/languageChange/languageChange'
import css from './layoutHeader.module.less'
import logo from '../../assets/image/headerLogo.png'
import {
    SearchOutlined
} from '@ant-design/icons';

import {Input} from 'caihrc'


const LayoutHeader = function () {

//--- useState ----------------------

//--- function ----------------------

//--- useEffect ----------------------

//--- operate ----------------------

    return (<div className={css.layoutHeader}>
        <div className={css.headerBar}>
            <LanguageChange/>
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
            <div className={css.searchInput}>
                <Input type="text" size="small" suffix={<SearchOutlined/>} allowClear={false} placeholder="请输入关键字" />
            </div>
        </div>
    </div>)
}

export default LayoutHeader
