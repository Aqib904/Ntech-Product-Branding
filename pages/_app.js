import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/styles.scss";
import Layout from "../components/layouts/main";
import { store } from "../store";
import { Provider } from "react-redux";
import { useEffect } from "react";
function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
