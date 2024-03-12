import React from 'react'
import {useDispatch} from "react-redux"
import {addToCart} from "../redux/slices/cartSlice"

const DisplayProducts = ({product}) => {
  //console.log(product);

  const dispatch=useDispatch()

  return (
    <div className="card" style={{margin:"5px"}}>
      <img src={product.image} alt={product.title} style={{objectFit:"contain", aspectRatio:"2.5/2", height:"250px"}}/>
      <h6 style={{margin:"10px"}}>{product.title}</h6>
      <h6 style={{margin:"10px", colorScheme:"green"}}>₹{product.price}</h6>
      <div className="flex" style={{margin:"7px"}}>
        <button className="btn" style={{marginRight:"10px"}}>See More</button>
        <button className="btn" onClick={()=> dispatch(addToCart(product))}>Add To Cart</button>
      </div>
    </div>
  )
}

export default DisplayProducts