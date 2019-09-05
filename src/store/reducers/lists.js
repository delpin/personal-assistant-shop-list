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

export const reducersMaps = {
    [LISTS_ACTIONS.ADD_LIST_ITEM]: (state = initialState, { payload = '' }) => {
        return {
            ...state,
            [payload || uuid()]: {
                name: '',
                items: {},
                creationTime: getUnixTime(new Date()),
            },
        };
    },
    [LISTS_ACTIONS.ADD_ITEM_TO_LIST]: (state = initialState, { payload = {} }) => {
        return {
            ...state,
            [payload.id]: {
                ...state[payload.id],
                items: {
                    ...state[payload.id].items,
                    [payload.itemId]: {
                        count: 0,
                        unit: null,
                        description: '',
                        isBuyed: false,
                    }
                }
            },
        };
    },
    [LISTS_ACTIONS.DELETE_ITEM_FROM_LIST]: (state = initialState, { payload = {} }) => {
        const items = { ...(state[payload.id] && state[payload.id].items || {}) };
        delete items[payload.itemId];
        return {
            ...state,
            [payload.id]: {
                ...state[payload.id],
                items
            },
        };
    },
    [LISTS_ACTIONS.CHANGE_INFO_FROM_ITEM_FROM_LIST]: (state = initialState, { payload = {} }) => {
        return {
            ...state,
            [payload.id]: {
                ...state[payload.id],
                items: {
                    ...state[payload.id].items,
                    [payload.itemId]: {
                        ...state[payload.id].items[payload.itemId],
                        ...payload.data,
                    }
                }
            },
        };
    },
    [LISTS_ACTIONS.DELETE_LIST_ITEM]: (state = initialState, { payload = '' }) => {
        if (payload) {
            const list = {...state};
            delete list[payload || ''];
            return list;
        }
        return state;
    },
    [LISTS_ACTIONS.CHANGE_LIST_NAME]: (state = initialState, { payload = {} }) => {
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

const listsReducers = handleActions(reducersMaps, initialState);

export default listsReducers;
