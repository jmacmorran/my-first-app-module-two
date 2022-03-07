import { useState, useEffect } from "react";

import PizzaList from "../components/pizzas/PizzaList";

const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'This is a first meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
  {
    id: 'm2',
    title: 'This is a second meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
];


function AllPizzas() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedpizzas, setLoadedpizzas] = useState(DUMMY_DATA);

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
        // setLoadedpizzas(pizzas);
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
