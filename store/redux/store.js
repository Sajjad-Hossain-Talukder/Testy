import { configureStore } from "@reduxjs/toolkit";
import FavouriteReducer from "./favourite";

export const store = configureStore({
  reducer: {
    favouriteMeals: FavouriteReducer,
  },
});
