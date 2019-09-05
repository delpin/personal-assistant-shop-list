import { createAction } from 'redux-actions';

export const PRODUCTS_ACTIONS = {
    ADD_PRODUCT_ITEM: 'ADD_PRODUCT_ITEM',
    CHANGE_PRODUCT_NAME: 'CHANGE_PRODUCT_NAME',
    DELETE_PRODUCT_ITEM: 'DELETE_PRODUCT_ITEM',
};

export const addProductItem = createAction(PRODUCTS_ACTIONS.ADD_PRODUCT_ITEM);
export const changeProductName = createAction(PRODUCTS_ACTIONS.CHANGE_PRODUCT_NAME);
export const deleteProductItem = createAction(PRODUCTS_ACTIONS.DELETE_PRODUCT_ITEM);
