import { View, Text, StyleSheet } from "react-native";
import { FavouriteContext } from "../store/context/FavouriteContext";
import { MEALS } from "../data/dummy-data";
import { useContext, useLayoutEffect } from "react";
import MealList from "../components/mealList";
import { useSelector } from "react-redux";

function Favourite({ navigation }) {
  const FavouriteCtx = useContext(FavouriteContext);
  const favouriteMealIds = useSelector((state) => state.favouriteMeals.ids);

  const filteredMeals = MEALS.filter((meal) =>
    favouriteMealIds.includes(meal.id)
  );

  // const filteredMeals = MEALS.filter((meal) =>
  //   FavouriteCtx.ids.includes(meal.id)
  // );

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     contentStyle: {
  //       backgroundColor: "#d32c2c",
  //     },
  //   });
  // }, [navigation]);

  if (filteredMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Favourite list is blank!!!</Text>
      </View>
    );
  }

  return <MealList items={filteredMeals} />;
}

export default Favourite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
  },
});
