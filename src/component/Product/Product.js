import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css';
const Product = (props) => {
    const { name, img, category, seller, price, stock, ratings } = props.props;
    return (
        <div className='product'> 
            <img src={img} alt="" />
            <div className='product-info'>
                <p>{ name}</p>
                <p>Price:${price}</p>
                <p>Rating:<small>{ratings} Stars</small></p>
            </div>
            <button onClick={()=>props.clickedBtn(props.props)} className='btn-cart'>
                <p className='btn-add'> Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
              </button>
        
        </div>
    );
};

export default Product;