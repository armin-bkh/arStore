import ProductItem from "components/ProductItem/ProductItem";
import { serverAuth } from "helpers/utilities/serverAuth";
import { useState } from "react";
import { wrapper } from "redux/store";
import { getProducts } from "services/getProducts";
import { ProductType } from "types/productTypes";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res }) => {
      const { data } = await getProducts();
      serverAuth(store, req, res);
      return {
        props: {
          products: data,
        },
      };
    }
);

interface ProductsPageProps {
  products: ProductType[];
}

function ProductsPage(props: ProductsPageProps) {
  const { products } = props;
  const [productsList, setProductsList] = useState<ProductType[] | null>(
    products || null
  );
  return (
    <main className="safeArea grid grid-cols-4 p-5">
      <section className="col-span-4 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {productsList && productsList.length > 0
          ? productsList.map((product) => (
              <ProductItem key={product._id} product={product} />
            ))
          : null}
      </section>
    </main>
  );
}

export default ProductsPage;
