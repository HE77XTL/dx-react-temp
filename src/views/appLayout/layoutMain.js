import React from 'react'
import Home from "../home/home";
import PolicyNews from "../policyNews/policyNews";
import CooperateSystem from "../cooperateSystem/cooperateSystem";

import PolicyNewsRouter from '../../router/policyNewsRouter'

import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

const LayoutMain = function () {

//--- useState ----------------------

//--- function ----------------------

//--- useEffect ----------------------

//--- operate ----------------------

    return (<div>
        <Router>
            <Switch>
                <Redirect from="/" exact to="/policyNews"/>
                <Route path="/home"><Home/></Route>
                <Route path="/policyNews"><PolicyNews/></Route>
                <Route path="/cooperateSystem"><CooperateSystem/></Route>
                <PolicyNewsRouter/>
                <Redirect from="/*" to="/"/>
            </Switch>
        </Router>
    </div>)
};

export default LayoutMain
