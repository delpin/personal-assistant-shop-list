import React from 'react';
import { useTranslation } from 'react-i18next';

const ChangeLanguage = () => {
    const { i18n } = useTranslation();

    const changeLanguageCb = (lang = 'en') => {
        i18n.changeLanguage(lang);
    }
    return (
        <div>
            <h3>Выбирите язык:</h3>
            <div onClick={() => changeLanguageCb('ru')}>Русский</div>
            <div onClick={() => changeLanguageCb('en')}>Английский</div>
        </div>
    )
};

export default ChangeLanguage;