import Products from "../components/Products";
import { useEffect, useState } from "react";
import axios from "axios";
import { Item } from "../types/types";
import { useCart } from "../components/CartContext";

export default function ShopPage() {
  const [data, setData] = useState<Item[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products?limit=12"
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  return <Products data={data} addToCart={addToCart} />;
}
