import React, { useState,useEffect } from 'react';
import '../styles/product.css'
import Cards from './Cards';

const Product = ({handleClick}) => {
    const [Data,SetData]=useState([])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
          .then((res) => res.json())
          .then((result) => SetData(result));
       
      }, []);
  return (
    <>
    <h1 style={{textAlign:"center"}}>Products</h1>
    <section>
        
        {
            Data.map((item)=>(
                <Cards item={item} key={item.id} handleClick={handleClick} />
            ))
        }
    </section>
    </>
  )
}

export default Product