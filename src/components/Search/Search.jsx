import { Form } from "react-bootstrap";

function Search() {
  return (
    <div className="mx-5 my-5">
      <h1 style={{ color: "#4AC97D" }}>Let's keep in touch for news</h1>

      <div
        className="px-5 py-4 my-4"
        style={{
          borderLeft: "8px solid blue",
          display: "flex",
          justifyContent: "space-between",
          borderRadius: "14px",
          backgroundColor: "#F5F5F5",
        }}
      >
        <p>
          Subscribe to be the first do receive updates and be in advantage on
          your application proccess
        </p>
        <Form.Group controlId="emailInput" style={{ width: "100%" }}>
          <Form.Control type="email" placeholder="example@example.com" />
        </Form.Group>
      </div>
    </div>
  );
}

export default Search;
