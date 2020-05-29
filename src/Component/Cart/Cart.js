import React from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart; 
    // console.log(cart);
    const total = cart.reduce((total, product) => total + product.price * product.quantity, 0);
    
    const formatNumber = (num) => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    let shippingCost = 0; 
    if ( total > 0 && total <= 200 ) {
        shippingCost = 20;
    } else if ( total > 200 && total <= 600 ) {
        shippingCost = 30;
    } else if ( total > 600 && total <= 1000) {
        shippingCost = 40;
    } else if ( total > 1000 ) {
        shippingCost = 50;
    }

    let totalPrice = total + shippingCost; 
    let tax = total / 100 * 2;
    let orderTotal = totalPrice + tax;

    return (
        <div className="cart">
            <h3>Order Summary</h3>
            <p>Items Ordered: {cart.length}</p>
            <div className="cart-details">
                <p>Total Item Price: {formatNumber(total)} </p>
                <p>Shipping and handling: {shippingCost} </p>
                <p>Total Before Tax: {formatNumber(totalPrice)} </p>
                <p>Estimated Tax: {formatNumber(tax)} </p>
                <h4>Order Total: {formatNumber(orderTotal)} </h4>
            </div>
            {
                props.children
            }
        </div>
    );
};

export default Cart;