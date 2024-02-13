import React, { useEffect } from "react";
import { Col, Container, Row } from "reactstrap";

export default function Testimonials({ data }) {
  // const testimonials = [
  //   {
  //     video: "https://www.youtube.com/embed/cEYRepbtOLk?si=M12FUj5xT2ErtL9r",
  //     badge: "Customers",
  //     title: "set video playback speed with javascript",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  //   },
  //   {
  //     video: "https://www.youtube.com/embed/cEYRepbtOLk?si=M12FUj5xT2ErtL9r",
  //     badge: "Customers",
  //     title: "set video playback speed with javascript",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  //   },
  //   {
  //     video: "https://www.youtube.com/embed/cEYRepbtOLk?si=M12FUj5xT2ErtL9r",
  //     badge: "Customers",
  //     title: "set video playback speed with javascript",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  //   },
  // ];

  return (
    // <div className="container-padding">
    <Row className="popular-article landingTestimonial pt-3">
      {data &&
        data?.Videos?.map((filtered) => {
          return (
            <Col md="4" sm="6" className="responsive-margin-bottom pl-lg-0 pl-xl-0 pl-0 pr-3">
              <iframe
              
                src={filtered?.Video}
                className="video video-css"
              ></iframe>
              {/* <video width="100%" height="200" controls>
                <source src={item?.video} type="video/mp4" />
              </video> */}
              <p className="popular-article__tag font-poppins video-tag card-header-text">
                {filtered?.Category}
              </p>
              <h6 className="popular-article__header card-header-text font-poppins ShortService">
                {filtered?.Title}
              </h6>
              <h6 className="fs--13 popular-article__title ShortService">
                {filtered?.Description}
              </h6>
            </Col>
          );
        })}
    </Row>
    // </div>
  );
}
