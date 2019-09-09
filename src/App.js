import React from 'react';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import i18n from "./i18n";

import AppRouter from "router";
import appStore from "store/configureStore";



const App = () => {
  return (
    <Provider store={appStore}>
        <AppRouter/>
    </Provider>
  );
};



export default App;
