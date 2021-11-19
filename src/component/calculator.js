import React, { useState, useEffect } from 'react'


const Calculator = (props) =>{
    const [totalAmount, setTotalAmount] = useState()
    const basePrice= 1000
    useEffect(()=>{
        
        var total = props.colorPrice+props.packagePrice+props.powerPrice+props.wrapPrice+basePrice
        setTotalAmount(total)

    },[props.colorPrice,props.packagePrice,props.powerPrice,props.wrapPrice])
    return(
        <div className="calculate-box">
        <div className="calculate-header">
            <ul>
                <li>
                    Base price:
                    <span>{`${basePrice}€`}</span>
                </li>
                <li>
                    Color:
                    <span>{`+${props.colorPrice}€`}</span>
                </li>
                <li>
                    Power:
                    <span>{`+${props.powerPrice}€`}</span>
                </li>
                <li>
                    Warp drive:
                    <span>{`+${props.wrapPrice}€`}</span>
                </li>
                <li>
                    Option package:
                    <span>{`+${props.packagePrice}€`}</span>
                </li>
            </ul>
        </div>
        <div className="calculate-footer">
            <ul>
                <li>
                    Total:
                    <span>{`${totalAmount}€`}</span>
                </li>
            </ul>
        </div>
    </div>
    )
}
export default Calculator