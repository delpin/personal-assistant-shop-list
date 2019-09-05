import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {getUnixTime} from 'date-fns';
import ShopListItem from "components/shopLists/item";
import {addListItem, changeListName, deleteListItem} from "store/actions/lists";


const ShopLists = ({lists, addListItem, changeListName, deleteListItem}) => {
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

    return (<div>
        <button onClick={createList}>
            Добавить
        </button>

        <h1>Списки покупок:</h1>
        <ul>
            {Object.entries(lists).map(([id, object]) => (
                <li key={id}>
                    <ShopListItem id={id} {...object} saveName={(name) => saveListName(id, name)}/>
                    <div onClick={() => { deleteList(id); }}>Удалить</div>
                </li>
            ))}
        </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(ShopLists);
