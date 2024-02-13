import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import { GetArticles } from "../store/action/articleAction";
import Articles from "./Articles/Articles";
import Testimonials from "./landingComponent/Testimonials";
import { useRouter } from "next/router";
import axios from "axios";
import { getDashboardVideos } from "../store/action/mapAction";
import { globalUrl } from "../components/Url";
import Head from "next/head";
import ArticleSEO from "./ArticleSeo";
import { NextSeo } from "next-seo";

export default function ArticleDetail({ singleDataArticle }) {
  const router = useRouter();
  // Split the URL segment
  // const imagePath = singleDataArticle?.Image;
  // const splitPath = imagePath ? imagePath?.split('/') : ""; // Split the path by '/'
  // const filename = splitPath[splitPath.length - 1]; // Extract the last part (filename)

//   const imageUrl = `${globalUrl}/News_Feed/image/${filename}`
  const { articleData, articleId } = useSelector((state) => state.article);
  const [singleData, setSingleData] = useState();
  const [title, setTitle] = useState("");
  const { Videos } = useSelector((state) => state.map);
  // const newId = router.query.data;
  console.log(articleId, "articleId");
  const getNewsFeed = async (id) => {
    console.log(id, "title");
    try {
      const response = await axios
        .get(`${globalUrl}/News_Feed/get_news_by_TITLE?Title=${id}`)
        .then((res) => {
          console.log("res----", res);
          setSingleData(res?.data);
        });
    } catch (error) {
      alert(error);
    } finally {
      // setLoader(false);
    }
  };
  useEffect(() => {
    if (router.query.slug != "") {
      getNewsFeed(router.query.slug);
    }
  }, [router.query.slug]);
  const [imgTags, setImgTags] = useState([]);
  const [pTags, setPTags] = useState([]);
  console.log("pTags", pTags);

  // useEffect(() => {
  //   if (singleData) {
  //     let htmlFile = `https://backend.vehya.com/News_Feed/Send-HTML-File-Response?FilePath=${singleData.Description}`;

  //     if (htmlFile != undefined) {
  //       fetch(htmlFile)
  //         .then((response) => {
  //           if (!response.ok) {
  //             throw new Error("Network response was not ok");
  //           }
  //           return response.text();
  //         })
  //         .then((html) => {
  //           console.log("html---", html);
  //           const parser = new DOMParser();
  //           const doc = parser.parseFromString(html, "text/html");
  //           console.log("doc", doc);

  //           // Find all <p> and <img> elements in the parsed HTML
  //           const pTag = doc.querySelectorAll("p");
  //           const imgTag = doc.querySelectorAll("img");
  //           setImgTags(imgTag);
  //           setPTags(pTag);
  //           // console.log("pTags", pTags);
  //           // console.log("imgTags", imgTags);
  //           // setContent(html);
  //         })
  //         .catch((error) => {
  //           console.error("Error fetching HTML file:", error);
  //         });
  //     }
  //   }
  // }, [singleData]);

  console.log("articleData", articleData);
  const dispatch = useDispatch();
  const imagePath = singleDataArticle?.Image;
const splitPath = imagePath.split('/'); // Split the path by '/'
const filename = splitPath[splitPath.length - 1]; // Extract the last part (filename)

const imageUrl = `https://backend.vehya.com/News_Feed/image/${filename}`
console.log(imageUrl)
  useEffect(() => {
    dispatch(GetArticles(1));
  }, []);
  useEffect(() => {
    dispatch(getDashboardVideos(1));
  }, []);
  return (
    <>
      <NextSeo
        title={singleDataArticle?.Title}
        description={singleDataArticle?.ShortDescription}
        canonical={`https://aboutvehya.com/${singleDataArticle?.Title}`}
        openGraph={{
          type: "article",
          url: `https://aboutvehya.com/${singleDataArticle?.Title}`,
          title: singleDataArticle?.Title,
          description: singleDataArticle?.ShortDescription,
          images: [
            {
              url: `${globalUrl}/News_Feed/image/${singleDataArticle?.Image?.split('/').pop()}`,
              alt: singleDataArticle?.Title, // You can use a more descriptive alt text if needed
            },
          ],
        }}
      />
      <div className="my-1 singl-article container-padding">
        <Head>
          <title>About Vehya</title>
          <meta property="og:title" content={singleData?.Title} />
          <meta
            property="og:description"
            content={singleData?.Description?.Section1}
          />
          <meta
            name="image" property="og:image"
            content={`${globalUrl}/News_Feed/Send-File-Response?FilePath=${singleData?.Image}`}
          />
          <meta property="og:type" content="website" />
        </Head>
        <Row>
          <Col xs="12" className="px-md-3 px-lg-2 px-3">
            <img
              src={`${globalUrl}/News_Feed/Send-File-Response?FilePath=${singleData?.Image}`}
              className="w-100 singl-article__img article_detail_img"
            />
          </Col>
        </Row>
        <Row className="justify-content-between" style={{ marginTop: "16px", marginBottom: "4px" }}>
          <Col className="px-md-3 px-lg-2 px-3">
            <p className="singl-article__tag mb-0" >{singleData?.Category}</p>
          </Col>
          <Col className="px-md-3 px-3 d-flex justify-content-end">
            <div>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M22.0501 12.0251C22.0501 6.49123 17.5589 2 12.0251 2C6.49123 2 2 6.49123 2 12.0251C2 16.8772 5.44862 20.9173 10.0201 21.8496V15.0326H8.01504V12.0251H10.0201V9.5188C10.0201 7.58396 11.594 6.01003 13.5288 6.01003H16.0351V9.01754H14.0301C13.4787 9.01754 13.0276 9.46867 13.0276 10.0201V12.0251H16.0351V15.0326H13.0276V22C18.0902 21.4987 22.0501 17.2281 22.0501 12.0251Z"
                    fill="black"
                  />
                </svg>
              </span>
              <span className="mx-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z"
                    fill="black"
                  />
                </svg>
              </span>
              <span className="mx-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18.4259 2H21.8187L14.4062 10.4728L23.127 22H16.2989L10.9516 15.0079L4.83165 22H1.43701L9.36583 12.9372L1 2.00092H8.00134L12.8352 8.39192L18.4259 2ZM17.2357 19.9699H19.1155L6.97981 3.92412H4.96257L17.2357 19.9699Z"
                    fill="black"
                  />
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z"
                    fill="black"
                  />
                </svg>
              </span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="px-md-3 px-lg-2 px-3">
            <h6 className="fs--20 singl-article__header">{singleData?.Title}</h6>
          </Col>
        </Row>
        <Row>
          <Col xs="12" className="px-md-3 px-lg-2 px-3 singl-article__description">
            <div
              dangerouslySetInnerHTML={{
                __html: singleData?.Description?.Section1,
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col md="7" className="pl-0 px-lg-2 px-md-3 px-3">
            <div
              dangerouslySetInnerHTML={{
                __html: singleData?.Description?.Section2,
              }}
            />
          </Col>
          {singleData?.Description?.Section3 && (
            <Col md="5" className="px-md-1 px-3">
              <div
                className="w-100 img-fluid singl-article__inner-img"
                dangerouslySetInnerHTML={{
                  __html: singleData?.Description?.Section3,
                }}
              />
            </Col>
          )}
        </Row>
        <Row className="my-2">
          <Col xs="12" className="px-lg-2 px-md-3 px-3 singl-article__description ">
            <div
              dangerouslySetInnerHTML={{
                __html: singleData?.Description?.Section4,
              }}
            />
            {/* {Object.keys(pTags)?.length > 0 &&
            Object.keys(pTags)
              ?.slice(4)
              ?.map((obj) => (
                <>
                  <p className="fs--14">{pTags[obj]?.textContent}</p>
                </>
              ))} */}
          </Col>
        </Row>
        <Row>
          <Col className="px-lg-2 px-md-3 px-3">
            <h6 className="singl-article__topTitle font-weight-bold px-1 py-1">
              Popular Articles
            </h6>
          </Col>
        </Row>
        <Row className="d-flex my-2  popular-article">
          {articleData?.NewsArticles?.slice(0, 3)?.map((item) => (
            <Col
              lg="4"
              sm="6"
              className="px-md-3 px-lg-2 px-3 my-2 my-md-0 cursor-pointer"
              key={item.id}
              onClick={(e) => {
                e.preventDefault();
                router.push({
                  pathname: `${encodeURIComponent(
                    item?.Title.replace(/\s+/g, "-")
                  )}`,
                });
                // router.push({
                //   pathname: "/ArticleDetail",
                //   query: { data: item?.id },
                // });
              }}
            >
              <div className="mx-1">
                <div className="image-container">
                  <img
                    src={`${globalUrl}/News_Feed/Send-File-Response?FilePath=${item?.Image}`}
                    alt="universalTesla"
                    className="img-fluid w-100 aticle-image pros-style"
                  />
                </div>
                <p className="popular-article__tag" style={{ marginTop: "16px", marginBottom: "4px" }}>{item?.Category}</p>
                <h6 className="fs--20 popular-article__header">{item?.Title}</h6>
                <p className="fs--14 ShortService">{item?.ShortDescription}</p>
              </div>
            </Col>
          ))}
        </Row>
        <Row className="popular-article">
          {Videos &&
            Videos?.Videos &&
            Videos?.Videos.map((filtered) => {
              return (
                <Col md="4" sm="6" className=" p-1">
                  <iframe
                    width="100%"
                    height="294"
                    src={filtered?.Video}
                    className="video"
                  ></iframe>
                  {/* <video width="100%" height="200" controls>
              <source src={item?.video} type="video/mp4" />
            </video> */}
                  <p className="popular-article__tag">
                    {filtered?.Category}
                  </p>
                  <h6 className="fs--20 popular-article__header">
                    {filtered?.Title}
                  </h6>
                  <h6 className="fs--13 popular-article__title ShortService">
                    {filtered?.Description}
                  </h6>
                </Col>
              );
            })}
        </Row>
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
