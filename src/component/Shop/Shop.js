import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [selectedProduct,setSelectedProduct] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data=>setProducts(data))
    }, [])
    const clickedBtn = (product) => {
        console.log(product)
        const newCart = [...selectedProduct, product];
        setSelectedProduct(newCart)
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => 
                        <Product key={product.id} props={product} clickedBtn={clickedBtn}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={selectedProduct}></Cart>
             </div>
        </div>
    );
};

export default Shop;