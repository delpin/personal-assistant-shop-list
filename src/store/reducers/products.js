import { handleActions} from 'redux-actions';
import uuid from "uuid/v1";
import {PRODUCTS_ACTIONS} from "store/actions/products";

export const initialState = {
    [uuid()]: {
        name: 'Картошка',
        unit: 'GRAMS_UN'
    },
    [uuid()]: {
        name: 'Молоко',
        unit: 'LITRES_UN',
    },
    [uuid()]: {
        name: 'Шоколад',
        unit: 'PIECES_UN',
    },
};

export const reducersMaps = {
    [PRODUCTS_ACTIONS.ADD_PRODUCT_ITEM]: (state = initialState, { payload = {} }) => ({
    ...state,
    ...payload && {[uuid()]: payload}
    }),
    [PRODUCTS_ACTIONS.DELETE_PRODUCT_ITEM]: (state = initialState, { payload = '' }) => {
        if (payload) {
            const list = {...state};
            delete list[payload || ''];
            return list;
        }
        return state;
    },
    [PRODUCTS_ACTIONS.CHANGE_PRODUCT_NAME]: (state = initialState, { payload = {} }) => {
        if (payload.id && state[payload.id] && payload.name) {
            return {
                ...state,
                [payload.id]: {
                    ...state[payload.id],
                    name: payload.name,
                }
            };
        }
        return state;
    }
};

const productReducer = handleActions(reducersMaps, initialState);

export default productReducer;
