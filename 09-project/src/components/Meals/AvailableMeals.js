import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

import { useEffect, useState } from "react";

const AvailableMeals = () => {
  // Update data when these changes
  const [meals, setMeals] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState();

  useEffect(() => {
    setIsLoading(true);
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-http-7bd76-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };
    // async function always throws a promise, so cannot catch
    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHasError(error.message);
    });
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  let content;
  if (isLoading) {
    content = <p className={classes.loadingMeals}>Loading...</p>;
  } else if (hasError) {
    content = <p className={classes.mealsError}>{hasError}</p>;
  } else if (mealsList.length === 0) {
    content = <p className={classes.loadingMeals}>No meals were found</p>;
  } else {
    content = <ul>{mealsList}</ul>;
  }

  return (
    <section className={classes.meals}>
      <Card>{content}</Card>
    </section>
  );
};

export default AvailableMeals;
