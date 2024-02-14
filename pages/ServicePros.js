import React, { useEffect, useState } from "react";
import TopSection from "./ServicePros/TopSection";
import Features from "./ServicePros/Features";
import Testimonials from "./landingComponent/Testimonials";
import Map from "../components/Map";
import { Button, Col, Container, Row } from "reactstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import { getServiceProsVideos } from "../store/action/mapAction";
import { useDispatch, useSelector } from "react-redux";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { NextSeo } from "next-seo"
import Head from "next/head";

export default function ServicePros() {

  const dispatch = useDispatch();
  const router = useRouter();
  const [pagesNumber, setPagesNumber] = useState([]);
  const { pathname } = router;
  const { Videos } = useSelector((state) => state.map);
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

  const handleDecrementPage = () => {
    if (Videos?.PageNo > 1) {
      dispatch(getServiceProsVideos(Videos?.PageNo - 1));
    }
  };
  const handlePageClick = (page) => {
    if (Videos?.PageNo <= Videos?.TotalPages) {
      if (page != Videos?.PageNo) {
        dispatch(getServiceProsVideos(page));
      }
    }
  };
  const handleIncrementPage = () => {
    if (Videos?.PageNo < Videos?.TotalPages) {
      dispatch(getServiceProsVideos(Videos?.PageNo + 1));
    }
  };
  useEffect(() => {
    if (pathname == "/ServicePros") {
      dispatch(getServiceProsVideos(1));
    }
  }, []);
  useEffect(() => {
    if (Videos && Videos.TotalPages) {
      const totalPages = Videos.TotalPages;
      const newPagesNumber = Array.from(
        { length: totalPages },
        (_, index) => index + 1
      );
      setPagesNumber(newPagesNumber);
    }
  }, [Videos]);
  return (
    <>
      <NextSeo
        title={'Vehya'}
        description={'Vehya is the premier app for electrical contractors and electricians looking to expand their services to the rapidly growing electric vehicle market. With the ability to serve customers globally and access to in-app training programs for everyone to become an EV service provider, you can be sure that you have the skills and knowledge necessary to provide top-notch service.'}
        canonical={`https://aboutvehya.com/ServicePros`}
        openGraph={{
          type: "article",
          url: `https://aboutvehya.com/ServicePros`,
          title: 'Vehya',
          description: 'Vehya is the premier app for electrical contractors and electricians looking to expand their services to the rapidly growing electric vehicle market. With the ability to serve customers globally and access to in-app training programs for everyone to become an EV service provider, you can be sure that you have the skills and knowledge necessary to provide top-notch service.',
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
            <title>Ntech Product Brandinga</title>
            <meta property="og:title" content={'Vehya'} />
            <meta
              property="og:description"
              content={'Vehya is the premier app for electrical contractors and electricians looking to expand their services to the rapidly growing electric vehicle market. With the ability to serve customers globally and access to in-app training programs for everyone to become an EV service provider, you can be sure that you have the skills and knowledge necessary to provide top-notch service.'}
            />
            <meta
              name="image" property="og:image"
              content={`https://www.dev.aboutvehya.com/logo1.png`}
            />
            <meta property="og:type" content="website" />
          </Head>
          <TopSection />
          <Features />
          {/* <Map /> */}

          <Row>
            {/* <Col className="my-5"> */}
            {/* <h3 className="text-justify text-center">
                Don’t take our word, see what our service providers have to say
                about working with us. Check out the videos below to learn more!
              </h3> */}
            {/* </Col> */}
            <Col md="12">
              <div className="responsive-margin-bottom">
                <img src="/map-image.png" style={{ width: '100%', maxHeight: '705px' }} />
              </div>
            </Col>
          </Row>
          <Testimonials data={Videos} />
          <div style={{ width: "100%" }}>
            <div className="container-padding">
              <Row className="d-flex my-2 px-0 popular-article">
                <Col
                  lg="12"
                  className="d-flex align-items-center justify-content-center "
                >
                  <div className="mx-2 cursor" onClick={handleDecrementPage}>
                    <FaAngleLeft />
                  </div>
                  {pagesNumber?.map((page, index) => {
                    return (
                      <div
                        key={index}
                        className={`mx-2 px-2 cursor rounded ${page === Videos?.PageNo
                          ? "dark text-white"
                          : "bg-light text-dark"
                          }`}
                        onClick={() => handlePageClick(page)}
                      >
                        {page}
                      </div>
                    );
                  })}
                  <div className="mx-2 cursor" onClick={handleIncrementPage}>
                    <FaAngleRight />
                  </div>
                </Col>
              </Row>
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
          </div>
        </div>
        <button className='scroll-btn btn' onClick={scrollToTop} style={{

          // transition: 'bottom 0.3s ease-in-out',
          // border: '1px solid red'
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