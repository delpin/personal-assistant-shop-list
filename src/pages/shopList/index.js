import React from 'react';
import './translation';
import { useTranslation } from 'react-i18next';
import {Link} from "react-router-dom";

import AddProduct from "containers/addProduct";
import ChangeLanguage from 'components/changeLanguage';
import ProductList from "containers/productList";
import ShopListContainer from "containers/shopList";

const ShopListPage = ({match}) => {

    const listId = match && match.params && match.params.id || '';
    const { t } = useTranslation('shopList');



    return (<div>
        <Link to={`/`}>Назад</Link>
        <ChangeLanguage />
        <h1>
            {t('currentList')}:
        </h1>
        <ShopListContainer listId={listId}/>
        <h1>
            {t('productSet')}:
        </h1>
        <ProductList listId={listId}/>
        <h2>
            {t('addProduct')}:
        </h2>
        <AddProduct/>
    </div>);
};

export default ShopListPage;
