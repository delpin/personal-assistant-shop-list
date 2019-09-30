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
        <form onSubmit={addProduct} className='pa2'>
            <div className='mb2'>
                <label className='f5'>
                    <span>{t('title')}: </span>
                    <input className='pa2 w-100 border-box mt1' name='name' required/>
                </label>
            </div>
            <div className='mb2'>
                <label>
                    <span className='f5'>{t('units')}: </span>
                    <select className='pa2 w-100 border-box mt1' name='unit'>
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
            <button className='ba bw1 br1 pointer b--gray pa2 hover-bg-light-silver mt3' type='submit'>
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
