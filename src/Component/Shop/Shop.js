import React, { useState } from 'react';
import './Shop.css';
import fakeData from "../../fakeData";
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const productNumber = fakeData.slice(0, 10);
    // console.log(productNumber);
    const [products, setProducts] = useState(productNumber);
    const [ cart, setNewCart ] = useState([]);
    const handleAddProduct = (product) => {
        // console.log("Product Added", product);
        const newCart = [...cart, product];
        setNewCart(newCart);
    }
    
    return (
        <div className="shop-container">
            <div className="product-container">
               {
                   products.map( product =>  <Product 
                    key={product.key}
                    handleAddProduct={handleAddProduct}
                    product={product}></Product> )
               }
            </div>
            <div className="cart-container">
               <Cart cart={cart} ></Cart>
            </div>
        </div>
    );
};

export default Shop;