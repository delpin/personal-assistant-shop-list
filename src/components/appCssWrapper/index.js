import React from 'react';

const AppCssWrapper = ({children}) => {
    return (
        <div className='mw7 center ph3-ns helvetica mb4'>
            {children}
        </div>
    );
};

export default AppCssWrapper;
