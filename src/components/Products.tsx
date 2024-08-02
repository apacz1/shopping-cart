import { Item } from "../types/types";
import { useCart } from "./CartContext";
export default function Products({ data }: { data: Item[] }) {
  const { addToCart } = useCart();
  return (
    <div className="bg-neutral-100">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <div key={product.id} className="group relative flex flex-col">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:h-80">
                <img
                  src={product.image}
                  className="h-full w-full object-contain object-center lg:h-full lg:w-full bg-white"
                />
              </div>
              <div className="mt-4 flex-grow">
                <h3 className="text-sm text-gray-700">{product.title}</h3>
              </div>
              <div className="flex justify-between items-center mt-2">
                <p className="text-sm font-medium text-gray-900">
                  {product.price}$
                </p>
                <button
                  className="px-4 py-2 rounded-md hover:bg-neutral-300 active:bg-neutral-200"
                  onClick={() => addToCart(product)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
