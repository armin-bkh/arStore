import Head from "next/head";
import React from "react";

import { serverAuth } from "helpers/utilities/serverAuth";
import { wrapper } from "redux/store";
import Cart from "components/Cart/Cart";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res }) => {
      serverAuth(store, req, res);
      return {
        props: {},
      };
    }
);

function CartPage() {
  return (
    <>
      <Head>
        <title>Cart | ArStore</title>
      </Head>
      <main>
        <Cart />
      </main>
    </>
  );
}

export default CartPage;
