import type { NextPage } from "next";
import styles from "styles/home.module.css";
import Head from "next/head";
import Link from "next/link";
import { MdOutlineDeliveryDining, MdMoreTime } from "react-icons/md";
import { FaBoxOpen, FaShoppingCart } from "react-icons/fa";
import Service from "components/Service/Service";

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

const HomePage: NextPage = () => {
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
              <Link href="/login">
                <a className="bg-sky-400 rounded-md px-10 py-2 block">
                  Start the tour
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section className="flex flex-col sm:flex-row flex-wrap justify-evenly py-10 items-center safeArea">
          {services.map((service) => (
            <Service
              key={service.id}
              service={service}
              ServiceIcon={service.icon}
            />
          ))}
        </section>
      </main>
    </>
  );
};

export default HomePage;
