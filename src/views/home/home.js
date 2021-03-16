import React from 'react'
import {useTranslation} from "react-i18next";


const Home = function () {
    const {t} = useTranslation()
//--- useState ----------------------

//--- function ----------------------

//--- useEffect ----------------------

//--- operate ----------------------

    return (<div>
        Home
        <div>
            {t('hello')}
        </div>
    </div>)
}

export default Home
