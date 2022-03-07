import { createContext, useState } from 'react';

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoritepizzas) => {},
  removeFavorite: (pizzasId) => {},
  itemIsFavorite: (pizzasId) => {}
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoritepizzas) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoritepizzas);
    });
  }

  function removeFavoriteHandler(pizzasId) {
    setUserFavorites(prevUserFavorites => {
      return prevUserFavorites.filter(pizzas => pizzas.id !== pizzasId);
    });
  }

  function itemIsFavoriteHandler(pizzasId) {
    return userFavorites.some(pizzas => pizzas.id === pizzasId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;