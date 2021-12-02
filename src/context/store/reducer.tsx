import { Meal } from '../../types/types';
import CartActions from "./actions";
import CartInterface from './types';

export const reducer = (state: CartInterface, action: { type: string, payload?: (Meal | number) }) => {

    switch (action.type) {
        case CartActions.ADD_CART_ITEM:
            return { ...state, count: state.count += 1 };
        default:
            return state;
            break;
    }
}
