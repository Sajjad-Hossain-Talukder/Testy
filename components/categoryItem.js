import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Button,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "react-native/Libraries/NewAppScreen";

function CategoryItem({ title, color, onPress }) {
  const navigation = useNavigation();

  function onPressHandler() {
    navigation.navigate("Meals");
  }

  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.onPressed]}
        android_ripple={{ color: "#000000" }}
        onPress={onPress}
      >
        <View style={[styles.gridInnerItem, { backgroundColor: color }]}>
          <Text style={styles.textStyle}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryItem;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "rgb(167, 166, 166)",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 1,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
    borderRadius: 8,
  },
  gridInnerItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  textStyle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  onPressed: {
    opacity: 0.5,
  },
});
