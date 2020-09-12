import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {

    const cart = props.cart;

    // Short version
    // const totalPrice = cart.reduce((totalPrice, prd) => totalPrice + prd.price, 0)

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price * product.quantity
    }

    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 4.99;

    } else if (total > 0) {
        shipping = 12.99;
    }

    const tax = (total / 10);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h4>Order Summery</h4>
            <h5>Iteams Ordered : {cart.length}</h5>
            <p>Product Price : {formatNumber(total)}</p>
            <p> Shipping cost : {shipping}</p>
            <p> Tax + vat : {formatNumber(tax)}</p>
            <p>Total Prices : {grandTotal}</p>
            <br />
            {
                props.children
            }


        </div>
    );
};

export default Cart;