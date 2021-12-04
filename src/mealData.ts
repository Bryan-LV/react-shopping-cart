import { v4 as uuidv4 } from 'uuid';

const DUMMY_MEALS = [
    {
      id: uuidv4(),
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: uuidv4(),
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: uuidv4(),
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: uuidv4(),
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    }
]

export default DUMMY_MEALS;