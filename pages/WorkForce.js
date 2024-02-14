import React, { useEffect, useState } from "react";
import MainSection from "./WorkForce/MainSection";
import Features from "./ServicePros/Features";
import Demos from "./WorkForce/Demos";
import { Col, Row } from "reactstrap";
import Link from "next/link";
import { NextSeo } from "next-seo"
import Head from "next/head";

export default function WorkForce() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <>
      <NextSeo
        title={'Ntech'}
        description={'NTech Product Branding is the premier app for electrical contractors and electricians looking to expand their services to the rapidly growing electric vehicle market. With the ability to serve customers globally and access to in-app training programs for everyone to become an EV service provider, you can be sure that you have the skills and knowledge necessary to provide top-notch service.'}
        canonical={`https://aboutvehya.com/WorkForce`}
        openGraph={{
          type: "article",
          url: `https://aboutvehya.com/WorkForce`,
          title: 'NTech',
          description: 'NTech Product Branding is the premier app for electrical contractors and electricians looking to expand their services to the rapidly growing electric vehicle market. With the ability to serve customers globally and access to in-app training programs for everyone to become an EV service provider, you can be sure that you have the skills and knowledge necessary to provide top-notch service.',
          images: [
            {
              url: `https://www.dev.aboutvehya.com/logo1.png`,
              alt: 'Vehya', // You can use a more descriptive alt text if needed
            },
          ],
        }}
      />
      <div style={{ width: "100%", position: 'relative' }}>
        <div className="container-padding">
          <Head>
            <title>Ntech Product Branding</title>
            <meta property="og:title" content={'Vehya'} />
            <meta
              property="og:description"
              content={'NTech Product Branding is  the premier app for electrical contractors and electricians looking to expand their services to the rapidly growing electric vehicle market. With the ability to serve customers globally and access to in-app training programs for everyone to become an EV service provider, you can be sure that you have the skills and knowledge necessary to provide top-notch service.'}
            />
            <meta
              name="image" property="og:image"
              content={`https://www.dev.aboutvehya.com/logo1.png`}
            />
            <meta property="og:type" content="website" />
          </Head>
          <MainSection />
          <Features />
          <Demos />
          {/* <Row>
            <Col className="d-flex align-items-center justify-content-center">
              <Link
                className="dark text-light rounded mt-2 py-3 px-3 text-decoration-none"
                target="_blank"
                href={"https://www.vehya.com/#/home"}
              >
                Vehya Marketplace
              </Link>
            </Col>
          </Row> */}
        </div>
        <button className='scroll-btn btn' onClick={scrollToTop} style={{

          display: isVisible ? 'block' : 'none'
          // border: 'none'
        }}>Scroll &rarr;</button>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.query;

  try {
    const response = await axios.get(
      `${globalUrl}/News_Feed/get_news_by_TITLE?Title=${slug}`
    );

    // Pass the fetched data as props
    return {
      props: {
        singleDataArticle: response.data, // Adjust this according to your API response structure
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        singleData: null, // You can handle error cases here or show default data
      },
    };
  }
}
