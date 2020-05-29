import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {img, name, price, seller, stock, key} = props.product;
    return (
        <div className="product">
           <div>
               <img src={img} alt=""/>
           </div>
           <div className="product-details">
               <div className="product__description">
                    <h3> <Link to={"/product/" + key}>{name}</Link> </h3>
                    <p><small>by: {seller} </small></p>
                    <p>$ {price}</p>
                    <p> <small>only {stock} left in the stock - order soon</small></p>
                    { props.showAddToCart && 
                        <button 
                            onClick={() => props.handleAddProduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> Add to cart
                        </button>
                    }     
                </div>
           </div>
        </div>
    );
};

export default Product;

