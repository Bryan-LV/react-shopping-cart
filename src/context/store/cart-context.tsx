import React, { createContext, useState } from "react";
import CartInterface from "./types";

const initalCTX: CartInterface = {
    count: 0,
    items: [],
    addToCart: () => { },
    deleteFromCart: () => {}
}

const CartCTX = createContext<CartInterface>(initalCTX);

export const CartContext: React.FC = function (props) {
    const [state, setState] = useState<CartInterface>(initalCTX);


    function addToCart() {
        setState(prevState => {
            return { ...prevState, count: prevState.count++ };
        })
    }

    function deleteFromCart(){
        setState(prevState => {
            return { ...prevState, count: prevState.count-- };
        })
    }

    const providerValue: CartInterface = {
        count: state.count,
        items: state.items,
        addToCart: addToCart,
        deleteFromCart: deleteFromCart
    }

    return (
        <CartCTX.Provider value={providerValue}>
            {props.children}
        </CartCTX.Provider>
    )
}


export default CartCTX;
