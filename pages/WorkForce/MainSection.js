import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "reactstrap";

export default function MainSection() {
  return (
    <Row className="d-flex align-items-center">
      <Col md="12 d-flex flex-column justify-content-center align-items-start responsive-margin-bottom  mb-3 mb-lg-0 mb-xl-0" xl={6} lg={6}>
        <h2 className="font-weight-bold font-poppins servicepro_header_text">Workforce 2.0</h2>
        <p className="font-archivo">
          As a service provider partner, you are an integral part of Vehya’s
          marketplace and becoming a part of the electrification of the
          future. Download the app to begin becoming a partner:
        </p>
        <div className="appButtons">
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
      <Col md="12" xl={6} lg={6}>
        <div>
          <img src="/workforce-banner.png" className="img-fluid" />
        </div>
      </Col>
    </Row>
  );
}
