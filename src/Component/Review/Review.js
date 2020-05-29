import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItems from '../ReviewItems/ReviewItems';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);

    const removeCartItems = (cartItems) => {
        const newCart = cart.filter( pd => pd.key !== cartItems );
        setCart(newCart);
        removeFromDatabaseCart(cartItems);
    }

    const handlePlaceOrder = () => {
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    }

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
                                                id={cart.key}
                                                removeCartItems={removeCartItems}
                                                product={cartProducts}>
                                            </ReviewItems>)
                }
                {
                    thankYou
                }
            </div>
            <div className="container-price">
                <Cart cart={cart}>
                    <button onClick={ handlePlaceOrder }>Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;