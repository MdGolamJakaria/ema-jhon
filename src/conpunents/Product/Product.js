import React from 'react';
import "./Product.css"
const Product = (props) => {
    console.log(props)

    const { img, name, seller, price, stock } = props.product;
    return (
        <div className="product" >

            <div>
                <img src={img} alt="" />
            </div>
            <div className="details">
                <h4 className="product-name">{name}</h4>
                <br />
                <p><small> by: {seller}</small></p>
                <p>$ {price}</p>
                <br />
                <p><small> only {stock} left in stock - Order Soon {}</small></p>
                <button className="cart-btn" onClick={() => props.handleAddProduct(props.product)}> <i class="fas fa-shopping-cart"></i>add to cart</button>
            </div>

        </div>
    );
};

export default Product;