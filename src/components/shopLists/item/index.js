import React, {useState, useRef} from 'react';
import {format, fromUnixTime} from "date-fns";
import {Link} from "react-router-dom";

const ShopListItem = ({ id, creationTime, items, name, saveName = () => {} }) => {
    const [isEdited, setIsEdited] = useState(false);
    const inputEl = useRef(null);

    const saveListName = () => {
        if (inputEl && inputEl.current) {
            saveName && saveName(inputEl.current.value || '');
        }
        setIsEdited(false);
    };

    return (
        <>
            {!isEdited ?
                <div>Список: {name} <span onClick={() => setIsEdited(true)}>Редактировать</span></div>
                :
                <div>
                    <input defaultValue={name} placeholder='Введите имя' ref={inputEl}/> <span
                    onClick={saveListName}>Сохранить</span>
                </div>
            }
            <div>Кол-во элементов: {items ? Object.keys(items).length : 0 }</div>
            <div>Дата создания: {format(fromUnixTime(creationTime), 'dd.MM.yyyy')}</div>
            <Link to={`/${id}`}>Открыть</Link>
        </>
    );
};

export default ShopListItem;
