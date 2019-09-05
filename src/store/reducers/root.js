import {combineReducers} from 'redux';
import products from './products';
import lists from './lists';
import units from './units';

export default combineReducers({
    products,
    lists,
    units,
});
