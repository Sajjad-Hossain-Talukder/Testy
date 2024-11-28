import { FlatList, Text } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryItem from "../components/categoryItem";

function onPressHandler(navigation, itemData) {
  console.log("onPress");
  navigation.navigate("Meals", {
    catId: itemData.item.id,
  });
}

function CategoryScreens({ navigation }) {
  function renderCategory(itemData) {
    return (
      <CategoryItem
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={onPressHandler.bind(this, navigation, itemData)}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategory}
      initialNumToRender={2}
      numColumns={2}
    />
  );
}

export default CategoryScreens;
