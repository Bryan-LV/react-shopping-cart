export interface Meal {
    id: string;
    name: string;
    description: string;
    price: number;
}

export interface CartMeal {
    id: string;
    name: string;
    count: number;
    price: number;
}