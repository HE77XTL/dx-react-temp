import React from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import ConfigProvider from 'caihrc/lib/config-provider';
import {connect} from "react-redux";

import AppLayout from '../views/appLayout/appLayout'

const mapStateToProps = state => {
    return {
        languageType: state.languageType,
    }
};

const AppRouter = function ({languageType, dispatch}) {
    return (
        <ConfigProvider locale={languageType.antDesign}>
            <Router>
                <Switch>
                    <Route path="/"><AppLayout/></Route>
                </Switch>
            </Router>
        </ConfigProvider>
    )
};

export default connect(mapStateToProps)(AppRouter)
