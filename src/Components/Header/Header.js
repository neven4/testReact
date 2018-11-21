import React from 'react';
import './Header.css';

const Header = ({ keyPress }) => {

    return (
        <div className='header'>
            <a href='/' className='logo'>
                OnlineShop
                </a>
            <div className='search-field'>
                Поиск товара:
                    <input
                    className='search-input'
                    type='search'
                    placeholder='Найти по названию или id'
                    onKeyDown={keyPress}
                />
            </div>
            {/* <div className='goodsCount'>
                Всего товаров: {this.props.dataLength}
            </div> */}
        </div>
    );
}

export default Header;