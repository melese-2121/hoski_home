import { useState } from "react";
import { Form, Col, Row, Button, Container } from "react-bootstrap";
import styles from "./EligibilityForm.module.css";
import { BsArrowRight } from "react-icons/bs";
const EligibilityForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    confirmEmail: "",
    countryOfBirth: "",
    maritalStatus: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <Container
      fluid
      className={styles.form_cont}
      style={{
        backgroundColor: "white",
        margin: "30px",
        padding: "30px",
        marginLeft: "30px",
      }}
    >
      <Form onSubmit={handleSubmit}>
        <div>
          <div className="d-flex">
            <BsArrowRight
              style={{
                color: "#4AC97D",
                fontWeight: "bold",
                fontSize: "25px",
                marginTop: "5px",
              }}
            />{" "}
            <p
              style={{
                color: "#4AC97D",
                fontWeight: "bold",
                marginLeft: "30px",
                fontSize: "20px",
              }}
            >
              Check now for free!
            </p>
          </div>
          <h1
            style={{
              textAlign: "center",
              fontWeight: "bold",
              marginBottom: "15px",
            }}
          >
            Green card eligibility
          </h1>
        </div>
        <Row className="mt-3">
          <Col>
            <Form.Group>
              <Form.Control
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Control
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col>
            <Form.Group>
              <Form.Control
                type="email"
                name="emailAddress"
                placeholder="Email Address"
                value={formData.emailAddress}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group>
              <Form.Control
                type="email"
                name="confirmEmail"
                placeholder="Your Email Again"
                value={formData.confirmEmail}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mt-3">
          <Form.Control
            as="select"
            name="countryOfBirth"
            value={formData.countryOfBirth}
            onChange={handleChange}
            required
          >
            <option value="">Your country of birth</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            {/* Add more options as needed */}
          </Form.Control>
        </Form.Group>

        <Form.Group className="mt-3">
          <Form.Control
            as="select"
            name="maritalStatus"
            value={formData.maritalStatus}
            onChange={handleChange}
            required
          >
            <option value="">Marital status</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
            {/* Add more options as needed */}
          </Form.Control>
        </Form.Group>
        <Form.Check
          type="checkbox"
          className="my-4"
          label="Yes, I finished high school OR I have qualifying training."
          id="custom-checkbox"
        />
        <div
          className="d-grid gap-2 d-md-block mt-3"
          style={{
            backgroundColor: "#4AC97D",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          <button className="btn text-white fw-bold" type="button">
            Continue
          </button>
        </div>
      </Form>
    </Container>
  );
};

export default EligibilityForm;
