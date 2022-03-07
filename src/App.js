import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AllPizzas from "./pages/AllPizzas";
import OrderPizza from "./pages/OrderNewPizza";
import Favorites from "./pages/Favorites";
import Layout from "./components/layouts/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<AllPizzas />} />
          <Route path="/order-pizza" element={<OrderPizza />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
