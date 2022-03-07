import { useContext } from 'react';

import FavoritesContext from '../store/favorites-context';
import PizzaList from '../components/pizzas/PizzaList';

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;
 
  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    content = <PizzaList pizzas={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;