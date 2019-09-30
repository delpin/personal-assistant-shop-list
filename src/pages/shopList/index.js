import React from 'react';
import './translation';
import { useTranslation } from 'react-i18next';
import {Link} from "react-router-dom";

import AddProduct from "containers/addProduct";
import ProductList from "containers/productList";
import ShopListContainer from "containers/shopList";

const ShopListPage = ({match}) => {

    const listId = match && match.params && match.params.id || '';
    const { t } = useTranslation('shopList');

    return (<>
        <div  className='pa2 mt2'>
            <Link className='no-underline hover-blue' to={`/`}>{t('back')}</Link>
        </div>
        <div className='mt3 pa3'>
            <h1 className='f3 w-100 pa2'>
                {t('currentList')}:
            </h1>
            <ShopListContainer listId={listId}/>
        </div>
        <div className='mt3 pa3'>
            <h2 className='f3 w-100 pa2 border-box'>
                {t('productSet')}:
            </h2>
            <ProductList listId={listId}/>
        </div>
        <div className='mt5 pa3 ba bw1 br1'>
            <h2 className='f3 w-100 pa2 border-box'>
                {t('addProduct')}:
            </h2>
            <AddProduct/>
        </div>
    </>);
};

export default ShopListPage;
