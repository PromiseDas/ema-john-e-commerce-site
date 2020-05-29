import React from 'react';
import './ReviewItems.css';

const ReviewItems = (props) => {
    const { name, quantity, key, price } = props.product;
    return (
        <div className="reviewItems">
            <h4>{name}</h4>
            <p>Items ordered: {quantity}</p>
            <p><small>Price : {price}</small></p>
            <button onClick={() => props.removeCartItems(key)}>Remove Items</button>
        </div>
    );
};

export default ReviewItems;