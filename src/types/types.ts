export type Route = {
  path: string;
  component: React.ReactNode;
};

export type Item = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type CartItem = {
  itemName: string;
  price: number;
};

export type CartContextType = {
  cart: CartItem[];
  addToCart: (item: Item) => void;
};
