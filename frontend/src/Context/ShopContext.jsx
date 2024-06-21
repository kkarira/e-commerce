import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product.js'

export const ShopContext = createContext(null);

const getDefaultCart =()=>{
    let Cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
        Cart[index] = 0; 
    }
    return Cart;
}

const ShopContextProvider = (props) => {
    const [cartItems,setCartItems] = useState(getDefaultCart());
    
    const addToCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount=()=>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = all_product.find((product)=>product.id === Number(item));
                totalAmount+=itemInfo.new_price*cartItems[item];
            }
            
        }
        return totalAmount;
    }

    const getTotalItems=()=>{
        let totalItems = 0;
        for(const item in cartItems){
             totalItems+=cartItems[item];
        }
        return totalItems;
    }

    const contextValue = {all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalItems};

    return (
        <ShopContext.Provider value = {contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;