import React, {useState} from 'react'
import LanguageChange from '../../components/languageChange/languageChange'
import css from './layoutHeader.module.less'
import logo from '../../assets/image/headerLogo.png'
import {
    SearchOutlined, CaretDownOutlined, CaretUpOutlined
} from '@ant-design/icons';

import {Input} from 'caihrc'

//<div className={css.menuTabsItem}>政策资讯</div>
//                 <div className={css.menuTabsItem}>技术供需</div>
//                 <div className={css.menuTabsItem}>创新服务</div>
//                 <div className={css.menuTabsItem}>技术交易协作网络</div>


const LayoutHeader = function () {
    const menuOption = [
        {
            key: 'policy',
            name: '政策资讯',
            children: []
        },
        {
            key: 'techTrade',
            name: '技术供需',
            children: [
                {
                    key: 'techTrade-1',
                    name: '技术供需-1',
                },
                {
                    key: 'techTrade-2',
                    name: '技术供需-2',
                }
            ]
        },
        {
            key: 'innovateService',
            name: '创新服务',
            children: [
                {
                    key: 'innovateService-1',
                    name: '创新服务-1',
                },
                {
                    key: 'innovateService-2',
                    name: '创新服务-2',
                }
            ]
        },
        {
            key: 'cooperateSystem',
            name: '技术交易协作网络',
            children: []
        }
    ]


//--- useState ----------------------
    const [activeMenu, setActiveMenu] = useState('policy')


//--- function ----------------------
    function onMenuClick(menu) {
        console.log(menu)
        setActiveMenu(menu.key)
    }

    function isActiveMenuFmt(key) {
        return activeMenu === key ? css.active : ''
    }


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
                {menuOption.map(menuItem => {
                    return <div className={css.menuTabsItemWrap}>
                        <div className={`${css.menuTabsItem} ${isActiveMenuFmt(menuItem.key)}`}>
                            <div key={menuItem.key} onClick={() => {
                                onMenuClick(menuItem)
                            }} className={css.menuText}>
                                {menuItem.name}
                            </div>
                            {menuItem.children && menuItem.children.length > 0 ?
                                (
                                    <React.Fragment>
                                        <div className={css.menuIcon}>
                                            <CaretDownOutlined/>
                                        </div>
                                        <div className={css.menuChildWrap}>
                                            二级子菜单
                                        </div>
                                    </React.Fragment>
                                ) : null
                            }
                        </div>
                    </div>
                })}
            </div>
            <div className={css.searchInput}>
                <Input type="text" size="small" suffix={<SearchOutlined/>} allowClear={false} placeholder="请输入关键字"/>
            </div>
        </div>
    </div>)
}

export default LayoutHeader
