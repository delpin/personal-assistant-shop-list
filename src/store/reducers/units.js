import { handleActions} from 'redux-actions';
import {UNIT_ACTIONS} from "store/actions/units";

export const initialState = {
    GRAMS_UN: [
        {name: 'грамм', value: 1},
        {name: 'килограмм', value: 1000},
    ],
    LITRES_UN: [
        {name: 'милилитр', value: 1},
        {name: 'литр', value: 1000},
    ],
    PIECES_UN: [
        {name: 'штука', value: 1},
        {name: 'десяток', value: 10},
    ],
};

export const reducersMaps = {
    [UNIT_ACTIONS.ADD_UNIT]: (state = initialState, { payload = {} }) => Object.assign(state, payload),
};

const unitReducers = handleActions(reducersMaps, initialState);

export default unitReducers;
