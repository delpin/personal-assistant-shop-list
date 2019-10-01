import React from 'react';
import './translation';

import { useTranslation } from 'react-i18next';

const languagesList = ['ru', 'en'];

const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const { t } = useTranslation('languageSelector');

    const changeLanguageCb = (lang = 'en') => {
        i18n.changeLanguage(lang);
    };

    return (
        <div>
            <h5 className='f5 mb2'>{t('title')}:</h5>
            {languagesList.map((name, index) => (
                <div key={index} className='f6 pointer mb1' onClick={() => changeLanguageCb(name)}>{t(name)}</div>
            ))}
        </div>
    )
};

export default LanguageSelector;
