import React, {useEffect} from 'react';
import ProductItem from "components/productItem";
import ProductItemInfo from "components/productItem/info";
import AddProduct from "containers/addProduct";
import {connect} from "react-redux";
import {addItemToList, changeInfoFromItemFromList, deleteItemFromList, addListItem} from "store/actions/lists";
import {Link} from "react-router-dom";

const ShopListContainer = ({currentList,
                               products,
                               units,
                               deleteItemFromList,
                               addItemToList,
                               addListItem,
                               changeInfoFromItemFromList}) => {


    useEffect(() => {
        if(!currentList) {
            addListItem();
        }
    }, [currentList]);

    const addInfoToProduct = (name, id, value) => {

        changeInfoFromItemFromList && changeInfoFromItemFromList(
            id,
            {
                [name]: value,
            }
        )
    };

    const addToList = (id) => {
        if (currentList.items[id]) return;
        addItemToList && addItemToList(id)
    };

    const deleteItem = (id) => {
        deleteItemFromList && deleteItemFromList(id);
    };

    return (<div>
        <Link to={`/`}>Назад</Link>
        <h1>
            Текущий список:
        </h1>
        <ul>
            {
                currentList && currentList.items && Object.entries(currentList.items)
                    .filter(([id]) => products[id] && products[id].name)
                    .map(([id, {description, count, unit, isBuyed}]) => (
                        <li key={id}>
                            {console.log(description, count, unit, isBuyed)}
                            <div onClick={() => deleteItem(id)}>Удалить</div>
                            <div>Товар куплен: {isBuyed ? 'Да' : 'Нет'}</div>
                            {!isBuyed &&  <div onClick={() => addInfoToProduct('isBuyed', id, !isBuyed)}>Купить</div>}
                            <ProductItem name={products[id].name}/>
                            <ProductItemInfo description={description}
                                             count={count}
                                             units={units}
                                             product={products[id]}
                                             addInfoToProduct={(name, e) => addInfoToProduct(name, id, e && e.target && e.target.value)}
                                             unit={unit}/>
                        </li>
                    ))
            }
        </ul>
        <h1>
            Набор продуктов:
        </h1>
        <ul>
            {Object.entries(products).map(([id, {name}]) => (
                <li onClick={() => {
                    addToList(id);
                }} key={id}>
                    <ProductItem name={name}/>
                </li>
            ))}
        </ul>

        <h2>
            Добавить продукт
        </h2>
        <AddProduct/>
    </div>);
};

const mapStateToProps = (state, {match}) => {
    const id = match && match.params && match.params.id || '';
    const currentList = id && state && state.lists && state.lists[id];
    return {
        currentList,
        products: state.products,
        units: state.units,
    }
};

const mapDispatchToProps = (dispatch, {match}) => {
    const id = match && match.params && match.params.id || '';

    return {
        deleteItemFromList: (itemId) => dispatch(deleteItemFromList({id, itemId})),
        addItemToList: (itemId) => dispatch(addItemToList({id, itemId})),
        changeInfoFromItemFromList: (itemId, data) => dispatch(changeInfoFromItemFromList({id, itemId, data})),
        addListItem: () => dispatch(addListItem(id)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopListContainer);
