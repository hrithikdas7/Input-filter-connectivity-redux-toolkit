import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'




const productsArray = [
  {name:"rice", price:"24"},
  {name: "soap", price:"25"},
  {name:"wheat", price:"15"}
]
const Product = () => {
  const [products] = useState(productsArray)


 

  const data = useSelector((state)=>state.inputSlice.filter)


  return (
    <div>
      {products.filter((product) => data ? product.name.includes(data) : true).map((product) => (
        <div>
          {product.name} @ {product.price}
        </div>
      ))}
    </div>
  )}


export default Product
