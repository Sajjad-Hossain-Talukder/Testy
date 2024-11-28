import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const FavouriteSlice = createSlice({
  name: "favourite",
  initialState: {
    ids: [],
  },
  reducers: {
    addFavourite: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavourite: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export default FavouriteSlice.reducer;

export const addFavourite = FavouriteSlice.actions.addFavourite;
export const removeFavourite = FavouriteSlice.actions.removeFavourite;
