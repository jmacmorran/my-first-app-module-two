import { useState, useEffect } from "react";

import PizzaList from "../components/pizzas/PizzaList";

function AllPizzas() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedpizzas, setLoadedpizzas] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://a-pizza-my-heart-default-rtdb.firebaseio.com/new-pizzas.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const pizzas = [];

        for (const key in data) {
          const pizzas = {
            id: key,
            ...data[key],
          };

          pizzas.push(pizzas);
        }

        setIsLoading(false);
        setLoadedpizzas(pizzas);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Pizzas</h1>
      <PizzaList pizzas={loadedpizzas} />
    </section>
  );
}

export default AllPizzas;
