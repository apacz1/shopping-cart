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

export type CartItem = Item & { quantity: number };

export type CartContextType = {
  cart: CartItem[];
  addToCart: (item: Item) => void;
  increaseQuantity: (cartItem: CartItem) => void;
  decreaseQuantity: (cartItem: CartItem) => void;
};
