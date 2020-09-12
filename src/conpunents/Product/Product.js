import React from 'react';
import { Link } from 'react-router-dom';
import "./Product.css"
const Product = (props) => {


    const { img, name, seller, price, stock, key } = props.product;
    return (
        <div className="product" >

            <div>
                <img src={img} alt="" />
            </div>
            <div className="details">
                <h4 className="product-name"><Link to={"/product/" + key} >{name}</Link></h4>
                <br />
                <p><small> by: {seller}</small></p>
                <p>$ {price}</p>
                <br />
                <p><small> only {stock} left in stock - Order Soon {}</small></p>
                {props.showAddToCart && <button className="cart-btn" onClick={() => props.handleAddProduct(props.product)}> <i className="fas fa-shopping-cart"></i>add to cart</button>}
            </div>

        </div>
    );
};

export default Product;