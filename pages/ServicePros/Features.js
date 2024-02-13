import React from "react";
import { Col, Container, Row } from "reactstrap";

export default function Features() {
  return (
        <Row className="featuresPadding">
          <Col lg={4} md={12} sm={12} className="pl-0 d-flex align-items-center ">
            <h1
              className="font-weight-bold font-poppins features-header-text"
              
            >
              Benefits and Features of Partnership
            </h1>
          </Col>
          <Col className="p-0 pl-3 pl-lg-0 pl-md-0" lg={8} md={12} sm={12}>
            <Row className="pl-3 pl-lg-0 pl-xl-0">
            <Col lg={3} md={3} sm={3} xs={6} className="mb-2 pl-0">
            <div className="feature-img-div">
              <img src="/work_force1.png" className="img-fluid feature-img" />
              <div className="feature-img-overlay">
                <p className="feature-img-text">Direct connect to customers</p>
              </div>
            </div>
          </Col>
          <Col lg={3} md={3} sm={3} xs={6} className="pl-0">
            <div className="feature-img-div">
              <img src="/work_force2.png" className="img-fluid feature-img" />
              <div className="feature-img-overlay">
                <p className="feature-img-text">Stock options & prizes</p>
              </div>
            </div>
          </Col>
          <Col lg={3} md={3} sm={3} xs={6} className="pl-0">
            <div className="feature-img-div">
              <img src="/work_force3.png" className="img-fluid feature-img" />
              <div className="feature-img-overlay">
                <p className="feature-img-text">Discounts on Products</p>
              </div>
            </div>
          </Col>
          <Col lg={3} md={3} sm={3} xs={6} className="pl-0">
            <div className="feature-img-div">
              <img src="/work_force4.png" className="img-fluid feature-img" />
              <div className="feature-img-overlay">
                <p className="feature-img-text">Dedicated Account Managers</p>
              </div>
            </div>
          </Col>
            </Row>
          </Col>
        
        </Row>
  );
}
