import React, {useEffect} from 'react';
import {addListItem, changeInfoFromItemFromList, deleteItemFromList} from "store/actions/lists";
import {connect} from "react-redux";
import ProductItem from "components/productItem";
import ProductItemInfo from "components/productItem/info";

const ShopListContainer = (props) => {
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
        <ul>
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
                        <li key={productId}>
                            <div onClick={() => deleteItemFromList && deleteItemFromList(productId)}>Удалить</div>
                            <div>Товар куплен: {isBuyed ? 'Да' : 'Нет'}</div>
                            {!isBuyed &&
                            <div onClick={() => addInfoToProduct(productId, 'isBuyed', !isBuyed)}>Купить</div>}
                            <ProductItem name={productInfo.name}/>
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
