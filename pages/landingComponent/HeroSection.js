import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Container, Row } from "reactstrap";
import { GetProductsChargers } from "../../store/action/productAction";
import { GetMapVideos } from "../../store/action/mapAction";
import { GetArticlesCharging } from "../../store/action/articleAction";
import Link from "next/link";
import { useRouter } from "next/router";

export default function HeroSection() {
	const dispatch = useDispatch();
	const { allProductsChargers } = useSelector((state) => state.product);
	const { articleChargingData } = useSelector((state) => state.article);
	const { mapVideos } = useSelector((state) => state.map);
	const [chargingVideo, setChargingVideo] = useState({});

	const newFeeds = [
		{
			title: "Resiliency",
			heading: "Design is the Mix of emotions of your Car",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. adipiscing elit, sed do eiusmod tempor.",
		},
		{
			title: "Resiliency",
			heading: "Design is the Mix of emotions of your Car",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.  adipiscing elit, sed do eiusmod tempor",
		},
	];
	// const dataArticle = [
	//   {
	//     img: "/chargingtwo.png",
	//     header: " Set Video Payback Speed with javascript",
	//     title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
	//   },
	//   {
	//     img: "/chargingtwo.png",
	//     header: " Set Video Payback Speed with javascript",
	//     title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
	//   },
	//   {
	//     img: "/chargingthree.png",
	//     header: " Set Video Payback Speed with javascript",
	//     title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
	//   },
	// ];
	useEffect(() => {
		const matchingChargingVideos = mapVideos.filter(
			(video) => video.UserDetail.Category === "Charging"
		);

		if (matchingChargingVideos.length >= 2) {
			const firstChargingVideo = matchingChargingVideos[0];
			setChargingVideo(firstChargingVideo);
		}
	}, [mapVideos]);

	useEffect(() => {
		dispatch(GetMapVideos());
		dispatch(GetProductsChargers());
		dispatch(GetArticlesCharging());
	}, []);
	useEffect(() => { }, [articleChargingData]);
	const router = useRouter();
	return (
		<div className="container-padding">
			<Row>
				<Col lg={3} md={6} className="popular-article mb-3 mb-lg-0 mb-xl-0 mb-md-0">
					<h6 className="popular-article__topTitle font-poppins px-2 py-1 mb-3"
						style={{
							fontSize: "21px",
							lineHeight: '150%',
							color: "#000",
							// textOverflow: 'ellipsis',
							// whiteSpace: 'nowrap',
							// overflow: 'hidden',
							fontWeight: 600,
							textTransform: 'capitalize'
						}}>
						News Feed
					</h6>
					{articleChargingData?.Resiliency?.map((item, index) => {
						return (
							<>
								<div
									className="d-flex flex-column cursor-pointer"
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
									<p className="popular-article__tag mt-0 font-poppins"
										style={{
											fontSize: "12px",
											color: "#000",
											// textOverflow: 'ellipsis',
											// whiteSpace: 'nowrap',
											// overflow: 'hidden',
											fontWeight: 400,
											textTransform: 'capitalize'
										}}>
										{item?.Category}
									</p>
									<h6 className="fs--20 ShortService font-poppins"
										style={{
											fontSize: "20px",
											color: "#000",
											marginBottom:"4px",
											// textOverflow: 'ellipsis',
											// whiteSpace: 'nowrap',
											// overflow: 'hidden',
											fontWeight: 500,
											textTransform: 'capitalize'
										}}>{item?.Title}</h6>
									<p className="fs--14 ShortDescription font-poppins mb-0"
										style={{
											fontSize: "13px",
											color: "#000",
											// textOverflow: 'ellipsis',
											// whiteSpace: 'nowrap',
											// overflow: 'hidden',
											// fontWeight: 100,
											textTransform: 'capitalize'
										}}>
										{item?.ShortDescription}
									</p>
								</div>
								{index === 0 && <hr />}
							</>
						);
					})}
				</Col>
				<Col lg={6} md={6} className="mb-3 mb-lg-0 mb-xl-0 mb-md-0">
					<div>
						<iframe
							
							src={chargingVideo?.UserDetail?.VideoLink}
							className="video heroVideo"
						></iframe>
						{/* <video width="100%" height="400" controls>
              <source
                src="/Vehya _ Residential Customer -  Don Murray.mp4"
                type="video/mp4"
              />
            </video> */}
					</div>
				</Col>
				<Col lg={3} md={12} className="popular-article-hero">
					<h6 className="popular-article__topTitle font-weight-bold ml-n3 px-2 py-1 mb-0 font-poppins"
						style={{
							fontSize: "21px",
							lineHeight: '150%',
							color: "#000",
							// textOverflow: 'ellipsis',
							// whiteSpace: 'nowrap',
							// overflow: 'hidden',
							fontWeight: 600,
							textTransform: 'capitalize'
						}}>
						Top Products
					</h6>
					<Row className="d-flex my-2 px-0">
						{allProductsChargers?.data?.slice(3, 6).map((obj, index) => (
							<>
								<Col lg="12" sm={6} className="cursor">
									<a
										href={obj.productURL}
										className="text-dark text-decoration-none">
										<Row className="pt-3">
											<Col lg="4" sm="5" xs="4" className="mb-0 p-0">
												<img
													src={obj.evChargerImage}
													alt="articleImg"
													className="popular-article__images w-100 mb-0"
													style={{ objectFit: 'cover' }}
												/>
											</Col>
											<Col lg="8" sm="7" xs="8" className="mb-0" style={{paddingLeft:"8px"}}>
												<div className="px-1 mb-0">
													<p className="popular-article__tag bg-site-tag mt-0"
														style={{
															fontSize: "12px",
															color: "#000",
															// textOverflow: 'ellipsis',
															// whiteSpace: 'nowrap',
															// overflow: 'hidden',
															lineHeight: '100%',
															fontWeight: 400,
															textTransform: 'capitalize',
															marginBottom:'8px'
														}}>
														{obj.type}
													</p>

													<h6 className="fs--15 font-weight-bold font-poppins"
														style={{
															fontSize: "16px",
															color: "#000",
															// textOverflow: 'ellipsis',
															// whiteSpace: 'nowrap',
															// overflow: 'hidden',
															fontWeight: 600,
															textTransform: 'capitalize'
														}}>
														{obj.evChargerName}
													</h6>
													{/* <div className="d-flex ">
														<p className=" fs--12 retail-proce mb-0">
															${obj?.evChargerPrice}
														</p>
														<p className=" fs--12 mx-2 mb-0">
															${obj?.evChargerSalePrice}
														</p>
													</div> */}
													<p className="fs--12 mb-0 font-poppins"
														style={{
															fontSize: "12px",
															color: "#555",
															// textOverflow: 'ellipsis',
															// whiteSpace: 'nowrap',
															// overflow: 'hidden',
															fontWeight: 400,
														}}>
														{obj.brandName.substring(0, 15)}
													</p>
													{/* <p className="fs--11 mb-0">{obj.connectivity}</p> */}
												</div>
											</Col>
											{index < 2 &&
												<hr className="mt-3 w-100 mb-0" />}
										</Row>
									</a>
								</Col>
							</>
						))}
					</Row>
				</Col>
			</Row>
		</div>
	);
}
