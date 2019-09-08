import React from 'react';
import './translation';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {addProductItem} from "store/actions/products";
import { useTranslation } from 'react-i18next';

const AddProduct = ({units, addProductItem}) => {
    const { t } = useTranslation('addProduct');

    const addProduct = (e) => {
        e.preventDefault();
        const elements = e.target && e.target.elements;
        const name = elements && elements.name && elements.name.value;
        const unit = elements && elements.unit && elements.unit.value || null;
        if (name) {
            addProductItem && addProductItem(
                {
                    name,
                    unit,
                })
        }
        elements.name.value = '';
        elements.unit.value = '';
    };

    return (
        <form onSubmit={addProduct}>
            <div>
                <label>
                    <span>{t('title')}</span>
                    <input name='name' required/>
                </label>
            </div>
            <div>
                <label>
                    <span>{t('units')}</span>
                    <select name='unit'>
                        <option value={''}>
                            {t('neverMind')}
                        </option>
                        {Object.entries(units).map(([key, [{name}]]) => (
                            <option value={key} key={key}>
                                {name}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
            <button type='submit'>
                {t('create')}
            </button>
        </form>
    );
};

const mapStateToProps = state => ({
    units: state && state.units,
});

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({
        addProductItem,
    }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
