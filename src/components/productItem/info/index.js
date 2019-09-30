import React from 'react';
import { useTranslation } from 'react-i18next';

import './translation';

const ProductItemInfo = ({count, unit, units, description, product, addInfoToProduct}) => {
    const { t } = useTranslation('ProductItemInfo');
    return (
        <div className='pa2'>
            <label className='db mt2'>
                <span>{t('number')}:</span>
                <input
                    className='pa2 w-100 border-box mt1'
                    defaultValue={count || ''}
                    onChange={(e) => addInfoToProduct('count', e)}/>
            </label>
            {
                product.unit &&
                <label className='db mt2'>
                    <span>{t('points')}:</span>
                    <select
                        className='pa2 w-100 border-box mt1'
                        defaultValue={unit}
                        onChange={(e) => addInfoToProduct('unit', e)}>
                        {Object.entries(units[product.unit]).map(([key, {name, value}]) => (
                            <option value={value} key={key}>
                                {name}
                            </option>
                        ))}
                    </select>
                </label>

            }
            <label className='db mt2'>
                <span>{t('desc')}:</span>
                <input
                    className='pa2 w-100 border-box mt1'
                    defaultValue={description || ''}
                    onChange={(e) => addInfoToProduct('description', e)}/>
            </label>
        </div>
    );
};

export default ProductItemInfo;
