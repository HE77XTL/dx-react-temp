import React from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import AntZhCN from 'caihrc/lib/locale/zh_CN';
import AntEnGB from 'caihrc/lib/locale/en_GB';
import ConfigProvider from 'caihrc/lib/config-provider';

import Demo01 from '../views/example/demo-01'
import Demo02 from '../views/example/demo-02'

const AppRouter = function () {
    return (
        <ConfigProvider locale={AntEnGB}>
            <Router>
                <Switch>
                    <Route path="/demo01"><Demo01/></Route>
                    <Route path="/"><Demo02/></Route>
                </Switch>
            </Router>
        </ConfigProvider>
    )
};

export default AppRouter
