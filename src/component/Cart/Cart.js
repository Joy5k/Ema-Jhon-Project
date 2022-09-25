import React from 'react';

const Cart = (props) => {
    // console.log('first',selectedProduct)
    return (
        <div>
                <h3>Order Summary </h3>
                <h3>Selected Itmes:{props.cart.length}</h3>
           
        </div>
    );
};

export default Cart;