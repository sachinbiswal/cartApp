// import React,{useState} from 'react';
// import { useEffect } from 'react';
import "../styles/cart.css";

const Cart = ({cart, setCart, handleChange}) => {
    

    const handleRemove = (id) =>{
        const arr = cart.filter((item)=>item.id !== id);
        setCart(arr);
        
    }

  return (
    <article>
        {
            cart?.map((item)=>(
                <div className="cart_box" key={item.id}>
                    <div className="cart_img">
                        <img src={item.image} />
                        <p>{item.title}</p>
                    </div>
                    <div>
                        <button onClick={()=>handleChange(item, +1)}> + </button>
                        <button>{item.rating.count}</button>
                        <button onClick={()=>handleChange(item, -1)}> - </button>
                    </div>
                    <div>
                        <span>{item.price}</span>
                        <button onClick={()=>handleRemove(item.id)} >Remove</button>
                    </div>
                </div>
            ))}
        
    </article>
  )
}

export default Cart