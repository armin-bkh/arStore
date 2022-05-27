import type { GetServerSideProps } from "next";
import styles from "styles/home.module.css";
import Head from "next/head";
import Link from "next/link";
import { MdOutlineDeliveryDining, MdMoreTime } from "react-icons/md";
import { FaBoxOpen, FaShoppingCart } from "react-icons/fa";
import Service from "components/Service/Service";
import { getProducts } from "services/getProducts";
import Image from "next/image";
import { ProductType } from "types/productTypes";

const services = [
  {
    id: 1,
    title: "Free Shipping",
    description: "we delivery free shipping world wide",
    icon: MdOutlineDeliveryDining,
    theme: "bg-[#2563eb]",
  },
  {
    id: 2,
    title: "Support 24/8",
    description: "we support our customers 24 hours",
    icon: MdMoreTime,
    theme: "bg-[#f43f5e]",
  },
  {
    id: 3,
    title: "Returns",
    description: "we can return our product after 7 days",
    icon: FaBoxOpen,
    theme: "bg-[#f43f5e]",
  },
  {
    id: 4,
    title: "Track Order",
    description: "you can track product in online",
    icon: FaShoppingCart,
    theme: "bg-[#f97316]",
  },
];

interface HomePagePropsType {
  products: ProductType[];
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await getProducts();
  return {
    props: {
      products: data.slice(0, 4),
    },
  };
};

const HomePage = (props: HomePagePropsType) => {
  const { products } = props;

  return (
    <>
      <Head>
        <title>Home | ArStore</title>
      </Head>
      <main>
        <section className="overflow-hidden">
          <div
            className={`${styles.introductionSection} p-5 min-h-[70vh] text-white flex justify-center items-center`}
          >
            <div className="flex flex-col items-center p-5 rounded-md">
              <p className="text-4xl lg:text-6xl text-center lg:text-left mb-10 lg:w-2/3">
                Life is better with{" "}
                <span className="text-sky-400 text-6xl lg:text-8xl">Ar</span>{" "}
                shoes
              </p>
              <Link href="/auth/signup">
                <a className="bg-sky-400 rounded-md px-10 py-2 block">
                  Start the tour
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-10 sm:flex-row flex-wrap justify-evenly py-10 items-center safeArea">
          {services.map((service) => (
            <Service
              key={service.id}
              service={service}
              ServiceIcon={service.icon}
            />
          ))}
        </section>
        <section className="flex flex-col sm:flex-row flex-wrap justify-center py-10 items-center safeArea">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </section>
        <section className="text-white bg-violet-400 text-center font-bold py-10 mb-10 px-5">
          <p className="text-3xl xl:text-5xl mb-2">Please join us</p>
          <p className="text-xl xl:text-3xl mb-10">
            and take advantage of our good facilities.
          </p>
          <Link href="/auth/singup">
            <a className="bg-white px-10 py-2 rounded-md text-violet-400">
              Join now
            </a>
          </Link>
        </section>
      </main>
    </>
  );
};

export default HomePage;

interface ProductPropsType {
  product: ProductType;
}

const Product = (props: ProductPropsType) => {
  const { product } = props;

  return (
    <figure className="relative overflow-hidden border-b hover:shadow-lg transition cursor-pointer">
      <div className="overflow-hidden relative w-[250px] h-[250px]">
        <Image src={product.image} layout="fill" draggable={false} priority />
      </div>
      <figcaption className="p-5">
        <p className="text-center text-xl font-bold mb-2">{product.name}</p>
        <div className="text-gray-400 text-right text-sm">
          {product.description.slice(0, 2).map((desc) => (
            <p key={desc._id}>{desc.support}</p>
          ))}
        </div>
        <div className="flex justify-center items-center mt-5">
          <p>{product.offPrice} $</p>
          <button className="rounded-full px-3 py-1 bg-rose-500 text-white ml-5">
            Add to cart
          </button>
        </div>
      </figcaption>
    </figure>
  );
};
