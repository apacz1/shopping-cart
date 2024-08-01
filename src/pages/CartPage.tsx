import { useCart } from "../components/CartContext";

export default function CartPage() {
  const { cart } = useCart();
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {cart.length === 0 ? (
        <h1>Cart is empty!</h1>
      ) : (
        cart.map((item) => (
          <li key={item.id} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img
                src={item.img}
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {item.itemName}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {item.price}$
                </p>
              </div>
            </div>
            <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">{item.quantity}</p>
            </div>
          </li>
        ))
      )}
    </ul>
  );
}
