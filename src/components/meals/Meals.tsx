import MealItem from "./MealItem";
import { Meal } from "../../types/types";
import React, { useContext, useRef, useState } from 'react';
import CartCTX from '../../context/store/cart-context';
interface MealsProp {
    meals?: Meal[];
}



const CartBox: React.FC<{ getAmount: (amount: number, meal: { name: string, price: number, id: string } ) => void, meal: { name: string, price: number, id: string } }> = (props) => {
    const [amount, setAmount] = useState('');

    function _handleClick() {
        props.getAmount(+amount, { name: props.meal.name, price: props.meal.price, id: props.meal.id});
    }

    return (
        <div className="meal__cart cart">
            <div className="cart__label">
                <label htmlFor="amount">Amount</label>
                <input type="number" placeholder="0" value={amount} onChange={e => setAmount(e.target.value)} className="cart__input" />
            </div>
            <button className="cart__button" onClick={_handleClick}>+Add</button>
        </div>
    )
}

const Meals: React.FC<MealsProp> = (props) => {
    const cartCTX = useContext(CartCTX);

    function getAmount(amount: number, meal: { name: string, price: number, id: string }) {
        if (amount > 0) cartCTX.addToCart(meal, amount);
        if (amount === 0) cartCTX.addToCart(meal);
    }

    return (
        <section className="meal-container">
            {props.meals?.map(({ name, id, price, description }) => (
                <MealItem key={id} name={name} id={id} price={price} description={description}>
                    <CartBox getAmount={getAmount} meal={{ name, price, id }} />
                </MealItem>
            ))
            }
        </section >);
}

export default Meals;