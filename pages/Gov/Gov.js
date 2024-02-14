import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import { GetArticles } from "../../store/action/articleAction";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import { getDashboardVideos, getGovVideos,getUtilitiesVideos } from "../../store/action/mapAction";
import { ContactUs } from "../../components/ContactUs";
import { globalUrl } from "../../components/Url";
import { NextSeo } from "next-seo"
import Head from "next/head";
import Testimonials from "../landingComponent/Testimonials";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function GOV() {
  const router = useRouter();
  const { articleData, articleId } = useSelector((state) => state.article);
  const [singleData, setSingleData] = useState();
  // const { Videos } = useSelector((state) => state.map);
  const { Videos, govVideos } = useSelector((state) => state?.map); // gov videos
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

  const getNewsFeed = async (id) => {
    console.log(id, "title");
    try {
      const response = await axios
        .get(
          `${globalUrl}/News_Feed/get_news_by_TITLE?Title=${id}`
        )
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
  useEffect(() => {
    dispatch(GetArticles(1));
  }, []);
  useEffect(() => {
    dispatch(getGovVideos(1));
  }, []);

  useEffect(() => {
		dispatch(getUtilitiesVideos(1));
		dispatch(getDashboardVideos(1));
	}, []);


  const handlePageClick = (page) => {
		if (Videos?.PageNo <= Videos?.TotalPages) {
			if (page != Videos?.PageNo) {
				dispatch(getDashboardVideos(page));
			}
		}
	};
  const [pagesNumber, setPagesNumber] = useState([]);
	const handleDecrementPage = () => {
		if (Videos?.PageNo > 1) {
			dispatch(getDashboardVideos(Videos?.PageNo - 1));
		}
	};
	const handleIncrementPage = () => {
		if (Videos?.PageNo < Videos?.TotalPages) {
			dispatch(getDashboardVideos(Videos?.PageNo + 1));
		}
	};

  return (
    <>
      <NextSeo
        title={'Vehya'}
        description={'NTech Product Branding is the premier app for electrical contractors and electricians looking to expand their services to the rapidly growing electric vehicle market. With the ability to serve customers globally and access to in-app training programs for everyone to become an EV service provider, you can be sure that you have the skills and knowledge necessary to provide top-notch service.'}
        canonical={`https://aboutvehya.com/Gov`}
        openGraph={{
          type: "article",
          url: `https://aboutvehya.com/Gov`,
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
          {/* <Row>
            <Col md="5 d-flex flex-column justify-content-center align-items-start">
              <h3
                className="font-poppins font-weight-bold servicepro_header_text"

              >
                How Government Policy and Collaboration Drive Sustainable Transportation
              </h3>
              <p className="font-archivo">
                Partnering with government agencies to build a robust EV infrastructure, foster innovation, and empower citizens to embrace the future of mobility.
              </p>
            </Col>

            <Col md="7">
              <div>
                {Videos && Videos.Videos && Videos.Videos.length > 0 && (
                  <iframe
                    width="100%"
                    height="456px"
                    // flexShrink="0"
                    src={Videos.Videos[2]?.Video} // Display the first video from the array
                    className=" video"
                  ></iframe>
                )}
              </div>
            </Col> 
          </Row>*/}
          <Row>
                {	govVideos &&
                  govVideos?.Videos &&
                  govVideos?.Videos.map((filtered) => { 
                    return (
                      
                        filtered.isIntroVideo === true &&
                        <>
                  <Col md="12 d-flex flex-column justify-content-center align-items-start" lg={5} xl={5}>
                  <h3
                    className="font-poppins font-weight-bold servicepro_header_text" >
                    {filtered?.Title}
                  </h3>
                  <p className="font-archivo mb-3 mb-xl-0 mb-lg-0">
                  {filtered?.Description}
                  </p>
                  </Col>
                  <Col md="12" lg={7} xl={7} >
                    <div>
                      {govVideos && govVideos.Videos && govVideos.Videos.length > 0 && (
                      <iframe
                        width="100%"
                        height="456px"
                        // flexShrink="0"
                        src={filtered?.Video}
                        className=" video"
                      ></iframe>
                    )}
                    {/* <img src="/Group 1000003968.png" className="img-fluid" /> */}
                    </div>
                  </Col>
                  </>
                  );
                })}
					</Row>
          
          <hr className="hr" />

          <Row className="popular-article">
            {govVideos &&
              govVideos?.Videos &&
              govVideos?.Videos.map((filtered) => {
                return (
                  filtered.isIntroVideo === false &&
                  <Col md="4" sm="6" className="responsive-margin-bottom">

                    <iframe
                   
                      src={filtered?.Video}
                      className="video video-css"
                    ></iframe>
                    {/* <video width="100%" height="200" controls>
              <source src={item?.video} type="video/mp4" />
            </video> */}
                    <p className="my-2 news-kerning-tag popular-article__tag font-poppins"
                      style={{
                        fontSize: "14px",
                        color: "#000",
                        fontWeight: 400,
                        lineHeight: '100%',
                        textTransform: 'capitalize'
                      }}>
                      {filtered?.Category}
                    </p>
                    <h6 className="popular-article__header font-poppins ShortService card-header-text"
                    >
                      {filtered?.Title}
                    </h6>

                  </Col>
                );
              })}
          </Row>
          


           {/* <Row className="d-flex my-2  popular-article">
          {articleData?.NewsArticles?.slice(0, 3)?.map((item) => (
            <Col
              lg="4"
              sm="6"
              className="px-md-0 px-3 my-2 my-md-0 cursor-pointer"
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
                    src={`https://backend.vehya.com/News_Feed/Send-File-Response?FilePath=${item?.Image}`}
                    alt="universalTesla"
                    className="img-fluid w-100 aticle-image pros-style"
                  />
                </div>
                <p className="my-2 popular-article__tag">{item?.Category}</p>
                <h6 className="fs--20 popular-article__header">
                  {item?.Title}
                </h6>
                <p className="fs--14 ShortService">{item?.ShortDescription}</p>
              </div>
            </Col>
          ))}
        </Row>  */}
          <hr className="hr" />
          <Row className="mt-2 mb-3">
            <Col
              lg={6}
              sm={6}
              md="12 d-flex flex-column justify-content-center align-items-start">
              <h2
                className="font-weight-bold font-poppins features-header-text">
                We Equip Governments with the Tools and Expertise to Succeed
              </h2>
              <p className="text-justify">
                We offer a comprehensive suite of solutions to support government agencies in their EV initiatives:
              </p>
            </Col>
            <Col lg={6} sm={6} md={12}>
              <Row className="pl-3 pl-lg-0 pl-xl-0 pl-md-3">
                <Col lg={4} md={4} xs={6} className="pr-3 pl-0">
                  <div className="feature-img-div">
                    <img src="/Gov_img_1.png" className="img-fluid feature-img " />
                    <div className="feature-img-overlay">
                    <p className="feature-img-text">Renewable Energy Integration</p>
                    </div>
                  </div>
                </Col>
                <Col lg={4} md={4} xs={6} className="pr-3 pl-0">
                  <div className="feature-img-div">
                    <img src="/Gov_img_2.png" className="img-fluid feature-img" />
                    <div className="feature-img-overlay">
                    <p className="feature-img-text">Grant & Funding Support</p>
                    </div>
                  </div>
                </Col>
                <Col lg={4} md={4} xs={6} className="pr-3 pl-0">
                  <div className="feature-img-div">
                    <img src="/Gov_img_3.png" className="img-fluid feature-img" />
                    <div className="feature-img-overlay">
                    <p className="feature-img-text">Policy & Regulatory Development</p>
                    </div>
                  </div>
                </Col>
              </Row>

            </Col>

          </Row>

          <Row className="">
            <ContactUs />
          </Row>

          {/* <Row className="popular-article">
            {Videos &&
              Videos?.Videos &&
              Videos?.Videos.map((filtered) => {
                return (
                  <Col md="4" sm="6" className="responsive-margin-bottom">
                    <iframe
                      width="100%"
                      height="294"
                      src={filtered?.Video}
                      className="video"
                    ></iframe> */}
                    {/* <video width="100%" height="200" controls>
                    <source src={item?.video} type="video/mp4" />
                  </video> */}
                    {/* <p className="popular-article__tag font-poppins news-kerning-tag">
                      {filtered?.Category}
                    </p>
                    <h6 className="popular-article__header font-poppins ShortService card-header-text">
                      {filtered?.Title}
                    </h6>
                    <h6 className="fs--13 popular-article__title ShortService">
                      {filtered?.Description}
                    </h6>
                  </Col>
                );
              })}
          </Row> */}

          {/* <Row className="container-padding"> */}
						<Testimonials data={Videos} />
					{/* </Row> */}
          <div className="container-padding">
						<Row className="d-flex my-2 popular-article">
							<Col
								lg="12"
								className="d-flex align-items-center justify-content-center "
							>
								<div className="mx-2 cursor" onClick={handleDecrementPage}>
									<FaAngleLeft/>
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
									<FaAngleRight/>
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