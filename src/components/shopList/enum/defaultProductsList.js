import uuid from 'uuid/v1';
import UNITS from "components/shopList/enum/units";

const DEFAULT_PRODUCT_LIST = {
    [uuid()]: {
        name: 'Картошка',
        unit: UNITS.GRAMS_UN
    },
    [uuid()]: {
        name: 'Молоко',
        unit: UNITS.LITRES_UN
    },
    [uuid()]: {
        name: 'Шоколад',
        unit: UNITS.PIECES_UN
    },
};

export default DEFAULT_PRODUCT_LIST;
