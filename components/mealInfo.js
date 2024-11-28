import { Text, View, StyleSheet } from "react-native";

function MealInfo({ mealData }) {
  return (
    <View style={styles.deatilsContainer}>
      <Text style={styles.detailsText}>{mealData.duration}m</Text>
      <Text style={styles.detailsText}>
        {mealData.complexity.toUpperCase()}
      </Text>
      <Text style={styles.detailsText}>
        {mealData.affordability.toUpperCase()}
      </Text>
    </View>
  );
}

export default MealInfo;

const styles = StyleSheet.create({
  deatilsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 6,
  },
  detailsText: {
    fontSize: 14,
    padding: 4,
  },
  onPressed: {
    opacity: 0.5,
  },
});
