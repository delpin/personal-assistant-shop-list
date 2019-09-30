import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import './translation';
import ShopListItem from "components/shopLists/item";
import {addListItem, changeListName, deleteListItem} from "store/actions/lists";
import { useTranslation } from 'react-i18next';
import LanguageSelector from "components/languageSelector";

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

    return (<div className='mw7 center ph3-ns'>
        <div className='cf ph2-ns'>
            <div className="fl w-100 w-50-ns pa2 center">
                <button
                    className='ba bw1 br1 pointer b--gray pa3 hover-bg-light-silver'
                    onClick={createList}>
                    {t('add')}
                </button>
            </div>
            <div className="fl w-100 w-50-ns pa2">
                <LanguageSelector/>
            </div>
        </div>
        <div className='ph2-ns'>
            <h1 className='f3 w-100 pa2'>{t('list')}:</h1>
            <ul className='flex flex-wrap'>
                {Object.entries(lists).map(([id, object]) => (
                    <li className='pa1' key={id}>
                        <div className='ba bw1 br1 pa3'>
                            <ShopListItem id={id} {...object} saveName={(name) => saveListName(id, name)}/>
                            <div className='mt1 red f7 pointer' onClick={() => { deleteList(id); }}>{t('delete')}</div>
                        </div>

                    </li>
                ))}
            </ul>
        </div>
    </div>)
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
