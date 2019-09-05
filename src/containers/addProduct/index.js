import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {addProductItem} from "store/actions/products";

const AddProduct = ({units, addProductItem}) => {
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
                    <span>Название:</span>
                    <input name='name' required/>
                </label>
            </div>
            <div>
                <label>
                    <span>Единицы измерения:</span>
                    <select name='unit'>
                        <option value={''}>
                            Неважно
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
                Создать
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
