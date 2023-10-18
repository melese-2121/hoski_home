import { Accordion, Container, Table } from "react-bootstrap";
import TableData from "./TableData";

function AccordionSection() {
  return (
    <div>
      <Accordion
        defaultActiveKey="0"
        flush
        style={{
          backgroundColor: "#F7F8F9",
          marginLeft: "20px",
          marginRight: "20px",
          marginTop: "50px",
        }}
      >
        <Accordion.Item
          eventKey="0"
          style={{ borderBottom: "1px solid black", backgoundColor: "#F7F8F9" }}
        >
          <Accordion.Header>
            <h3
              style={{
                fontWeight: "200px",
                fontSize: "54px",
                color: "#4AC97D",
                backgoundColor: "#F7F8F9",
              }}
            >
              Diversity Visa Cost
            </h3>
          </Accordion.Header>
          <Accordion.Body style={{ backgroundColor: "#FFF6" }}>
            <Container fluid>
              <div className="d-flex justify-content-between">
                <p
                  style={{
                    fontWeight: "500px",
                    fontSize: "24px",
                    borderLeft: "4px solid black",
                    paddingLeft: "20px",
                  }}
                >
                  Mandatory Government Fees for Green Cards
                </p>{" "}
                <button
                  className="btn btn-warnning"
                  type="button"
                  style={{
                    backgroundColor: "#FD816B",
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  Apply Now
                </button>
              </div>
              <div>
                <TableData />
              </div>
            </Container>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item
          eventKey="1"
          style={{ borderBottom: "1px solid black" }}
        >
          <Accordion.Header>
            {" "}
            <h3
              style={{
                fontWeight: "300px",
                fontSize: "54px",
                color: "#4AC97D",
              }}
            >
              Diversity Visa Timeline
            </h3>
          </Accordion.Header>
          <Accordion.Body></Accordion.Body>
        </Accordion.Item>
        <Accordion.Item
          eventKey="2"
          style={{ borderBottom: "1px solid black" }}
        >
          <Accordion.Header>
            {" "}
            <h3
              style={{
                fontWeight: "300px",
                fontSize: "54px",
                color: "#4AC97D",
              }}
            >
              Diversity Visa FAQs
            </h3>
          </Accordion.Header>
          <Accordion.Body></Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default AccordionSection;
