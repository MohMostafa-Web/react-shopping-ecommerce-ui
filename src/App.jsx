import { Route, Routes } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import SingleProduct from "./pages/SingleProduct";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import NoMatched from "./pages/NoMatched";

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<ProductList />} />
        <Route path="product" element={<SingleProduct />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<NoMatched />} />
      </Routes>
    </>
  );
}

export default App;
