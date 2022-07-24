import { useCart } from "helpers/hooks/useCart";
import { isExist } from "helpers/utilities/isExist";
import Image from "next/image";
import { ProductType } from "types/productTypes";

interface ProductProps {
  product: ProductType;
}

const ProductItem = (props: ProductProps) => {
  const { product } = props;

  const { handleIncrementCartItem, cart } = useCart();

  return (
    <figure className="relative border-b hover:shadow-lg hover:z-10 transition cursor-pointer flex flex-row md:flex-col">
      <div className="overflow-hidden relative w-[100px] h-[100px] md:w-full md:h-[270px]">
        <Image src={product.image} layout="fill" draggable={false} priority />
      </div>
      <figcaption className="p-2 md:p-5 relative flex flex-row md:flex-col flex-1">
        {product.discount > 0 && (
          <span className="absolute top-7 md:-top-3 bg-rose-300 text-xs w-8 h-8 font-bold rounded-full flex justify-center items-center">
            {product.discount}%
          </span>
        )}
        <p className="text-center text-sm md:text-xl font-bold mb-2">
          {product.name}
        </p>
        <div className="text-gray-400 text-right hidden md:block text-sm">
          {product.description.slice(0, 2).map((desc) => (
            <p key={desc._id}>{desc.support}</p>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center md:mt-5 ml-auto">
          <p className="text-xs md:text-base">{product.offPrice} $</p>
          <button
            onClick={() => handleIncrementCartItem({ ...product, qty: 1 })}
            className="rounded-full px-3 py-1 bg-rose-500 text-white md:ml-5 text-xs md:text-base"
          >
            {isExist(cart, product._id) ? "In cart" : "Add to cart"}
          </button>
        </div>
      </figcaption>
    </figure>
  );
};

export default ProductItem;
