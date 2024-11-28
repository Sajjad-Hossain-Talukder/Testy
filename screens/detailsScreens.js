import { useLayoutEffect, useContext } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import { FavouriteContext } from "../store/context/FavouriteContext";
import MealInfo from "../components/mealInfo";
import SubTitle from "../components/subtitle";
import List from "../components/list";
import CustomButtonWithOnlyIcon from "../components/headerButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite, removeFavourite } from "../store/redux/favourite";

function Details({ route, navigation }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const dispatch = useDispatch();

  // const FavouriteCtx = useContext(FavouriteContext);
  // const isFavouriteAlready = FavouriteCtx.ids.includes(mealId);
  const favouriteIds = useSelector((state) => state.favouriteMeals.ids);
  const isFavouriteAlready = favouriteIds.includes(mealId);

  function onPressHandler() {
    if (isFavouriteAlready) {
      //FavouriteCtx.removeFavourite(mealId);
      dispatch(removeFavourite({ id: mealId }));
    } else {
      //FavouriteCtx.addFavourite(mealId);
      dispatch(addFavourite({ id: mealId }));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <CustomButtonWithOnlyIcon
          name={isFavouriteAlready ? "star" : "star-outline"}
          size={24}
          color={"white"}
          onPress={onPressHandler}
        />
      ),
    });
  }, [navigation, onPressHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}> {selectedMeal.title} </Text>
      <MealInfo mealData={selectedMeal} />
      <View>
        <SubTitle>Ingredients</SubTitle>
        <List data={selectedMeal.ingredients} />
      </View>

      <View>
        <SubTitle>Steps</SubTitle>
        <List data={selectedMeal.steps} />
      </View>
      <View style={styles.footer}></View>
    </ScrollView>
  );
}

export default Details;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    padding: 4,
    margin: 4,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
  rootContainer: {
    // marginBottom: 34,
  },
  footer: {
    height: 34,
  },
});
