import React from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Demo01 from '../views/example/demo-01'
import Demo02 from '../views/example/demo-02'

const AppRouter = function () {
    return <Router>
        <Switch>
            <Route path="/demo01"><Demo01/></Route>
            <Route path="/"><Demo02/></Route>
        </Switch>
    </Router>
};

export default AppRouter
