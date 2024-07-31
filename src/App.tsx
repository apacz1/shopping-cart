import routes from "./routes";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Cart from "./assets/cart.svg?react";
import { CartProvider } from "./components/CartContext";

function App() {
  return (
    <BrowserRouter>
      <div className="sticky top-0 z-50 flex justify-between items-center px-40 h-24 bg-gradient-to-r from-sky-300 to-sky-200 shadow-inner font-semibold">
        <Link to="/" className="text-5xl font-roboto text-slate-700">
          Shopper
        </Link>
        <div className="flex gap-32">
          <Link to="/" className="text-2xl flex-1 anim-underline text-white">
            Home
          </Link>
          <Link to="shop" className="text-2xl flex-1 anim-underline text-white">
            Shop
          </Link>
          <Link to="checkout">
            <Cart className="w-9 fill-slate-700" />
          </Link>
        </div>
      </div>
      <CartProvider>
        <Routes>
          {routes.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={route.component}
              ></Route>
            );
          })}
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
