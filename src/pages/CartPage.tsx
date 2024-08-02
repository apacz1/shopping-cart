import { useCart } from "../components/CartContext";

export default function CartPage() {
  const { cart, decreaseQuantity, increaseQuantity } = useCart();

  return (
    <div className="flex justify-center pt-24">
      <ul role="list" className="divide-y divide-sky-300 w-1/2">
        {cart.length === 0 ? (
          <h1>Cart is empty!</h1>
        ) : (
          cart.map((item) => (
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
          ))
        )}
      </ul>
    </div>
  );
}
