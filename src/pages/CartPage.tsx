import { useCart } from "../components/CartContext";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { cart, decreaseQuantity, increaseQuantity } = useCart();
  let tempTotal: number = 0;
  const addTotal = () => {
    cart.forEach(
      (item) => (tempTotal = tempTotal + item.quantity * item.price)
    );
    return tempTotal;
  };
  const total = addTotal();

  return (
    <div className="flex justify-center pt-24">
      {cart.length === 0 ? (
        <div className="flex flex-col justify-center  pt-24">
          <h1 className="text-2xl">
            Your cart is currenly empty. Start by adding items to the cart.
          </h1>
          <Link to="/shop" className="text-center p-2">
            <button className="text-slate-700 text-2xl rounded-md border-2 p-2 hover:border-slate-700">
              SHOP NOW
            </button>
          </Link>
        </div>
      ) : (
        <ul role="list" className="divide-y divide-sky-300 w-1/2">
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between gap-x-6 py-5">
              <div className="flex min-w-0 gap-x-4">
                <img
                  src={item.image}
                  className="h-12 w-12 flex-none rounded-full bg-gray-50"
                />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {item.title}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {item.price}$
                  </p>
                </div>
              </div>
              <div className="shrink-0 flex items-center justify-center gap-2">
                <button
                  className="px-4 py-1 rounded-md hover:bg-neutral-300 active:bg-neutral-200"
                  onClick={() => decreaseQuantity(item)}
                >
                  -
                </button>
                <p className="text-sm leading-6 text-gray-900 w-6 text-center">
                  {item.quantity}
                </p>
                <button
                  className="px-4 py-1 rounded-md hover:bg-neutral-300 active:bg-neutral-200"
                  onClick={() => increaseQuantity(item)}
                >
                  +
                </button>
              </div>
            </li>
          ))}
          <div className="text-right text-2xl">Total: {total.toFixed(2)}$</div>
        </ul>
      )}
    </div>
  );
}
