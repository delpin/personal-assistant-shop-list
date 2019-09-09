import { handleActions} from 'redux-actions';
import {LISTS_ACTIONS} from "store/actions/lists";
import uuid from "uuid/v1";
import {getUnixTime} from "date-fns";

/**
 name: '',
 items: {},
 ---
 count: 0,
 unit: null,
 description: '',
 isBuyed: false,
 ---
 creationTime: getUnixTime(new Date()),

 */
export const initialState = {};

const productItemBlank = () => ({
    count: 0,
    unit: null,
    description: '',
    isBuyed: false,
});

const listItemBlank = () => ({
    name: '',
    items: {},
    creationTime: getUnixTime(new Date()),
});

export const reducersMaps = {
    [LISTS_ACTIONS.ADD_LIST_ITEM]: (state = initialState, { payload: id = '' }) => {
        return {
            ...state,
            [id || uuid()]: listItemBlank(),
        };
    },
    [LISTS_ACTIONS.ADD_ITEM_TO_LIST]: (state = initialState, { payload = {} }) => {
        const {listId = '', productId = ''} = payload;

        if(state && state[listId] && state[listId].items && state[listId].items[productId]) {
            return state;
        }

        return {
            ...state,
            [listId]: {
                ...state[listId],
                items: {
                    ...state[listId].items,
                    [productId]: productItemBlank(),
                }
            },
        };
    },
    [LISTS_ACTIONS.DELETE_ITEM_FROM_LIST]: (state = initialState, { payload = {} }) => {
        const {listId = '', productId = ''} = payload;
        const items = { ...(state[listId] && state[listId].items || {}) };
        delete items[productId];
        return {
            ...state,
            [listId]: {
                ...state[listId],
                items
            },
        };
    },
    [LISTS_ACTIONS.CHANGE_INFO_FROM_ITEM_FROM_LIST]: (state = initialState, { payload = {} }) => {
        const {listId = '', productId = '', data = {}} = payload;
        return {
            ...state,
            [listId]: {
                ...state[listId],
                items: {
                    ...state[listId].items,
                    [productId]: {
                        ...state[listId].items[productId],
                        ...data,
                    }
                }
            },
        };
    },
    [LISTS_ACTIONS.DELETE_LIST_ITEM]: (state = initialState, { payload: id = '' }) => {
        if (id) {
            const list = {...state};
            delete list[id];
            return list;
        }
        return state;
    },
    [LISTS_ACTIONS.CHANGE_LIST_NAME]: (state = initialState, { payload = {} }) => {
        const {id = '', name = ''} = payload;
        if (state && state[id] && name) {
            return {
                ...state,
                [id]: {
                    ...state[id],
                    name,
                }
            };
        }
        return state;
    }
};

const listsReducers = handleActions(reducersMaps, initialState);

export default listsReducers;
