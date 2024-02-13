import React from "react";
import { Col, Container, Row } from "reactstrap";

export default function Demos() {
  return (
    <>
      <Row className="mt-2">
        <Col md={12} xl={6} lg={6}  className="mt-1 d-flex flex-column justify-content-center align-items-start">
          <h3 className="demo-header-text font-poppins font-weight-bold">Workforce Solar</h3>
          <p className="font-archivo">
            The relationship between the solar charging industry and EV charging
            technology is very promising. Solar powered charging can give EV
            owners additional options to recharge where grid integration is
            prevalent. The combination of solar charging and EV charging can
            provide some relief in grid dependent areas while working towards a
            more sustainable future.
          </p>
          <p className="font-archivo">
            As we work towards a more widespread eco-friendly transportation
            system, the integration of multiple renewable resources will help
            provide us with the most environmentally friendly and sustainable
            options.
          </p>
        </Col>
        <Col md={12} xl={6} lg={6}  className="mt-1 image-align-end d-flex">
          <div className="responsive-margin-bottom w-100">
            <img src="/WorkForce.png" alt="work1" className="img-fluid demo-img" />
          </div>
        </Col>
      </Row>
      <Row className="columnReverse mt-lg-2 mt-xl-2 mt-md-3 mt-3">
        <Col md={12} xl={6} lg={6}  className="mt-1 ">
          <div className="responsive-margin-bottom">
            <img src="/Electrician.png" className="img-fluid demo-img" />
          </div>
        </Col>
        <Col md={12} xl={6} lg={6}  className="mt-1 d-flex flex-column justify-content-center align-items-start">
          <h3 className="font-poppins font-weight-bold demo-header-text">Electrician</h3>
          <p className="font-archivo">
            Electricians are crucial to the success of EV charging systems. They
            provide assistance and support to EV users and ensure the safe and
            efficient operation of charging infrastructure. An electrician’s
            expertise in the field is essential to the expansion of the entire
            EV industry.
          </p>
          <p className="font-archivo">
            Experts in this field will also be relied upon when it comes to
            integrating and adapting to any new technology.
          </p>
        </Col>
      </Row>
      <Row className="mt-lg-2 mt-xl-2 mt-md-3 mt-3">
        <Col md={12} xl={6} lg={6}  className="mt-1 d-flex flex-column justify-content-center align-items-start">
          <h3 className="font-poppins font-weight-bold demo-header-text">Service Advisors</h3>
          <p className="font-archivo">
            Service advisors are responsible for providing customer support at
            every level. Their role is to help answer any questions customers
            may have about EV chargers. Service advisors must be knowledgeable
            about EV charging while also providing customer service support.
          </p>
          <p className="font-archivo">
            When you work with one of our service advisors, they will help
            answer any questions you may have. To provide customers with the
            best experience possible, Vehya’s service advisors stay up to date
            on the latest in the EV charging industry.
          </p>
        </Col>
        <Col md={12} xl={6} lg={6} className="my-2 image-align d-flex">
          <div className="w-100">
            <img src="/Advisor.png" className="img-fluid demo-img" />
          </div>
        </Col>
      </Row>
    </>
  );
}
