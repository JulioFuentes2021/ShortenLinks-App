import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from '../App'
import Error from '../../components/Error';

const index = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/ShortenLinks-App" component={Index} />
                <Route component={Error} />
            </Switch>
        </Router>
    );
}

export default index;