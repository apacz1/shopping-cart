import Products from "../components/Products";
import { useEffect, useState } from "react";
import axios from "axios";
import { Item } from "../types/types";

export default function ShopPage() {
  const [data, setData] = useState<Item[]>([]);

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

  return <Products data={data} />;
}
