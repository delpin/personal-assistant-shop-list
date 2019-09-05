import rootReducer from './reducers/root';
import {createStore} from 'redux';

const appStore = createStore(rootReducer);

export default appStore;
