import PizzaItem from "./PizzaItem";
import classes from "./PizzaList.module.css";

function PizzaList(props) {
  return (
    <ul className={classes.list}>
      {props.pizzas.map((pizzas) => (
        <PizzaItem
          key={pizzas.id}
          id={pizzas.id}
          image={pizzas.image}
          title={pizzas.title}
          address={pizzas.address}
          description={pizzas.description}
        />
      ))}
    </ul>
  );
}

export default PizzaList;
