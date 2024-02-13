import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import { GetArticles } from "../../store/action/articleAction";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import { getDashboardVideos, getUtilitiesVideos } from "../../store/action/mapAction";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { globalUrl } from "../../components/Url";
import { NextSeo } from "next-seo"
import Head from "next/head";
import Testimonials from "../landingComponent/Testimonials";
import { ContactUs } from "../../components/ContactUs";

export default function Utilities() {
	const router = useRouter();
	const { articleData, articleId } = useSelector((state) => state.article);
	const [singleData, setSingleData] = useState();
	const { Videos, utilityVideos } = useSelector((state) => state?.map);

	const [isVisible, setIsVisible] = useState(false);
	const [pagesNumber, setPagesNumber] = useState([]);
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
				description={'Vehya is the premier app for electrical contractors and electricians looking to expand their services to the rapidly growing electric vehicle market. With the ability to serve customers globally and access to in-app training programs for everyone to become an EV service provider, you can be sure that you have the skills and knowledge necessary to provide top-notch service.'}
				canonical={`https://aboutvehya.com/Utilities`}
				openGraph={{
					type: "article",
					url: `https://aboutvehya.com/Utilities`,
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
				<div className="container-padding">
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
					<Row>
					{utilityVideos &&
							utilityVideos?.Videos &&
							utilityVideos?.Videos.map((filtered) => { 
								return (
									
										filtered.isIntroVideo === true &&
										<>
						<Col md="12 d-flex flex-column justify-content-center align-items-start mb-3 mb-lg-0 mb-xl-0" lg={5} xl={5}>
							<h3
								className="font-poppins font-weight-bold servicepro_header_text" >
								{filtered?.Title}
							</h3>
							<p className="font-archivo">
							{filtered?.Description}
							</p>
						</Col>
						<Col md="12" lg={7} xl={7}>
							<div>
								{utilityVideos && utilityVideos.Videos && utilityVideos.Videos.length > 0 && (
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
					<Row className="popular-article utility-row">
						{utilityVideos &&
							utilityVideos?.Videos &&
							utilityVideos?.Videos.map((filtered) => { 
								return (
									
										filtered.isIntroVideo === false &&
										<Col md="4" sm="6" className="responsive-margin-bottom pl-0 pr-3 ">
										<iframe
										
											src={filtered?.Video}
											className="video video-css"
										></iframe>
										{/* <video width="100%" height="200" controls>
										<source src={item?.video} type="video/mp4" />
										</video> */}
										<p className="my-2 popular-article__tag font-poppins"
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
										{/* <h6 className="fs--13 popular-article__title ShortService">
                                        {filtered?.Description}
                                    </h6> */}
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
                                        className="img-fluid aticle-image pros-style"
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                                <p className="my-2 popular-article__tag">{item?.Category}</p>
                                <h6 className="fs--20 popular-article__header">{item?.Title}</h6>
                                <p className="fs--14 ShortService">{item?.ShortDescription}</p>
                            </div>
                        </Col>
                    ))}
                </Row> */}
					<hr className="hr" />
					<Row className="mt-2">
						<Col
							lg={6}
							sm={6}
							md="12 d-flex flex-column justify-content-center align-items-start">
							<h2 className="features-header-text">
								Our Comprehensive Approach to Optimizing Your EV Fleet
							</h2>
							<p className="font-archivo mb-3 mb-xl-0 mb-lg-0">
								We go beyond installing chargers. We work with you to design,
								implement, and manage a holistic EV charging solution that
								maximizes cost savings, minimizes grid impact, and boosts
								operational efficiency.
							</p>
						</Col>
						<Col lg={6} sm={6} md={12} className="padding-left-responsive">
							<Row className="pl-3 pl-xl-0 pl-lg-0">
								<Col lg={4} md={4} xs={6} className="pr-3 pl-0 responsive-margin-bottom">
									<div>
										<img src="/Frame 427323190.png" className="img-fluid " />
									</div>
								</Col>
								<Col lg={4} md={4} xs={6} className="pr-3 pl-0 responsive-margin-bottom">
									<div>
										<img src="/Frame 427323196.png" className="img-fluid" />
									</div>
								</Col>
								<Col lg={4} md={4} xs={6} className="pr-3 pl-0">
									<div>
										<img src="/Frame 427323197.png" className="img-fluid " />
									</div>
								</Col>
							</Row>
						</Col>
					</Row>
					<hr className="hr" />

					<Row className="" >
           				 <ContactUs/>
          			</Row>

					<hr className="hr" />
					{/* <Row className="popular-article">
                        {Videos &&
                            Videos?.Videos &&
                            Videos?.Videos.map((filtered) => {
                                return (
                                    <Col md="4" sm="6" className="responsive-margin-bottom" >
                                        <iframe
                                            width="100%"
                                            height="294"
                                            src={filtered?.Video}
                                            className="video"
                                        ></iframe>
                                        {/* <video width="100%" height="200" controls>
										<source src={item?.video} type="video/mp4" />
											</video> * /}
                                        <p className="my-2 popular-article__tag font-poppins"
                                            style={{
                                                fontSize: "14px",
                                                color: "#000",
                                                fontWeight: 400,
                                                lineHeight: '100%',
                                                textTransform: 'capitalize'
                                            }}>
                                            {filtered?.Category}
                                        </p>
                                        <h6 className="card-header-text popular-article__header font-poppins ShortService"
                                        >
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