import { useContext } from "react";
import CartCTX from "../../context/store/cart-context";
import MealItem from "../meals/MealItem";



export const Cart: React.FC = () => {
    const cartCTX = useContext(CartCTX);

    return (
        <div>
            {
                cartCTX.items.length > 0 ?
                    cartCTX.items.map(meal => (
                        <MealItem key={meal.id} name={meal.name} id={meal.id} price={meal.price}>
                            <div className="meal__cart cart">
                                <div className="cart__label">
                                    <span className="cart__amount">Inventory: {meal.count}</span>
                                </div>
                                <button className="cart__button" onClick={cartCTX?.deleteFromCart.bind(null, meal.id)}>Delete</button>
                            </div>
                        </MealItem>
                    )
                    )
                    :
                    <h2>No items in cart</h2>
            }
        </div>
    )
}
