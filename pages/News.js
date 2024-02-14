import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Button, Col, Row } from "reactstrap";
import { VehyaNews } from "../components/VehyaNews";

import Image from "next/image";
import Articles from "./Articles/Articles";
import { useDispatch, useSelector } from "react-redux";
import {
  GetArticles,
  GetArticlesCharging,
  setArticleId,
} from "../store/action/articleAction";
import { GetProductsChargers } from "../store/action/productAction";
import { useRouter } from "next/router";
import { GetFeaturedProduct } from "../store/action/featuredAction";
import Link from "next/link";
import { globalUrl } from "../components/Url";
import { NextSeo } from "next-seo";
import Head from "next/head";

export default function News() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { pathname } = router;
  const { articleData, articleChargingData } = useSelector(
    (state) => state.article
  );
  const { allProductsChargers } = useSelector((state) => state.product);
  const { evCharger } = useSelector((state) => state.featured);
  const [topChargingObject, setTopChargingObject] = useState({});
  const [topChargingArticle, setTopChargingArticle] = useState([]);
  console.log(topChargingArticle, "topCharging");
  const [matchingFeature, setMatchingFeature] = useState({});
  const teslaUniversalImgStyles = {
    backgroundImage: `url(${matchingFeature?.evChargerImage})`,
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    borderRadius: "10px",
  };
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  // const dataArticle = [
  //   {
  //     img: "/articleImg.png",
  //     header: " Set Video Payback Speed with javascript",
  //     title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
  //   },
  //   {
  //     img: "/articleImg.png",
  //     header: " Set Video Payback Speed with javascript",
  //     title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
  //   },
  //   {
  //     img: "/articleImg.png",
  //     header: " Set Video Payback Speed with javascript",
  //     title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
  //   },
  // ];
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
  //   {
  //     image: "/thirdcharge.png",
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
  //   {
  //     image: "/thirdcharge.png",
  //     articleName: "Service PROS",
  //     title: "set video playback speed with javascript",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  //   },
  // ];
  useEffect(() => {
    if (articleChargingData && articleChargingData.Charging) {
      const chargingArray = articleChargingData.Charging;
      if (chargingArray.length > 0) {
        // Get the top object (index 0)
        const topCharging = chargingArray[0];
        setTopChargingObject(topCharging);
        const topChargingData = chargingArray?.slice(1, 4);
        setTopChargingArticle(topChargingData);
      }
    }
  }, [articleChargingData]);
  useEffect(() => {
    if (allProductsChargers && allProductsChargers?.data) {
      const matchingCharger = allProductsChargers?.data.find(
        (charger) => charger?.evChargerID === evCharger?.ProductsID
      );

      if (matchingCharger) {
        setMatchingFeature(matchingCharger);
      }
    }
  }, [allProductsChargers, evCharger]);
  useEffect(() => {
    dispatch(GetFeaturedProduct(pathname));
  }, [pathname]);
  useEffect(() => {
    dispatch(GetArticles(1));
    dispatch(GetProductsChargers());
    dispatch(GetArticlesCharging());
  }, []);

  return (
    <>
      <NextSeo
        title={"Vehya"}
        description={
          "Vehya is the premier app for electrical contractors and electricians looking to expand their services to the rapidly growing electric vehicle market. With the ability to serve customers globally and access to in-app training programs for everyone to become an EV service provider, you can be sure that you have the skills and knowledge necessary to provide top-notch service."
        }
        canonical={`https://aboutvehya.com/News`}
        openGraph={{
          type: "article",
          url: `https://aboutvehya.com/News`,
          title: "Vehya",
          description:
            "Vehya is the premier app for electrical contractors and electricians looking to expand their services to the rapidly growing electric vehicle market. With the ability to serve customers globally and access to in-app training programs for everyone to become an EV service provider, you can be sure that you have the skills and knowledge necessary to provide top-notch service.",
          images: [
            {
              url: `https://www.dev.aboutvehya.com/logo1.png`,
              alt: "Vehya", // You can use a more descriptive alt text if needed
            },
          ],
        }}
      />
      <div style={{ width: "100%", position: "relative" }}>
        <div className="container-padding">
          <Head>
            <title>Ntech Product Branding</title>
            <meta property="og:title" content={"Vehya"} />
            <meta
              property="og:description"
              content={
                "NTech Product Branding is the premier app for electrical contractors and electricians looking to expand their services to the rapidly growing electric vehicle market. With the ability to serve customers globally and access to in-app training programs for everyone to become an EV service provider, you can be sure that you have the skills and knowledge necessary to provide top-notch service."
              }
            />
            <meta
              name="image"
              property="og:image"
              content={`https://www.dev.aboutvehya.com/logo1.png`}
            />
            <meta property="og:type" content="website" />
          </Head>
          <Row className="popular-article border-bottom mb-3 news-padding-container">
            <Col lg="7" className="border-right pl-1">
              <div
                className="cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  const slug = encodeURIComponent(
                    topChargingObject?.Title.replace(/\s+/g, "-")
                  );
                  router.push({
                    pathname: `${slug}`,
                  });
                }}
              >
                <div className="news-main-banner">
                  <img
                    src={`${globalUrl}/News_Feed/Send-File-Response?FilePath=${topChargingObject?.Image}`}
                    height={370}
                    alt="universalTesla"
                    className="w-100 pros-style"
                  />
                </div>
                <p className="popular-article__tag news-kerning-tag">
                  {topChargingObject?.Category}
                </p>
                <p className="popular-article__header news-header-text">
                  {topChargingObject?.Title}
                </p>
                <p className="news-img-desc ShortService ">
                  {topChargingObject?.ShortDescription}
                </p>
              </div>
            </Col>
            <Col
              lg="5"
              className="news-top pl-lg-4 pl-md-0 pl-sm-0 pl-0 pr-0 pr-md-3 pr-xl-3 pr-lg-3"
            >
              <div className="row news-padding-container pl-xl-2 pl-lg-2">
                <h6 className="popular-article__topTitle font-weight-bold py-1">
                  Popular Articles
                </h6>
              </div>

              {topChargingArticle?.map((obj, index) => (
                <>
                  <Row
                    className="d-flex my-2 pl-xl-0 pl-lg-0 cursor-pointer news-padding-container"
                    onClick={(e) => {
                      e.preventDefault();
                      router.push({
                        pathname: `${encodeURIComponent(
                          obj?.Title.replace(/\s+/g, "-")
                        )}`,
                      });
                      // router.push({
                      //   pathname: "/ArticleDetail",
                      //   query: { data: obj?.id },
                      // });
                    }}
                  >
                    <Col
                      xs="12"
                      sm="4"
                      lg="6"
                      className="pr-xl-1 pr-0 pl-xl-2 pl-lg-0 pl-0"
                    >
                      <div className="article-main-div">
                        <img
                          src={`${globalUrl}/News_Feed/Send-File-Response?FilePath=${obj?.Image}`}
                          // width={150}
                          width="100%" /* Set a specific width */
                          height="auto"
                          alt="articleImg"
                          className=" d-inline-block d-sm-block h-100 p-0 img-fluid pros-style"
                        />
                      </div>
                    </Col>
                    <Col xs="12" sm="8" lg="6" className="px-xl-3 pl-lg-3 pl-md-3 pl-0">
                      <div>
                        <p className="popular-article__tag video-tag px-2 mt-2 mt-lg-0 mt-xl-0 mt-md-0" style={{ marginBottom: "4px" }}>
                          {obj?.Category}
                        </p>
                        <h6 className="popular-article__header-article ShortService ">
                          {obj?.Title}
                        </h6>
                        <p className="fs--14 ShortService ">
                          {obj.ShortDescription}
                        </p>
                      </div>
                    </Col>
                    {index !== topChargingArticle.length - 1 && (
                      <hr className="my-2 w-100" />
                    )}
                  </Row>
                </>
              ))}
            </Col>
          </Row>

          <Row className="news-padding-container">
            {articleChargingData?.Resiliency?.slice(0, 2)?.map((item) => {
              return (
                <Col
                  md="4"
                  sm="6"
                  className="pl-0 pr-0 pr-md-3 pr-xl-3 pr-lg-3"
                >
                  <div
                    className="cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      router.push({
                        pathname: `${encodeURIComponent(
                          item?.Title.replace(/\s+/g, "-")
                        )}`,
                      });
                    }}
                  >
                    <div className="image-container">
                      <img
                        src={`${globalUrl}/News_Feed/Send-File-Response?FilePath=${item?.Image}`}
                        alt="universalTesla"
                        className="img-fluid w-100 h-100 aticle-image pros-style"
                      />
                    </div>
                    <p
                      className="popular-article__tag bg-site-tag px-2"
                      style={{ marginTop: "16" }}
                    >
                      {item?.Category}
                    </p>
                    <h3 className="popular-article__header ShortService">
                      {item?.Title}
                    </h3>
                    <p className="ShortService service-pro-desc" >
                      {item?.ShortDescription}
                    </p>
                  </div>
                </Col>
              );
            })}

            <Col md="4" sm="6" className="p-0">
              <div style={teslaUniversalImgStyles}>
                <div className="d-flex justify-content-center align-items-center">
                <h2 className="newsadText">Ad</h2>
                  <div className="mt-5 px-2 py-5 d-flex align-items-center">
                    <div className="px-2">
                      <h6 className="my-1 popular-article__tesla-wall tesla-header-text">
                        {matchingFeature?.evChargerName}
                      </h6>
                      <h6 className="popular-article__retail-price">
                        Retail ${matchingFeature?.evChargerPrice}
                      </h6>
                      <p className="popular-article__price">
                        Price ${matchingFeature?.evChargerSalePrice}
                      </p>
                      <div>
                        <Link
                          className="text-dark mt-4 "
                          target="_blank"
                          href={
                            "https://www.vehya.com/#/productInfo?productId=01d26c45-0c42-460a-83c1-fd237b52e0a9"
                          }
                        >
                          <Button className="popular-article__btn font-weight-bold">
                            Learn more
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="my-3 news-padding-container">
            <VehyaNews />
          </Row>
          {/* <div className="mx-1"> */}
          <div>
            <Articles data={articleData} page={"news"} />
          </div>
        </div>
        <button
          className="scroll-btn btn"
          onClick={scrollToTop}
          style={{
            display: isVisible ? "block" : "none",
            // border: 'none'
          }}
        >
          Scroll &rarr;
        </button>
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
