import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import { Route } from "./types/types";

const routes: Route[] = [
  { path: "/", component: HomePage() },
  { path: "shop", component: ShopPage() },
  { path: "checkout", component: CartPage() },
];

export default routes;
