import Head from "next/head";
import Navigation from "../navigation";
import { useRouter } from "next/router";
import { Container } from "reactstrap";
import Header from "../Header";
import Footer from "../Footer";
import { useEffect, useState } from "react";

function PageTemplate({ children }) {
  const router = useRouter();
  const [titleLink, setTitleLink] = useState("");
  useEffect(() => {
    document.title = "About Vehya";
  }, []);
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width" />
      </Head>

      <div fluid className="main">
        <Header />
        <Navigation />

        <div className="children">{children}</div>
        <Footer />
      </div>
    </>
  );
}

export default PageTemplate;
