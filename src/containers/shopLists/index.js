import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import './translation';
import ShopListItem from "components/shopLists/item";
import {addListItem, changeListName, deleteListItem} from "store/actions/lists";
import { useTranslation } from 'react-i18next';

const ShopListsContainer = ({lists, addListItem, changeListName, deleteListItem}) => {
    const { t } = useTranslation('shopLists');
    const createList = () => {
        addListItem && addListItem();
    };

    const saveListName = (id = '', name = '') => {
        if (id && name) {
            changeListName && changeListName({id, name});
        }
    };

    const deleteList = (id = '') => {
        deleteListItem && deleteListItem(id)
    };

    return (<>
        <button onClick={createList}>
            {t('add')}
        </button>

        <h1>{t('list')}:</h1>
        <ul>
            {Object.entries(lists).map(([id, object]) => (
                <li key={id}>
                    <ShopListItem id={id} {...object} saveName={(name) => saveListName(id, name)}/>
                    <div onClick={() => { deleteList(id); }}>{t('delete')}</div>
                </li>
            ))}
        </ul>
    </>)
};

const mapStateToProps = state => ({
    lists: state && state.lists,
});

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({
        addListItem,
        changeListName,
        deleteListItem,
    }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopListsContainer);
