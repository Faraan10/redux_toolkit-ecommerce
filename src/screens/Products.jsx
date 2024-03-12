import React, { useEffect, useState } from 'react'
import axios from "axios"
import DisplayProducts from "./DisplayProducts"

const Products = () => {

  const [products, setProducts]=useState([])

  const getProducts= async()=>{
    await axios("https://api-171g.onrender.com/products/")
      .then((response)=> setProducts(response.data))
      .catch((err)=> console.log(err))
  }

  useEffect(()=>{
    getProducts()
  }, [])

  return (
    <div className="container">
      <div className="row">
        {
          products.map((product)=>(
            <div key={product._id} className="col-sm-6 col-md-4 col-lg-3">
              <DisplayProducts product={product}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Products