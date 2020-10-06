import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({id,image,title,description,rating,price}) {

    const[{basket},dispatch]=useStateValue();

    const removeFromBasket =() =>{
        dispatch({
            type : 'REMOVE_FROM_BASKET',
            id: id,
        })

    }

    return (
        <div className="checkout-product">
            <img src={image} className="checkout-product-image"  alt=""/>
            <div className="checkout-product-info">
                <p className="checkout-product-title">{title}</p>
                <p className="checkout-product-titles">{description}</p>
                <p className="checkout-product-price">
                    <small>Rs. </small>
                    <strong>{price}</strong>                
                </p>
                <div className="checkout-product-rating">
                {Array(rating).fill().map((_, i)=> <p>⭐</p>)}
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>

            
        </div>
    )
}

export default CheckoutProduct

