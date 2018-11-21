import React from 'react';
import './Item.css';

const Item = ({ id, price, title, oldP, img, sale }) => {


    return (
        <div className='Card-item'>
            <div className='id'>{id}</div>
            <img src={img} alt="item_img" />
            <h3>{title}</h3>
            <div className='price'>
                <span className='old_price'>{oldP}</span>
                <span className='new_price'>{price}</span>
            </div>
            <div className='sale'>{sale}</div>
        </div>
    );

}

export default Item;