import React from 'react';
import './ItemSolo.css';

const ItemSolo = ({ id, price, title, oldP, img, sale, description, star }) => {


    return (
        <div className='item-solo'>
            <div className='id'>{id}</div>
            <img className='solo-img' src={img} alt="item_img" />
            <div className='item-text'>
                <h2>{title}</h2>
                <span className='star'>Оценки пользователей: {star} из 5</span>

                <p className='descr'>Описание товара: {description}</p>

                <div className='price-solo'>
                    <span className='old_price-solo'>{oldP}</span>
                    <span className='new_price-solo'>{price}</span>
                </div>
                <div className='sale-solo'>{sale}</div>
            </div>

        </div>
    );

}

export default ItemSolo;