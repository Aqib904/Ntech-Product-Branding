import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Col, Container, Input, Row } from "reactstrap";
import { sendEmailAction } from "../store/action/sendEmail";

export const VehyaNews = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  return (
    <>
      <div className="w-100">
        {/* <div style={{ width: "93.8%", justifyContent: 'center', alignItems: 'center', paddingLeft: '8%' }}> */}
        <div className="image-container-overlay">
          <img
            src="/vehyranews.png"
            alt="Your Image"
            className="background-image img-fluid"
            style={{ objectFit: 'cover' }}
          />
          <div className="overlay">
            <Col sm="12">
              <Row className="vehya-news d-flex justify-content-around align-items-center py-4 px-1">
                <Col lg="5" md="6" xs="12">
                  <div>
                    <h6 className="vehya-news__tilte">Vehya News</h6>
                    <h6 className="vehya-news__subTiltle">
                      Sign up for the latest news, facts, analysis, and original
                      stories about Vehya delivered to you.
                    </h6>
                  </div>
                </Col>
                <Col lg="5" md="6" xs="12" className="py-3">
                  <div class="input-container">
                    <input
                      type="email"
                      className="bottom-border-input text-light"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                      required
                    />
                    <span
                      className="icon pb-2"
                      onClick={() => {
                        if (email.match("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}")) {
                          let obj = {
                            email: email,
                          };
                          dispatch(
                            sendEmailAction(obj, () => {
                              setEmail("");
                            })
                          );
                        } else {
                          // Handle invalid email
                          alert("Please enter a valid email address");
                        }
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <circle
                          cx="11"
                          cy="11"
                          r="10"
                          stroke="white"
                          stroke-width="2"
                        />
                        <path
                          d="M9.5 15L14 10.5L9.5 6"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <h6 className="vehya-news__privacy py-1">
                    Vehya’s
                    {' '}
                    <a href="https://www.vehya.com/#/TermsofService" style={{ color: 'white', borderBottom: 'white', textDecoration: 'underline' }}>Terms of Service</a>
                    {' '}
                    and
                    {' '}
                    <a href="https://www.vehya.com/#/privacypolicy " style={{ color: 'white', borderBottom: 'white', textDecoration: 'underline' }}>Privacy Policy</a>
                    {' '}
                    apply.
                  </h6>
                </Col>
              </Row>
            </Col>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};
