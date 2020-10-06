import React from 'react'
import './Subtotal.css'
import CurrenyFormat from "react-currency-format"
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './Reducer'
import { useHistory} from 'react-router-dom'


function Subtotal() {

    const history = useHistory();
    const [{basket},dispatch] = useStateValue();


    return (
        <div className="subtotal">
            <CurrenyFormat
            renderText={(value)=>(
                <>
                <p>Subtotal ({basket.length} Items) : <strong>{value}</strong></p>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeperator={true}
            prefix={"Rs. "}
            />
            <button >Buy</button>
        </div>
    )
}

export default Subtotal
