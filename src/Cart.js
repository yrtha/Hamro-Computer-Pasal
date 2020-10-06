import React from "react";
import "./Cart.css";
import { useStateValue } from './StateProvider'
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";

function Cart() {
  const [{basket,user},dispatch]=useStateValue();
  return (
    <div className="cart-items">
      <div className="cart-top">
                <h2>Your Shopping Basket</h2>

                {basket.map(item => (
                    <CheckoutProduct
                     id={item.id}
                     title={item.title}
                     image={item.image}
                     description={item.description}
                     rating={item.rating}
                     price={item.price}
                    />
                     ))} 
      </div>

      <div className="cart-bottom">
          <Subtotal />
        
      </div>

    </div>
  );
}

export default Cart;
