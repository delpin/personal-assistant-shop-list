import React from 'react';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';

import AppRouter from "components/router";
import appStore from "store/configureStore";



const App = () => {
  return (
      <Provider store={appStore}>
          <AppRouter/>
      </Provider>
  );
};



export default App;
