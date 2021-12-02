
import data from "./mealData";
import MealItem from "./MealItem";

const Meals: React.FunctionComponent = () => {
    return (
        <section className="meal-container">
            {data.map(meal => (
               <MealItem meal={meal} />
            ))}
        </section>);
}

export default Meals;