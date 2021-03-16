import React from 'react'

import LayoutHeader from './layoutHeader'
import LayoutMain from './layoutMain'
import LayoutFooter from './layoutFooter'

import css from './appLayout.module.less'

const AppLayout = function () {

//--- useState ----------------------

//--- function ----------------------

//--- useEffect ----------------------

//--- operate ----------------------

    return (<div className={css.appLayout}>
        <LayoutHeader/>
        <LayoutMain/>
        <LayoutFooter/>
    </div>)
};

export default AppLayout
