import type { NextPage } from "next";
import styles from "styles/home.module.css";
import Head from "next/head";
import Link from "next/link";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | ArStore</title>
      </Head>
      <main>
        <section
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
        </section>
      </main>
    </>
  );
};

export default HomePage;
