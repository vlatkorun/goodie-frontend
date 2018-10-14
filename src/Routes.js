import React from 'react';
import { Route, Switch } from 'react-router';

import Home from './containers/Home';

import Listing from './containers/orders/Listing';
import Create from './containers/orders/Create';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/orders" component={ Listing } />
        <Route exact path="/orders/create" component={ Create } />
    </Switch>  
);

export default Routes;