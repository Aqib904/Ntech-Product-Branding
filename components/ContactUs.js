import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Col, Container, Input, Row } from "reactstrap";
import axios from 'axios'
import { contactUsAction } from "../store/action/ContactUsEmail";
import { globalUrl } from "./Url";
// import ReCAPTCHA from "react-google-recaptcha";

export const ContactUs = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [fullName, setFullName] = useState("");
    const [message, setMessage] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let emailValuesArray
        if (!isValidEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        if (!fullName.trim().length > 0) {
            alert("Please enter a valid name.");
            setFullName("");
            return;
        } else{
            setFullName(fullName.trim());
        }
        if (!message.trim().length > 0) {
            setMessage("");
            alert("Please enter a valid message.");
            return;
        }
        
        try {
            const response = await axios.get(`${globalUrl}/Emails/Get-All-Emails`)
            if (response && response?.data?.Emails) {
                emailValuesArray = response?.data?.Emails.map((email) => email.Email);
            }
        } catch (error) {
            alert(error);
        }
        const formData = {
            email: email,
            phone: phone,
            name: fullName,
            message,
            adminEmails: emailValuesArray
        };
        dispatch(
            contactUsAction(formData, () => {
                setEmail("");
                setPhone("");
                setFullName("");
                setMessage("");
            })
        );
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };

    return (
        <>
            <div className="pl-3 pr-3 w-100">
                <div className="contact-us-image-container-overlay">
                    <form onSubmit={handleSubmit}>
                        <img
                            src="/vehyranews.png"
                            alt="Your Image"
                            className="contact-us-background-image img-fluid"
                            style={{ objectFit: 'cover' }}
                        />
                        <div className="contact-us-overlay">
                            <Col sm="12" className="h-100">
                                <Row className="contact-us d-flex justify-content-around align-items-center h-100">
                                    <Col xl='2' lg="12" md="12" xs="12" ContactUs>
                                        <div className="d-flex justify-content-start">
                                            <h6 className="contact-us__tilte mt-lg-3 mt-xl-0 mt-md-3">Contact Us</h6>
                                        </div>
                                    </Col>
                                    <Col xl='4' lg="12" md="12" xs="12" ContactUs>
                                        <Row className="contact-us d-flex justify-content-around align-items-center py-0 px-1">
                                            <Col xl='6' lg="6" md="6" xs="12 mt-2">
                                                <div class="input-container">
                                                    <input
                                                        type="text"
                                                        className="bottom-border-input text-light "
                                                        placeholder="Full Name"
                                                        required
                                                        value={fullName}
                                                        onChange={(e) => {
                                                            setFullName(e.target.value);
                                                        }}
                                                    />
                                                </div>
                                            </Col>
                                            <Col xl='6' lg="6" md="6" xs="12 mt-2">
                                                <div class="input-container">
                                                    <input
                                                        type="text"
                                                        className="bottom-border-input text-light"
                                                        placeholder="Phone"
                                                        value={phone}
                                                        maxLength={10}
                                                        onChange={(e) => {
                                                            setPhone(e.target.value);
                                                        }}
                                                        required
                                                        pattern="[0-9]{10}"
                                                        onKeyPress={(event) => {
                                                            const keyCode = event.which || event.keyCode;
                                                            const allowedKeys = /^(?:[0-9\b])+$/;
                                                            const key = String.fromCharCode(keyCode);
                                                            if (!allowedKeys.test(key)) {
                                                                event.preventDefault();
                                                            }
                                                        }}
                                                    />
                                                </div>
                                            </Col>
                                            <Col xl='12 mt-2 mt-lg-5 mt-xl-5 mt-md-5' lg="12" md="12" xs="12">
                                                <div class="input-container">
                                                    <input
                                                        type="email"
                                                        className="bottom-border-input text-light"
                                                        placeholder="Email"
                                                        value={email}
                                                        onChange={(e) => {
                                                            setEmail(e.target.value);
                                                        }}
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xl='4' lg="12" md="12" xs="12" className="py-3">
                                        <div style={{ backgroundColor: 'white', minHeight: '120px',borderRadius:"4px" }}>
                                            <textarea
                                                class="form-control"
                                                id="exampleFormControlTextarea1"
                                                style={{
                                                    height: '100%',
                                                    resize: 'none',
                                                    border: 'none',
                                                    outline: 'none',
                                                    boxShadow: 'none'
                                                }}
                                                value={message}
                                                required
                                                onChange={(e) => {
                                                    setMessage(e.target.value);
                                                }}
                                                rows={3}
                                                placeholder="Type your message here"
                                            />
                                            <button
                                                className="btn"
                                                style={{
                                                    position: 'absolute',
                                                    bottom: '24px',
                                                    left: '50%',
                                                    transform: 'translateX(-50%)',
                                                    color: 'white',
                                                    backgroundColor: '#000',
                                                    border: '1px solid black',
                                                }}
                                            // onClick={() => {
                                            //     let obj = {
                                            //         email: email,
                                            //     };
                                            // }}
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};



// function onChange(value) {
//   console.log("Captcha value:", value);
//   setVerified(true);
// }

// {/* <ReCAPTCHA
// sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
// onChange={onChange}
//   /> */}
// <button
//     className="btn"
//     style={{
//         position: "absolute",
//         bottom: "20px",
//         right: "46%",
//         color: "white",
//         backgroundColor: "#000",
//         border: "1px solid black",
//         opacity: 1,
//     }}
//     onClick={() => {
//         let obj = {
//             email: email,
//         };
//     }}
// disabled={!verified}
