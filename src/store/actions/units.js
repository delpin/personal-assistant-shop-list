import { createAction } from 'redux-actions';

export const UNIT_ACTIONS = {
    ADD_UNIT: 'ADD_UNIT',
};

export const addUnit = createAction(UNIT_ACTIONS.ADD_UNIT);
