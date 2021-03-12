import React from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import ConfigProvider from 'caihrc/lib/config-provider';
import {connect} from "react-redux";

import Demo01 from '../views/example/demo-01'
import Demo02 from '../views/example/demo-02'

const mapStateToProps = state => {
    return {
        languageType: state.languageType,
    }
};

const AppRouter = function ({languageType, dispatch}) {
    console.log('languageType')
    console.log(languageType)
    console.log('dispatch')
    console.log(dispatch)
    return (
        <ConfigProvider locale={languageType.antDesign}>
            <Router>
                <Switch>
                    <Route path="/demo01"><Demo01/></Route>
                    <Route path="/"><Demo02/></Route>
                </Switch>
            </Router>
        </ConfigProvider>
    )
};

export default connect(mapStateToProps)(AppRouter)
