import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Index from '../App'
import Error from '../../components/Error';

const index = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Index} />
                <Route component={Error} />
            </Switch>
        </Router>
    );
}

export default index;