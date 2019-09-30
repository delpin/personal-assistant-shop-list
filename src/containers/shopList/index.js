import React, {useEffect} from 'react';
import {addListItem, changeInfoFromItemFromList, deleteItemFromList} from "store/actions/lists";
import {connect} from "react-redux";
import ProductItem from "components/productItem";
import ProductItemInfo from "components/productItem/info";
import { useTranslation } from 'react-i18next';

import './translation';

const ShopListContainer = (props) => {
    const { t } = useTranslation('ShopListContainer');
    const {
        isCurrentListCreated = false,
        list = [],
        units = {},
        addListItem = () => {},
        deleteItemFromList = () => {},
        changeInfoFromItemFromList = () => {},
    } = props;

    useEffect(() => {
        if (!isCurrentListCreated) {
            addListItem && addListItem();
        }
    }, [isCurrentListCreated]);

    const addInfoToProduct = (productId, key, value) => {
        changeInfoFromItemFromList && changeInfoFromItemFromList(
            productId,
            {
                [key]: value,
            }
        )
    };

    return (
        <ul className='flex flex-wrap'>
            {
                list.map(item => {
                    const {
                        itemDescription,
                        itemCount,
                        itemUnit,
                        isBuyed,
                        productId,
                        productInfo,
                    } = item;
                    return (
                        <li className='pa2' key={productId}>
                            <div className='pa1'>
                                <div className='flex'>
                                    <div className='red f6 pointer pa1' onClick={() => deleteItemFromList && deleteItemFromList(productId)}>{t('delete')}</div>
                                    {!isBuyed &&
                                    <div className='green f6 pointer pa1' onClick={() => addInfoToProduct(productId, 'isBuyed', !isBuyed)}>{t('buy')}</div>
                                    }
                                </div>
                                <div className='f6 pa1'>{t('isBuyed')}: {isBuyed ? t('yes') : t('no')}</div>
                            </div>
                            <div className='flex justify-center'>
                                <ProductItem name={productInfo.name}/>
                            </div>
                            <ProductItemInfo description={itemDescription}
                                             count={itemCount}
                                             units={units}
                                             product={productInfo}
                                             unit={itemUnit}
                                             addInfoToProduct={(key, e) => addInfoToProduct(productId, key, e && e.target && e.target.value)}
                            />
                        </li>
                    )
                })
            }
        </ul>
    )
};

const mapStateToProps = (state, {listId = ''}) => {
    const currentList = state && state.lists && state.lists[listId];

    if (!currentList) {
        return {
            isCurrentListCreated: false,
            list: [],
        }
    }

    const {items = {}} = currentList;
    const products = state && state.products || {};
    const units = state && state.units || {};
    const list = Object.entries(items)
        .filter(([productId = '']) => products[productId] && products[productId].name)
        .map(([productId, itemInfo]) => {
            const {description: itemDescription, count: itemCount, unit: itemUnit, isBuyed} = itemInfo;
            return {
                itemDescription,
                itemCount,
                itemUnit,
                isBuyed,
                productId,
                productInfo: products[productId]
            };
        });

    return {
        isCurrentListCreated: true,
        list,
        units,
    }
};

const mapDispatchToProps = (dispatch, {listId = ''}) => {
    return {
        deleteItemFromList: (productId) => dispatch(deleteItemFromList({listId, productId})),
        changeInfoFromItemFromList: (productId, data) => dispatch(changeInfoFromItemFromList({
            listId,
            productId,
            data
        })),
        addListItem: () => dispatch(addListItem(listId)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopListContainer);
