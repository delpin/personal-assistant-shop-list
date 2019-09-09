import React from 'react';
import {addItemToList} from "store/actions/lists";
import {connect} from "react-redux";
import ProductItem from "components/productItem";

const ProductListContainer = ({ products = [], addItemToList = () => {}}) => {
    return (
        <ul>
            {
                Array.isArray(products) && products.map(({id: productId = '', name: productName = ''}) => (
                        <li key={productId}
                            onClick={() => {
                                addItemToList && addItemToList(productId);
                            }}>
                            <ProductItem name={productName}/>
                        </li>
                    ))
            }
        </ul>
    );
};

const mapStateToProps = (state) => {
    return {
        products: state && state.products && Object
            .entries(state.products)
            .map(([id, {name}]) => {
                return {
                    id,
                    name
                }
            }),
    }
};

const mapDispatchToProps = (dispatch, {listId = ''}) => {
    return {
        addItemToList: (productId) => dispatch(addItemToList({listId, productId})),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);
