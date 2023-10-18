import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      className="bg-dark text-white"
      style={{ background: "linear-gradient(to right, #002A54, #001C33)" }}
    >
      <Container fluid>
        <div className="d-flex justify-content-between mt-4">
          <div className="mt-3">
            <h1>GovAssist</h1>
          </div>
          <div
            className="d-flex text-white justify-content-around mt-5"
            style={{ width: "60%" }}
          >
            <a href="#link1" className="text-white">
              Terms of Service
            </a>
            <a href="#link2" className="text-white">
              Privacy Policy
            </a>
            <a href="#link3" className="text-white">
              Legal Disclaimer
            </a>
            <a href="#link4" className="text-white">
              Refund Policy
            </a>
            <a href="#link5" className="text-white">
              Terms of Use
            </a>
          </div>
        </div>
        <hr />
        <Row>
          <div className="my-3">
            <p>
              Disclaimer: GovAssist is not affiliated with any United States
              government agency or department. Costs for consulting services do
              NOT include any government application, medical examination,
              filing, or biometric fees. This website does not provide legal
              advice and we are not a law firm. None of our customer service
              representatives are lawyers and they also do not provide legal
              advice. We are a private, internet-based travel and immigration
              consultancy provider dedicated to helping individuals travel to
              the United States. You may apply by yourself directly at
              travel.state.gov or at uscis.gov. GovAssist is affiliated with the
              UT law firm GovAssist Legal which provides legal services on
              immigration matters. Only licensed immigration professionals can
              provide advice, explanation, opinion, or recommendation about
              possible legal rights, remedies, defenses, options, selection of
              forms or strategies.
            </p>
          </div>
        </Row>
      </Container>
      <Row
        style={{
          backgroundColor: "#011527",
          paddingTop: "20px",
          paddingBottom: "10px",
          width: "100%",
        }}
      >
        <Col className="text-center">
          <p>
            Copyright &copy; 2016 - {new Date().getFullYear()} GovAssist, LLC
            all rights reserved.
          </p>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
