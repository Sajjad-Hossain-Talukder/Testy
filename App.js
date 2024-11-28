import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, LinearGradient } from "react-native";
import CategoryScreens from "./screens/categoryScreens";
import MealsScreens from "./screens/mealsScreens";
import Details from "./screens/detailsScreens";
import Favourite from "./screens/favouriteScreens";
import FavouriteContextProvider from "./store/context/FavouriteContext";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";
import { Ionicons } from "@expo/vector-icons";
import {
  CardStyleInterpolators,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: "front",
        headerStyle: { backgroundColor: "rgb(54, 11, 10)" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#f6cbcb" },
        drawerContentStyle: {
          backgroundColor: "rgb(142, 76, 75)",
        },
        drawerActiveTintColor: "rgb(243, 161, 158)",
        drawerInactiveTintColor: "white",
        drawerActiveBackgroundColor: "rgb(54, 11, 10)",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoryScreens}
        options={{
          title: "All Categoies",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />

      <Drawer.Screen
        name="Favourite"
        component={Favourite}
        options={{
          title: "Favourites",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const options = {
  gestureEnabled: true,
  gestureDirection: "horizontal",
  cardStyleInterpolator: CardStyleInterpolators,
  headerShown: "true",
  headerStyle: {
    backgroundColor: "rgb(54, 11, 10)",
  },
  headerTintColor: "white",
  contentStyle: {
    backgroundColor: "#f6cbcb",
  },
  headerTitleAlign: "center",
  headerTitleStyle: {
    fontSize: 22,
  },
  headerBackTitleStyle: {
    fontSize: 18,
  },
};

export default function App() {
  return (
    //With Context API <>
    //   <StatusBar style="light" />
    //   <FavouriteContextProvider>
    //     <NavigationContainer>
    //       <Stack.Navigator initialRouteName="Home" screenOptions={options}>
    //         <Stack.Screen
    //           name="Home"
    //           component={DrawerNavigator}
    //           options={{
    //             headerShown: false,
    //           }}
    //         />
    //         <Stack.Screen name="Meals" component={MealsScreens} />
    //         <Stack.Screen name="Details" component={Details} />
    //       </Stack.Navigator>
    //     </NavigationContainer>
    //   </FavouriteContextProvider>
    // </>

    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" screenOptions={options}>
            <Stack.Screen
              name="Home"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="Meals" component={MealsScreens} />
            <Stack.Screen name="Details" component={Details} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#24180f",
  },
});

/*
<View style={styles.container}>
            <CategoryScreens />
          </View> 
*/
