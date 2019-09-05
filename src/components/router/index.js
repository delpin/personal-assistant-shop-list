import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import ShopList from "containers/shopList";
import shopLists from "containers/shopLists";

function AppRouter() {
    return (
        <Router>
            <Route path="/" exact component={shopLists} />
            <Route path={'/:id'} component={ShopList} />
        </Router>
    );
}

export default AppRouter;
