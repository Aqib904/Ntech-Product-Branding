import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Container, Row } from "reactstrap";
import { GetMapVideos } from "../../store/action/mapAction";
import { useRouter } from "next/router";
import { GetFeaturedProduct } from "../../store/action/featuredAction";
import Link from "next/link";

export default function UniversalWall() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { pathname } = router;
  const { mapVideos } = useSelector((state) => state.map);
  const { allProductsChargers } = useSelector((state) => state.product);
  const { evCharger } = useSelector((state) => state.featured);
  const [chargingVideo, setChargingVideo] = useState({});
  const [matchingFeature, setMatchingFeature] = useState({});
  // console.log(window?.location?.pathname,'pathname')
  const teslaUniversalImgStyles = {
    backgroundImage: `url(${matchingFeature?.evChargerImage})`,
    width: "auto",
    height: "530px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    borderRadius: "10px"
  };
  useEffect(() => {
    // Find the first matching video with Category "Charging"
    const matchingChargingVideos = mapVideos.filter(
      (video) => video.UserDetail.Category === "Charging"
    );

    if (matchingChargingVideos.length >= 2) {
      const secondChargingVideos = matchingChargingVideos[1];
      setChargingVideo(secondChargingVideos);
    }
  }, [mapVideos]);
  useEffect(() => {
    if (allProductsChargers && allProductsChargers.data) {
      const matchingCharger = allProductsChargers?.data?.find(
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
    dispatch(GetMapVideos());
  }, []);
  return (
    // <Container className="my-3">
    <div className="container-padding">
      <Row className="popular-article mt-3 mb-lg-3 mb-xl-3 mb-3 landingTestimonial">
        <Col sm="6" className="my-3 my-sm-0 pl-0 pr-3">
          <div style={teslaUniversalImgStyles}>
            <div className="d-flex justify-content-start align-items-start">
              <div className="mt-5 px-2 py-5 d-flex align-items-center">
              <h2 className="adText">Ad</h2>
                <div className="px-md-3 px-lg-5 px-sm-2">
                  <h6 className=" my-1 popular-article__tesla-wall tesla-header-text font-poppins"
                  
                  >
                    {/* {matchingFeature?.evChargerName} */}
                    Tesla Universal Wall Connector
                  </h6>
                  
                  <h6 className="popular-article__retail-price font-poppins"
                    style={{
                      fontSize: "36px",
                      color: "rgba(12, 7, 28, 0.50)",
                      fontWeight: 700,
                      textTransform: 'capitalize',
                      width: '70%',
                      textDecorationLine: 'strikethrough',
                    }}
                  >
                    Retail ${matchingFeature?.evChargerPrice}
                  </h6>
                  <p className="popular-article__price article-price-text "
                
                  >
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
                      <Button className="popular-article__btn font-weight-bold font-poppins p-4"
                        style={{
                          fontSize: "20px",
                          color: "#000",
                          lineHeight: '100%',
                          textAlign: 'center'
                        }}>
                        Learn more
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col sm={6} className="my-3 my-sm-0 pl-0">
          <div className="popular-article">
            <iframe
              width="100%"
              height="294"
              src={chargingVideo?.UserDetail?.VideoLink}
              className="video"
            ></iframe>
            {/* <video width="100%" height="200" controls>
              <source
                src="/Vehya _ Residential Customer -  Don Murray.mp4"
                type="video/mp4"
              />
            </video> */}
            <p className="my-2 popular-article__tag font-poppins"
              style={{
                fontSize: "14px",
                color: "#000",
                lineHeight: '100%',
                textTransform: 'capitalize',
                fontWeight: 400
              }}>
              {chargingVideo?.UserDetail?.Category}
            </p>
            <h6 className="fs--20 popular-article__header font-poppins card-header-text">
              {chargingVideo?.UserDetail?.VideoTitle}
            </h6>
            <h6 className="fs--13 popular-article__title ShortDescription font-poppins"
              style={{
                fontSize: "20px",
                color: "#000",
                fontWeight: 400
              }}>
              {chargingVideo?.UserDetail?.VideoDescription} {chargingVideo?.UserDetail?.VideoDescription}
            </h6>
          </div>
        </Col>
      </Row>
    </div >
    // {/* </Container> */}
  );
}
