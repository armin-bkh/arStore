import Image from "next/image";
import { BiPlus, BiMinus, BiTrash } from "react-icons/bi";

import { useCart } from "helpers/hooks/useCart";
import { CartItem } from "redux/cart/cartReducer";

export interface CartItemProps {
  product: CartItem;
}

const CartItem = (props: CartItemProps) => {
  const { product } = props;

  const {
    cart,
    handleDecrementCartItem,
    handleRemoveCartItem,
    handleIncrementCartItem,
  } = useCart();

  return (
    <figure className="bg-white shadow overflow-hidden rounded-md flex flex-col">
      <div className="w-full relative">
        <Image
          src={product.image}
          className="object-contain"
          width={400}
          height={400}
          priority
        />
      </div>
      <figcaption className="p-2 flex flex-col flex-1">
        <div className="mb-5">
          <div className="flex-between">
            <p>{product.name}</p>
            <p>{product.qty}</p>
          </div>
          <div className="flex-between">
            <p>total:</p>
            <p className="text-right mt-2">{product.offPrice * product.qty}$</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-auto">
          <button
            onClick={() => handleIncrementCartItem(product)}
            className="flex-1 flex-center p-2 text-emerald-600 border border-emerald-600 hover:text-white hover:bg-emerald-600 rounded-md transition"
          >
            <BiPlus />
          </button>
          <button
            onClick={() => handleDecrementCartItem(product)}
            className="flex-1 flex-center p-2 text-rose-500 border border-rose-500 hover:text-white hover:bg-rose-500 rounded-md transition"
          >
            {product.qty > 1 ? <BiMinus /> : <BiTrash />}
          </button>
          {product.qty > 1 && (
            <button
              onClick={() => handleRemoveCartItem(product)}
              className="w-full flex-center rounded-md p-2 border-red-500 text-red-500 border hover:bg-red-500 hover:text-white transition"
            >
              <BiTrash />
            </button>
          )}
        </div>
      </figcaption>
    </figure>
  );
};

export default CartItem;
