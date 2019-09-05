import { createAction } from 'redux-actions';

export const LISTS_ACTIONS = {
    ADD_LIST_ITEM: 'ADD_LIST_ITEM',
    ADD_ITEM_TO_LIST: 'ADD_ITEM_TO_LIST',
    DELETE_ITEM_FROM_LIST: 'DELETE_ITEM_FROM_LIST',
    CHANGE_INFO_FROM_ITEM_FROM_LIST: 'CHANGE_INFO_FROM_ITEM_FROM_LIST',
    CHANGE_LIST_NAME: 'CHANGE_LIST_NAME',
    DELETE_LIST_ITEM: 'DELETE_LIST_ITEM',
};

export const addListItem = createAction(LISTS_ACTIONS.ADD_LIST_ITEM);
export const changeListName = createAction(LISTS_ACTIONS.CHANGE_LIST_NAME);
export const deleteListItem = createAction(LISTS_ACTIONS.DELETE_LIST_ITEM);
export const addItemToList = createAction(LISTS_ACTIONS.ADD_ITEM_TO_LIST);
export const deleteItemFromList = createAction(LISTS_ACTIONS.DELETE_ITEM_FROM_LIST);
export const changeInfoFromItemFromList = createAction(LISTS_ACTIONS.CHANGE_INFO_FROM_ITEM_FROM_LIST);
