import React from 'react';
import './ProductDetail.css';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';
import fakeData from '../../fakeData';

const ProductDetail = () => {
    const {productKey} = useParams();
    const productList = fakeData.find(product => product.key === productKey);
    return (
        <div>
            <Product 
                showAddToCart = {false}
                product = {productList}>
            </Product>
        </div>
    );
};

export default ProductDetail;