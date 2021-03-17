import React, {useState} from 'react'
import LanguageChange from '../../components/languageChange/languageChange'
import css from './layoutHeader.module.less'
import logo from '../../assets/image/headerLogo.png'
import {
    SearchOutlined, CaretDownOutlined, CaretUpOutlined
} from '@ant-design/icons';
import {useHistory} from 'react-router-dom'

import {Input} from 'caihrc'
import menuData from './menuData'


const LayoutHeader = function () {
    const history = useHistory();
    const currentUrl = history.location.pathname;
    const menuOption = [
        {
            key: 'policyNews',
            name: '政策资讯',
            url: '/policyNews',
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
            url: '/cooperateSystem',
            children: []
        }
    ];

//--- useState ----------------------
    const [activeMenu, setActiveMenu] = useState(getCurrentUrlMatchMenu(currentUrl, menuData));

//--- useEffect ----------------------

//--- operate ----------------------

//--- function ----------------------
    function onMenuClick(menu) {
        setActiveMenu(menu.key);
        if (menu.url) {
            history.push(menu.url)
        }
    }

    function isActiveMenuFmt(key) {
        return activeMenu === key ? css.active : ''
    }

    // 当前菜单匹配路由激活
    function getCurrentUrlMatchMenu(findStr, data) {
        let result = '';
        for (let key in data) {
            const item = data[key];
            if (item.includes(findStr)) {
                result = key;
                break
            }
        }
        return result
    }


    return (<div className={css.layoutHeader}>
        <div className={css.headerBar}>
            <LanguageChange/>
            <div>登陆</div>
        </div>
        <div className={css.headerMenu}>
            <img src={logo} className={css.headerLogo} alt="logo"/>
            <div className={css.menuTabs}>
                {menuOption.map(menuItem => {
                    return <div key={menuItem.key} className={css.menuTabsItemWrap}>
                        <div className={`${css.menuTabsItem} ${isActiveMenuFmt(menuItem.key)}`}>
                            <div onClick={() => {
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
