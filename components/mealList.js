import { View, Text, StyleSheet, FlatList } from "react-native";
import MealItem from "../components/mealItem";

function MealList({ items }) {
  function renderMeal(mealItem) {
    return <MealItem mealData={mealItem.item} />;
  }

  return (
    <View style={styles.rootContainer}>
      <FlatList
        data={items}
        keyExtractor={(meal) => meal.id}
        renderItem={renderMeal}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default MealList;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 16,
  },
});
