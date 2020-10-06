import React from 'react'
import "./Cards.css"

function Cards({image,title,price}) {
    return (
        <div className="cards">
            <img className="img" src={image} alt=""/>
            <h1>{title}</h1>
            <p>Rs. {price}</p>
        </div>
    )
}

export default Cards
