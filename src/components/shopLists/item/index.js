import React, {useState, useRef} from 'react';
import {format, fromUnixTime} from "date-fns";
import {Link} from "react-router-dom";
import { useTranslation } from 'react-i18next';

import './translation';

const ShopListItem = ({ id, creationTime, items, name, saveName = () => {} }) => {
    const { t } = useTranslation('shopListItem');
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
                <div className='pt2 pb2 f6 mb2'>{t('list')}: {name} <span className='f7 blue pointer' onClick={() => setIsEdited(true)}>{t('edit')}</span></div>
                :
                <div className='f6 mb2'>
                    <input className='pa2 border-box' defaultValue={name} placeholder={t('enterName')} ref={inputEl}/>
                    <span
                    className='f7 blue pointer ml1'
                    onClick={saveListName}> {t('save')}</span>
                </div>
            }
            <div className='f6 mb1'>{t('elsNumer')}: {items ? Object.keys(items).length : 0 }</div>
            <div className='f6 mb2'>{t('date')}: {format(fromUnixTime(creationTime), 'dd.MM.yyyy')}</div>
            <Link className='db ba bw1 br1 pointer b--gray pa2 hover-bg-light-silver tc w-100 w-50-ns black no-underline' to={`/${id}`}>{t('open')}</Link>
        </>
    );
};

export default ShopListItem;
