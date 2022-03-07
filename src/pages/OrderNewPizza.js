import { useNavigate } from "react-router-dom";

import NewOrderForm from "../components/pizzas/NewOrderForm";

function OrderNewPizza() {
  const navigate = useNavigate();
  function addSubmitNewOrderHandler(pizzasData) {
    fetch(
      "https://a-pizza-my-heart-default-rtdb.firebaseio.com/order-pizza.json",
      {
        method: "POST",
        body: JSON.stringify(pizzasData),
        headers: {
          "Content-Type": "application/json"
        }
      }
    ).then(() => {
      navigate("/",{replace:true});
    });
  }

  return (
    <section>
      <h1>Order Pizza</h1>
      <NewOrderForm onSubmitNewOrderHandler={addSubmitNewOrderHandler} />
    </section>
  );
}

export default OrderNewPizza;
