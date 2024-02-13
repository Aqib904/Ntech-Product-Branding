import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import HeroSection from "./landingComponent/HeroSection";
import Articles from "./Articles/Articles";
import { VehyaNews } from "../components/VehyaNews";
import UniversalWall from "./landingComponent/UniversalWall";
import Testimonials from "./landingComponent/Testimonials";
import { GetArticles } from "../store/action/articleAction";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { getDashboardVideos } from "../store/action/mapAction";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo"
import Head from "next/head";

export default function index() {
  const router = useRouter();
  const { pathname } = router;
  const dispatch = useDispatch();
  const { articleData } = useSelector((state) => state.article);
  const { Videos } = useSelector((state) => state.map);
  const [article, setArticle] = useState({ NewsArticles: [] });
  const [pagesNumber, setPagesNumber] = useState([]);
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
  const handleDecrementPage = () => {
    if (Videos?.PageNo > 1) {
      dispatch(getDashboardVideos(Videos?.PageNo - 1));
    }
  };
  const handlePageClick = (page) => {
    if (Videos?.PageNo <= Videos?.TotalPages) {
      if (page != Videos?.PageNo) {
        dispatch(getDashboardVideos(page));
      }
    }
  };
  const handleIncrementPage = () => {
    if (Videos?.PageNo < Videos?.TotalPages) {
      dispatch(getDashboardVideos(Videos?.PageNo + 1));
    }
  };
  // const articles = [
  //   {
  //     image: "/firstcharge.png",
  //     articleName: "Service PROS",
  //     title: "set video playback speed with javascript",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  //   },
  //   {
  //     image: "/secondCharge.png",
  //     articleName: "Service PROS",
  //     title: "set video playback speed with javascript",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  //   },
  //   {
  //     image: "/thirdcharge.png",
  //     articleName: "Service PROS",
  //     title: "set video playback speed with javascript",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  //   },
  // ];
  useEffect(() => {
    if (articleData.NewsArticles && articleData.NewsArticles.length >= 3) {
      const firstThreeArticles = articleData.NewsArticles.slice(0, 3);
      setArticle({ NewsArticles: firstThreeArticles });
    }
  }, [articleData]);
  useEffect(() => {
    dispatch(GetArticles(1));
  }, []);
  useEffect(() => {
    if (pathname == "/") {
      dispatch(getDashboardVideos(1));
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
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  return (
    <>
      <NextSeo
        title={'Vehya'}
        description={'Vehya is the premier app for electrical contractors and electricians looking to expand their services to the rapidly growing electric vehicle market. With the ability to serve customers globally and access to in-app training programs for everyone to become an EV service provider, you can be sure that you have the skills and knowledge necessary to provide top-notch service.'}
        canonical={`https://aboutvehya.com`}
        openGraph={{
          type: "article",
          url: `https://aboutvehya.com`,
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
      <div style={{ position: 'relative', width: "100%" }}>
        <Head>
          <title>About Vehya</title>
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
        <HeroSection />
        <div className="container-padding">
          <hr className='hr' />
          <Row className="mt-n2">
            <Col>
              <div className="mx-3">
                <Articles data={article} page={"landing"} />
              </div>
            </Col>
          </Row>
        </div>

        <div className="container-padding">
          <VehyaNews />
        </div>
        <UniversalWall />
        <div className="container-padding">
          <Testimonials data={Videos} />
        </div>

        <div className="container-padding">
          <Row className="d-flex my-2 popular-article">
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
          <Row>
            <Col className="d-flex align-items-center justify-content-center">
              <Link
                className="dark text-light rounded mt-2 py-3 px-3 text-decoration-none"
                target="_blank"
                href={"https://www.vehya.com/#/home"}
              >
                Vehya Marketplace
              </Link>
            </Col>
          </Row>
        </div>
        <button className='scroll-btn btn' onClick={scrollToTop} style={{

          display: isVisible ? 'block' : 'none'
          // border: 'none'
        }}>scroll

          &rarr;</button>
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