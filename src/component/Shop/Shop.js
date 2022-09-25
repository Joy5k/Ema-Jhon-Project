import React, { useEffect, useState } from 'react';
import { addToDb, getSelectedProducts } from '../../utilities/fakedb';
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
    useEffect(() => {
        const storedCart = getSelectedProducts();
        // console.log(storedCart);
        let selectedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            selectedCart.push(addedProduct)  
            }
       
        }
        setSelectedProduct(selectedCart)
    },[products])

    const clickedBtn = (product) => {
        // console.log(product)
        const newCart = [...selectedProduct, product];
        setSelectedProduct(newCart)
        addToDb(product.id)
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