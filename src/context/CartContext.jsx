import React from 'react'
import React from 'react'
import { createContext ,useContext, useState} from 'react'

const CartContext = createContext()

export const CartProvider = ({children}) => {
    cosnt [cartItems,setcartItems]=useState([])

    const  addToCart =(product)=>{
    const exist =cartItems.find((item)=>item.id===product.id) 
    if(exist){
        setcartItems(
            cartItems.map((item)=> item.id===product.id ?{...exist, qty:exist.qty +1}:item)
        )
    }else{
        setcartItems([...cartitems,{...product,qty:1}])
    }
    };

    const removefromcart=x(id)=>{
        setcartItems(cartItems.filter((item)=>item.id!==id))
    }

    const clearcart=()=> setcartItems([])

  return (
    <CartContext.Provider value={{cartItems,addToCart,removefromcart,clearcart}}>
        {children}
    </CartContext.Provider>
  )
}


export const useCart=()=>useContext(CartContext)