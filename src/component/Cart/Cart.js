import React from 'react';
// import Product from '../Product/Product';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props;
    // console.log(cart,'check cart');
    let Total = 0;
    let shippingCharge = 0;
    let Tax = 0;
    let grandTotal = 0;
    let quantity = 0;
    cart.forEach(Product => {
    console.log(Product.quantity);
        Total = Total + Product.price;
        shippingCharge = shippingCharge + Product.shipping;
        const totalTaka = Total + shippingCharge;
        const calculateTax = (totalTaka * 0.05).toFixed(2);
        const taxes = parseFloat(calculateTax);
        Tax = taxes;
        const calculateTotalPrice = totalTaka + taxes;
        grandTotal = calculateTotalPrice;
    });
    return (
        <div className='cart'>
                <h3>Order Summary </h3>
                <p>Selected Items:{cart.length}</p>
            <p>Total Price:${Total}</p>
                <p>Total Shipping Charge:${shippingCharge}</p>
            <p>Tax:${Tax}</p>
            <h4>Grand Total: ${grandTotal }</h4>
           
        </div>
    );
};

export default Cart;