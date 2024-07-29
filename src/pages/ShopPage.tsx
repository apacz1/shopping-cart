import Card from "../components/CardItem";
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

  return (
    <div className="h-[calc(100vh-96px)] bg-neutral-100">
      {data.map((item) => {
        return (
          <Card
            key={item.id}
            name={item.title}
            url={item.image}
            price={`${item.price}$`}
          />
        );
      })}
    </div>
  );
}
