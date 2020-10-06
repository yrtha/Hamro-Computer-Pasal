import React from 'react'
import "./ElecList.css"
import { useStateValue } from './StateProvider'

function ElecList({id,image,title,description,rating,price}) {

    const [{basket},dispatch]=useStateValue();

const addToBasket = () =>{
    //dispatch item into datalayer
    dispatch({
        type : 'ADD_TO_BASKET',
        item :{
        id:id,
        title: title,
        description:description,
        price: price,
        image: image,
        rating : rating,
        },
    })
}

    return (
        <div className="ll">
            <img className="img" src={image} alt=""/>
            <h1>{title}</h1>
            <p>Rs. {price}</p>
            <p>{description}</p>
            <div className="product-rating">
                    {Array(rating).fill().map((_, i)=> <p>⭐</p>)}                    
            </div>
            <button onClick={addToBasket}>Add to Cart</button>
            
        </div>
    )
}

export default ElecList
