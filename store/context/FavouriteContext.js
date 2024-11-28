import { useState, createContext } from "react";

export const FavouriteContext = createContext({
  ids: [],
  addFavourite: (id) => {},
  removeFavourite: (id) => {},
});

function FavouriteContextProvider({ children }) {
  const [favouriteIds, setFavouriteIds] = useState([]);

  function addFavourite(id) {
    setFavouriteIds((currentIds) => [...currentIds, id]);
  }

  function removeFavourite(id) {
    setFavouriteIds((currentIds) => {
      return currentIds.filter((mealId) => mealId !== id);
    });
  }

  const value = {
    ids: favouriteIds,
    addFavourite: addFavourite,
    removeFavourite: removeFavourite,
  };

  return (
    <FavouriteContext.Provider value={value}>
      {children}
    </FavouriteContext.Provider>
  );
}

export default FavouriteContextProvider;
