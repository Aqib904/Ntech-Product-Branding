import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";

export default function Footer() {
  const [language, setLanguage] = useState("");
  const { languageName } = useSelector((state) => state.language);
  useEffect(() => {
		setLanguage(languageName);
	}, [languageName]);
  return (
    <Container fluid className="footer container-padding">
      <Row className="py-3 align-items-center">
        <Col md={12} lg={3} xl={3}>
          <div className="footer-logo">
          <img
            className="logo footer-image"
            src="/footerlogo2.png"
            alt="Grouparoo Logo"
            
          />
          </div>
        </Col>
        <Col md={12} lg={6} xl={6} >
          <div className="d-flex align-items-center justify-content-center">
            <a className={`linked-footer text-center ${language == "fr" ? 'link-footer-padding' : ''} ${language == "es" ? 'fontSizechange' : ''} ${language == "pt" ? 'fontSizechangept' : ''}`} href="https://www.vehya.com/#/TermsofService">
              Terms Of Service
            </a>
            <a className={`linked-footer text-center ${language == "fr" ? 'link-footer-padding' : ''} ${language == "es" ? 'fontSizechange' : ''} ${language == "pt" ? 'fontSizechangept' : ''}`} href="https://www.vehya.com/#/TermsofSale">
              Terms Of Sale
            </a>
            <a className={`linked-footer text-center ${language == "fr" ? 'link-footer-padding' : ''} ${language == "es" ? 'fontSizechange' : ''} ${language == "pt" ? 'fontSizechangept' : ''}`}  href="https://www.vehya.com/#/privacypolicy">
              Privacy Policy
            </a>
          </div>
        </Col>
        <Col md={12} lg={3} xl={3} className={`${language == "es" ? 'paddingIndiv' : ''} `}>
          <p className={`text-light fs--15  footer-copy-text copyright ${language == "es" ? 'fontSizechange' : ''}${language == "pt" ? 'fontSizechangept' : ''} `}>Copyrights <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 13 13" fill="none">
  <path d="M5.37745 5.74021C5.40333 5.56336 5.4611 5.39265 5.54796 5.23637C5.63011 5.09032 5.74729 4.96691 5.889 4.87721C6.04979 4.78648 6.23208 4.74062 6.41675 4.74444C6.54188 4.7475 6.66546 4.77287 6.78165 4.81934C6.89503 4.86832 6.9976 4.93918 7.08346 5.02785C7.1655 5.11851 7.23203 5.22202 7.28041 5.33424C7.33195 5.45118 7.36088 5.5768 7.36567 5.70446H8.40326C8.39607 5.44779 8.34114 5.19469 8.24127 4.95806C8.14785 4.73731 8.00967 4.53823 7.83544 4.37337C7.65379 4.20649 7.4412 4.07667 7.20965 3.99123C6.95199 3.89854 6.67948 3.85383 6.40566 3.85931C6.06653 3.85035 5.72971 3.91754 5.42008 4.05591C5.15143 4.17976 4.91378 4.36175 4.72437 4.58869C4.53433 4.82005 4.39415 5.08805 4.31257 5.37594C4.22084 5.684 4.17348 6.00353 4.1719 6.3249V6.4815C4.17097 6.80251 4.21575 7.12203 4.3049 7.43046C4.38527 7.71703 4.52562 7.98333 4.7167 8.21176C4.90641 8.43689 5.1441 8.61687 5.4124 8.73857C5.72291 8.87422 6.05911 8.94129 6.39799 8.93518C6.65962 8.93659 6.91942 8.89164 7.16531 8.80241C7.3946 8.7205 7.60676 8.597 7.79111 8.43814C7.96767 8.28663 8.11254 8.10182 8.2174 7.8943C8.32315 7.68789 8.38141 7.46051 8.38791 7.22875H7.35373C7.34941 7.34529 7.32035 7.45959 7.26847 7.56408C7.21741 7.66593 7.14637 7.75652 7.05959 7.83047C6.9708 7.90592 6.86835 7.96371 6.75778 8.00069C6.64549 8.0377 6.52817 8.05722 6.40992 8.05856C6.22903 8.06245 6.05057 8.01651 5.89411 7.92579C5.75241 7.83609 5.63523 7.71268 5.55308 7.56663C5.46611 7.40796 5.40836 7.23501 5.38256 7.05598C5.35284 6.86448 5.33745 6.67103 5.33652 6.47725V6.3249C5.33698 6.12912 5.35237 5.93366 5.38256 5.74021H5.37745ZM6.49092 0.613281C5.34427 0.613281 4.22337 0.952704 3.26997 1.58863C2.31657 2.22455 1.57348 3.12842 1.13467 4.18592C0.695871 5.24342 0.58106 6.40707 0.80476 7.52971C1.02846 8.65235 1.58062 9.68356 2.39143 10.4929C3.20223 11.3023 4.23526 11.8535 5.35987 12.0768C6.48449 12.3001 7.65018 12.1855 8.70955 11.7475C9.76891 11.3094 10.6744 10.5677 11.3114 9.61594C11.9485 8.66421 12.2885 7.54528 12.2885 6.40065C12.2885 5.64064 12.1385 4.88807 11.8472 4.18592C11.5558 3.48376 11.1288 2.84577 10.5904 2.30836C10.0521 1.77096 9.41294 1.34466 8.70955 1.05382C8.00616 0.762976 7.25227 0.613281 6.49092 0.613281ZM6.49092 11.0297C5.57377 11.0297 4.67722 10.7582 3.91463 10.2496C3.15205 9.74091 2.55769 9.01795 2.20671 8.17211C1.85573 7.32626 1.7639 6.39551 1.94283 5.49757C2.12176 4.59962 2.56341 3.7748 3.21193 3.12742C3.86045 2.48004 4.68672 2.03916 5.58625 1.86055C6.48578 1.68194 7.41816 1.77361 8.2655 2.12397C9.11283 2.47433 9.83706 3.06765 10.3466 3.82889C10.8561 4.59013 11.1281 5.48511 11.1281 6.40065C11.1263 7.62779 10.6372 8.80416 9.76792 9.67189C8.89867 10.5396 7.72023 11.0279 6.49092 11.0297Z" fill="white"/>
</svg> Ntech, All Rights Reserved</p>
        </Col>
      </Row>
    </Container>
  );
}


