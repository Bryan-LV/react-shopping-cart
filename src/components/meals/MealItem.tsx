import { CartMeal, Meal } from '../../types/types';
import "./meals.css";

interface MealItemProp {
    id: string;
    name: string;
    price: number;
    description?: string;
    count?: number;
}

const MealItem: React.FunctionComponent<MealItemProp> = (props) => {
    const {id, name, price } = props;

    return (
        <div className="meal" key={id} id={id}>
            <div className="meal__item">
                <h3 className="meal__title">{name}</h3>
                {props.description && <p className="meal__description">{props.description}</p>}
                <p className="meal__price">${price}</p>
            </div>
            {props.children}
        </div>
    );
}

export default MealItem;