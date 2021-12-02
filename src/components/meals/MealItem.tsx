import { useContext, useRef } from 'react';
import CartCTX from '../../context/store/cart-context';
import { Meal } from '../../types/types';
import "./meals.css";

interface MealItem {
    meal: Meal;
}

const MealItem: React.FunctionComponent<MealItem> = (props) => {
    const { name, id, description, price } = props.meal;
    const amount = useRef<HTMLInputElement>(null);
    const cartCTX = useContext(CartCTX);

    return (
        <div className="meal" key={id} id={id}>
            <div className="meal__item">
                <h3 className="meal__title">{name}</h3>
                <p className="meal__description">{description}</p>
                <p className="meal__price">${price}</p>
            </div>
            <div className="meal__cart cart">
                <div className="cart__label">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" placeholder="0" ref={amount} className="cart__input" />
                </div>
                <button className="cart__button" onClick={cartCTX?.addToCart}>+Add</button>
            </div>
        </div>
    );
}

export default MealItem;