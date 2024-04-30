import React, { useEffect, useState } from 'react'
import Card from "../Card"
import axios from 'axios'

const ShopBottom = () => {
useEffect(()=>{
    const  Datafetcher = async()=>{
const allData = await axios.get('https://dummyjson.com/products')
const productsData =  allData.data.products;
console.log(productsData);
 
    }
    Datafetcher()
})


  return (
<>
<div>
   
 <Card/>

   
</div>
</>
)
}

export default ShopBottom