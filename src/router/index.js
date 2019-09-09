import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import ShopList from "pages/shopList";
import ShopLists from "pages/shopLists";

function AppRouter() {
    return (
        <Router>
            <Route path="/" exact component={ShopLists} />
            <Route path={'/:id'} component={ShopList} />
        </Router>
    );
}

export default AppRouter;
