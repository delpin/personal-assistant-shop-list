import React, {useState} from 'react';
import DEFAULT_PRODUCT_LIST from "components/shopList/enum/defaultProductsList";
import UNITS from "components/shopList/enum/units";
import uuid from "uuid/v1";
import ProductItem from "components/productItem";
import ProductItemInfo from "components/productItem/info";
import AddProduct from "containers/addProduct";

const ShopList = () => {
    const [products, editProducts] = useState({...DEFAULT_PRODUCT_LIST});
    const [currentList, editCurrentList] = useState({});

    const addInfoToProduct = (name, id, e) => {
        editCurrentList(
            {
                ...currentList,
                [id]: {
                    ...currentList[id],
                    [name]: e.target.value,
                }
            }
        )
    };

    const addToProduct = (id) => {
        if (currentList[id]) return;
        editCurrentList(
            {
                ...currentList,
                [id]: {}
            }
        )
    };

    const deleteItem = (id) => {
        const list = {...currentList};
        delete list[id];
        editCurrentList(list);
    };

    return (<div>
        <h1>
            Текущий список:
        </h1>
        <ul>
            {
                Object.entries(currentList)
                    .filter(([id]) => products[id] && products[id].name)
                    .map(([id, {description, count, unit}]) => (
                        <li>
                            <div onClick={() => deleteItem(id)}>Удалить</div>
                            <ProductItem name={products[id].name}/>
                            <ProductItemInfo description={description}
                                             count={count}
                                             product={products[id]}
                                             addInfoToProduct={(name, e) => addInfoToProduct(name, id, e)}
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
                    addToProduct(id);
                }} key={id}>
                    <ProductItem name={name} />
                </li>
            ))}
        </ul>

        <h2>
            Добавить продукт
        </h2>
        <AddProduct />
    </div>);
};

export default ShopList;
