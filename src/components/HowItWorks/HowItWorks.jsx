import { Container } from "react-bootstrap";
import { CgFileDocument } from "react-icons/cg";
import AccordionSection from "./AccordionSection";

function HowItWorks() {
  return (
    <div
      style={{
        borderRadius: "5px",
        marginTop: "100px",
        background: "#F7F8F9",
      }}
    >
      <div
        className="d-flex"
        style={{ paddingTop: "50px", paddingLeft: "20px" }}
      >
        <CgFileDocument className="fs-4" />
        <p className="fw-bold ml-2" style={{ paddingLeft: "10px" }}>
          Find the right visa for you!
        </p>
      </div>

      <AccordionSection />
    </div>
  );
}

export default HowItWorks;
