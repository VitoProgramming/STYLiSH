import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Product from "./components/product/Product";
import Checkout from "./components/checkout/Checkout";
import Profile from "./components/profile/Profile";
import "./App.css";

function App() {
  const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");
  const [cart, setCart] = useState(cartFromLocalStorage);
  const totalQuantity = cart.reduce(
    (accumulator, currentObject) => accumulator + currentObject.prodQuantity,
    0
  );

  return (
    <>
      <Routes>
        <Route
          path="/product"
          element={
            <>
              <Header cartQuantity={totalQuantity} />
              <Product onCart={cart} onSetCart={setCart} />
              <Footer />
            </>
          }
        />

        <Route
          path="/cart"
          element={
            <>
              <Header cartQuantity={totalQuantity} />
              <Checkout onCart={cart} onSetCart={setCart} />
              <Footer />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <Header cartQuantity={totalQuantity} />
              <Profile />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
