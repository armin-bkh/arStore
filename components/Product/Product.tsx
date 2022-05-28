import Image from "next/image";
import { ProductType } from "types/productTypes";

interface ProductProps {
  product: ProductType;
}

const Product = (props: ProductProps) => {
  const { product } = props;

  return (
    <figure className="relative border-b hover:shadow-lg hover:z-10 transition cursor-pointer flex flex-row md:flex-col">
      <div className="overflow-hidden relative w-[100px] h-[100px] md:w-full md:h-[270px]">
        <Image src={product.image} layout="fill" draggable={false} priority />
      </div>
      <figcaption className="p-2 md:p-5 flex flex-row md:flex-col flex-1">
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
          <button className="rounded-full px-3 py-1 bg-rose-500 text-white md:ml-5 text-xs md:text-base">
            Add to cart
          </button>
        </div>
      </figcaption>
    </figure>
  );
};

export default Product;
