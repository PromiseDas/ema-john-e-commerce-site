import React, { useState, useEffect } from 'react';
import './Shop.css';
import fakeData from "../../fakeData";
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';

const Shop = () => {
    const productNumber = fakeData.slice(0, 10);
    // console.log(productNumber);
    const [products, setProducts] = useState(productNumber);
    const [ cart, setNewCart ] = useState([]);
    
    useEffect(() => {
        const orderedItemsList = getDatabaseCart();
        const orderedItemsKeys = Object.keys(orderedItemsList); //Extracting Keys of the items ordered
        
        const orderedCartItems = orderedItemsKeys.map( key => {
            const cartItemProducts = fakeData.find( pd => pd.key === key);
            cartItemProducts.quantity = orderedItemsList[key];
            return cartItemProducts;
        });
        
        setNewCart(orderedCartItems);
    }, []);

    const handleAddProduct = (product) => {
        // console.log("Product Added", product);
        const toBeAddedKey = product.key;
        const productCount = cart.find(pd => pd.key === toBeAddedKey);
        let count = 1;
        let newCart;

        if(productCount) {
            count = productCount.quantity + 1;
            productCount.quantity = count; 
            const otherProduct = cart.filter(pd => pd.key !== toBeAddedKey);
            newCart = [...otherProduct , productCount];
        } else {
            product.quantity = 1; 
            newCart = [...cart, product];
        }
        setNewCart(newCart);
        addToDatabaseCart(product.key, count);        
    }
    
    return (
        <div className="container">
            <div className="container-product">
               {
                   products.map( product =>  <Product 
                    key={product.key}
                    showAddToCart = {true}
                    handleAddProduct={handleAddProduct}
                    product={product}></Product> )
               }
            </div>
            <div className="container-price">
               <Cart cart={cart} >
                    <Link to="/review"> <button> Review Order </button> </Link>
               </Cart>
            </div>
        </div>
    );
};

export default Shop;