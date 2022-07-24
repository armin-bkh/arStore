import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "styles/globals.css";
import { AppProps } from "next/app";
import Layout from "Layout/Layout";
import { wrapper } from "redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <ToastContainer />
      <Component {...pageProps} />
    </Layout>
  );
}

export default wrapper.withRedux(MyApp);
