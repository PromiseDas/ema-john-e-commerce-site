import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart} from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItems from '../ReviewItems/ReviewItems';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif';
import { Link } from 'react-router-dom';
import { useAuth } from '../LogIn/useAuth';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const auth = useAuth();
    const removeCartItems = (cartItems) => {
        const newCart = cart.filter( pd => pd.key !== cartItems );
        setCart(newCart);
        removeFromDatabaseCart(cartItems);
    }

    // const handlePlaceOrder = () => {
    //     setCart([]);
    //     setOrderPlaced(true);
    //     processOrder();
    // }

    useEffect(() => {
        const orderedItemsList = getDatabaseCart(); 
        const orderedItemsKeys = Object.keys(orderedItemsList); //Extracting Keys of the items ordered
        
        const orderedCartItems = orderedItemsKeys.map( key => {
            const cartItemProducts = fakeData.find( pd => pd.key === key);
            cartItemProducts.quantity = orderedItemsList[key];
            return cartItemProducts;
        });
        
        setCart(orderedCartItems);
    } , []);
    let thankYou; 
    if(orderPlaced) {
        thankYou = <img src={happyImage} alt=""/>
    }
    return (
        <div className="container">
            <div className="container-product">
                {
                    cart.map(cartProducts => <ReviewItems
                                                id={cartProducts.key}
                                                removeCartItems={removeCartItems}
                                                product={cartProducts}>
                                            </ReviewItems>)
                }
                {
                    thankYou
                } 
                {
                    !cart.length && <h1>Your cart is empty. <a href="/"> Keep Shopping</a></h1>
                }
            </div>
            <div className="container-price">
                <Cart cart={cart}>
                    <Link to="/shipment">
                       {    auth.user ?
                            <button>Proceed Checkout</button> : <button>Log in to proceed</button> }
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Review;