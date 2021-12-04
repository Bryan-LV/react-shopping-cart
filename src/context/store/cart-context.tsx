import React, { createContext, useState } from "react";
import { CartMeal } from "../../types/types";

interface CartInterface {
    count: number;
    items: CartMeal[],
    addToCart: (item: Pick<CartMeal, "id" | "name" | "price">, amount?: number) => void,
    deleteFromCart: (id: string) => void
}

// default context state
const initalCTX = {
    count: 0,
    items: [],
    addToCart: (item: Pick<CartMeal, "id" | "name" | "price">, amount?: number) => { },
    deleteFromCart: (id: string) => { }
}

// Creating a context
const CartCTX = createContext<CartInterface>(initalCTX);

export const CartContext: React.FC = function (props) {
    const [state, setState] = useState<CartInterface>(initalCTX);

    function addToCart(newCartItem: Pick<CartMeal, "id" | "name" | "price">, amount?: number) {
        setState(prevState => {
            const itemInCart = prevState.items.some(item => item.id === newCartItem.id);
            
            if (!itemInCart) {
                return ({
                    ...prevState,
                    count: amount ? prevState.count + amount : prevState.count + 1,
                    items: [...prevState.items, { ...newCartItem, count: amount ? amount: 1 }]
                })
            }

            return ({
                ...prevState,
                count: amount ? prevState.count + amount : prevState.count + 1,
                items: prevState.items.map(cartItem => {
                    if (cartItem.id !== newCartItem.id) return cartItem;
                    let currentCount = cartItem.count;
                    let updateCount = amount? currentCount + amount : currentCount + 1;
                    return ({ ...cartItem, count: updateCount });
                })
            })
        })
    }

    function deleteFromCart(id: string) {
        setState(prevState => {
            return ({
                ...prevState,
                count: prevState.count !== 0 ? prevState.count - 1 : prevState.count,
                items: prevState.items.map(item => {
                    if(item.id !== id) return item;
                    if(item.count === 0) return item;
                    let currentCount = item.count;
                    let updatedCount = currentCount - 1;
                    return ({ ...item, count: updatedCount });
                }).filter(item => item.count !== 0)
            })
            }
        )
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
