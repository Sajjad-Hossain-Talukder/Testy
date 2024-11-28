import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealInfo from "./mealInfo";

function MealItem({ mealData }) {
  const navigation = useNavigation();

  function onPressHandler() {
    navigation.navigate("Details", {
      mealId: mealData.id,
    });
  }

  return (
    <View style={styles.itemContainer}>
      <Pressable
        android_ripple={{ color: "#271d1d" }}
        style={({ pressed }) => [pressed && styles.onPressed]}
        onPress={onPressHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: mealData.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{mealData.title}</Text>
          </View>
          <MealInfo mealData={mealData} />
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    margin: 16,
    borderRadius: 12,
    backgroundColor: "white",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    elevation: 4,
    shadowColor: "#a3a2a2",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    shadowOpacity: 0.5,
  },
  innerContainer: {
    borderRadius: 12,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },
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
