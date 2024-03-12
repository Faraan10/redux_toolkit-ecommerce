import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import {removeFromCart} from "../redux/slices/cartSlice"

const Cart = () => {
  const cart=useSelector((state)=> state.cart)

  const dispatch=useDispatch()
  //console.log(cart);
  return (
    <div style={{margin:"10px"}}>
      {cart?.map((item)=>(
        <div key={item._id}>
          <img src={item?.image} alt={item?.title} style={{height:"250px"}}/>
          <h5>{item?.title}</h5>
          <h5>₹{item?.price}</h5>
          <button className="btn" onClick={()=> dispatch(removeFromCart(item._id))}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default Cart