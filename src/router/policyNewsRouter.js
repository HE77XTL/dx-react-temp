import React from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


import AseanPolicy from '../views/aseanPolicy/aseanPolicy'


const HomeRouter = function () {
    return (
        <Router>
            <Switch>
                <Route path="/aseanPolicy"><AseanPolicy/></Route>
            </Switch>
        </Router>
    );
};

export default HomeRouter


