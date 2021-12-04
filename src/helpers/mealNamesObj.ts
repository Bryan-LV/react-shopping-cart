import DUMMY_MEALS from "../mealData";

function createMealNames() {
    let mealNames: Record<string, number> = {};

    for (const key in DUMMY_MEALS) {
        if (Object.prototype.hasOwnProperty.call(DUMMY_MEALS, key)) {
            let element = DUMMY_MEALS[key];
            mealNames = {
                ...mealNames,
                [element.name]: 0
            }
        }
    }

    return mealNames;
}

export default createMealNames;