import React from 'react'
import { Button } from 'caihrc';
import {useTranslation} from "react-i18next";

import {
    Link
} from "react-router-dom";

const Demo01 = function () {
    const {t} = useTranslation();

//--- useState ----------------------

//--- function ----------------------

//--- useEffect ----------------------

//--- operate ----------------------

    return (<div>
        <h2>Demo01</h2>

        <h1>{t('hello')}</h1>

        <Button type="primary">Click me</Button>
        <div>
            <Link to="/">demo02</Link>
        </div>
    </div>)
}

export default Demo01
