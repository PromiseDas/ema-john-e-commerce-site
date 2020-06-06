import React from 'react';
import './Header.css';
import logo from '../../images/logo.png'; 
import { useAuth } from '../LogIn/useAuth';



const Header = () => {
    const auth = useAuth();
    
    return (
        <div className="header">
           <img src={logo} alt="ema-john"/>
           <nav>
               <a href="/shop">Shop</a>
               <a href="/review"> Order Review</a>
               <a href="/inventory">Manage Inventory</a>
               {
                   auth.user && <span style={{color : 'yellow'}}> {auth.user.name} </span> 
               }
               {
                   auth.user ? <a href="/login">Sign Out</a> : <a href="/login">Sign In</a>
               }
           </nav>
        </div>
    );
};

export default Header;