import React from 'react';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import 'reset-css';
import "./i18n";
import 'tachyons';

import AppRouter from "router";
import appStore from "store/configureStore";
import AppCssWrapper from "components/appCssWrapper";



const App = () => {
  return (
    <Provider store={appStore}>
        <AppCssWrapper>
            <AppRouter/>
        </AppCssWrapper>
    </Provider>
  );
};



export default App;
