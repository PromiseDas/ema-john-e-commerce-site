import React from 'react';
import './Header.css';
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div className="header">
           <img src={logo} alt="ema-john"/>
           <nav>
               <a href="/shop">Shop</a>
               <a href="/Review">Review</a>
               <a href="/ManageInventory">Manage Inventory</a>
           </nav>
        </div>
    );
};

export default Header;