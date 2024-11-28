import { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useRoute } from "@react-navigation/native";
import MealList from "../components/mealList";

function MealsScreens({ route, navigation }) {
  const routeForNestedComponent = useRoute();
  const catId = route.params.catId;
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );
  const mealTitle = CATEGORIES.find((category) => category.id === catId).title;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: mealTitle,
    });
  }, [catId, navigation]);

  return <MealList items={displayedMeals} />;
}

export default MealsScreens;
