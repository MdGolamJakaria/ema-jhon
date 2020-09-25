import React, { useEffect, useState } from 'react';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fackData from '../../fakeData'
import ReviewItem from '../ReviewIteam/ReviewItem';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif'
import { useHistory } from 'react-router-dom';


const Review = () => {
    const [cart, setCart] = useState([])

    const [orderPlaced, setOrderPlaced] = useState(false)
    const history = useHistory()

    const handleProceedCheckOut = () => {
        history.push('/shipment')
    }
    const handleRemoveProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey)
        setCart(newCart)
        removeFromDatabaseCart(productKey)
    }
    useEffect(() => {
        const savedCart = getDatabaseCart()
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key => {
            const product = fackData.find(pd => pd.key === key)
            product.quantity = savedCart[key]
            return product
        })
        setCart(cartProducts)
    }, [])

    let thankYou;

    if (orderPlaced) {
        thankYou = <img src={happyImage} alt="" srcset="" />
    }

    return (
        <div className='twin-container'>
            <div className="product-container">
                {
                    cart.map(pd => <ReviewItem
                        handleRemoveProduct={handleRemoveProduct}
                        key={pd.key}
                        product={pd} ></ReviewItem>)
                }
                {
                    thankYou
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button className="cart-btn" onClick={handleProceedCheckOut}>Proceed Checkout</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;