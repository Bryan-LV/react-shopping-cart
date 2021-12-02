import { Meal } from '../../types/types';

interface CartInterface {
    count: number;
    items: Meal[];
    addToCart: () => void,
    deleteFromCart: () => void
}

export default CartInterface;