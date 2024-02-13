import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "reactstrap";

export default function TopSection() {
  return (
    <Row>
      <Col md="12 d-flex flex-column justify-content-center align-items-start responsive-margin-bottom" lg={6} xl={6}>
        <h2 className="font-poppins font-weight-bold servicepro_header_text" >
          Become a Vehya Service Provider Partner
        </h2>
        <p className="font-archivo" >
          As a service provider partner, you are an integral part of Vehya’s
          marketplace and becoming a part of the electrification of the
          future. Download the app to begin becoming a partner:
        </p>
        <div>
          <Link
            href=" https://apps.apple.com/in/app/vehya-sp/id6447058246"
            target="_blank"
          >
            <img src="/AppStore.png" alt="articleImg" />
          </Link>
          <Link
            href="https://play.google.com/store/apps/details?id=com.vehya.sp"
            target="_blank"
          >
            <img src="/GooglePlay.png" alt="articleImg" className="mx-1" />
          </Link>
        </div>
      </Col>
      <Col md="12" lg={6} xl={6} className="mt-md-3 pl-md-0 pr-md-0">
        <div>
          <img src="/ServiceFrame.png" className="img-fluid" />
        </div>
      </Col>
    </Row>
  );
}
