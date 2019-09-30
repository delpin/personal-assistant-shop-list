import React from 'react';

const ProductItem = ({name, className}) => (
    <div className={`${className} ph4 pv3 border-box pointer`} >
        <img src="http://tachyons.io/img/logo.jpg" className="br-100 pa1 ba b--black-10 h3 w3" alt="avatar" />
        <div className='tc mt1'>
            {name}
        </div>
    </div>
);

export default ProductItem;
