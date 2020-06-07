import * as React from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import { Router, Route, Switch } from 'react-router-dom';
import NavBar from "./Shared/NavBar";

const history = createBrowserHistory();

const Routes: React.StatelessComponent<{}> = () => (
    <Router history={history}>
        <Switch>
            <Route exact path='/signup' component={NavBar} />
        </Switch>
    </Router>
);

export default Routes;