import React from 'react'
import Home from "../home/home";

import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

const LayoutMain = function () {

//--- useState ----------------------

//--- function ----------------------

//--- useEffect ----------------------

//--- operate ----------------------

    return (<div>
        LayoutMain
        <Router>
            <Switch>
                <Route path="/home"><Home/></Route>
            </Switch>
        </Router>
    </div>)
};

export default LayoutMain
