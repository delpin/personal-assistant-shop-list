import React from 'react';

const ProductItemInfo = ({count, unit, units, description, product, addInfoToProduct}) => (
    <div>
        <div>
            <label>
                <span>Кол-во:</span>
                <input defaultValue={count || ''} onChange={(e) => addInfoToProduct('count', e)}/>
            </label>
            {
                product.unit &&
                <label>
                    <span>Единицы измерения:</span>
                    <select defaultValue={unit}
                            onChange={(e) => addInfoToProduct('unit', e)}>
                        {Object.entries(units[product.unit]).map(([key, {name, value}]) => (
                            <option value={value} key={key}>
                                {name}
                            </option>
                        ))}
                    </select>
                </label>

            }

        </div>
        <div>
            <label>
                <span>Описание:</span>
                <input defaultValue={description || ''}
                       onChange={(e) => addInfoToProduct('description', e)}/>
            </label>
        </div>
    </div>
);

export default ProductItemInfo;
