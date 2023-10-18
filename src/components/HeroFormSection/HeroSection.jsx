import { Container } from "react-bootstrap";
import Info from "./Info";

function HeroSection() {
  return (
    <Container
      fluid
      style={{ marginTop: "50px", width: "120%", marginRight: "40px" }}
    >
      <div>
        <h1
          style={{
            color: "#4AC97D",
            fontWeight: "bold",
            fontSize: "50px",
            textAlign: "left",
          }}
        >
          Win the right to live{" "}
          <span
            style={{ fontSize: "50px", color: "#FFFF", fontWeight: "bold" }}
          >
            in the USA!
          </span>
        </h1>
      </div>
      <div className="d-flex mt-5">
        <div
          style={{
            borderLeft: "4px solid white",
            width: "45%",
            marginRight: "30px",
          }}
        >
          <p
            style={{
              fontSize: "20px",
              fontWeight: "500px",
              color: "#FFFF",
              textAlign: "left",
              marginLeft: "20px",
            }}
          >
            The official deadline is running, so hurry and{" "}
            <span>apply here!</span>
          </p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              background: "#080F1A",
              borderRadius: "10px",
            }}
          >
            <p style={{ fontSize: "28px", color: "#FFFF", fontWeight: "bold" }}>
              27
            </p>
            <p
              style={{
                fontSize: "13px",
                color: "#FFF8",
                marginTop: "-20px",
              }}
            >
              DAYS
            </p>
          </div>
          <div
            style={{
              width: "60px",
              height: "60px",
              background: "#080F1A",
              borderRadius: "10px",
            }}
          >
            <p style={{ fontSize: "28px", color: "#FFFF", fontWeight: "bold" }}>
              24
            </p>
            <p
              style={{
                fontSize: "13px",
                color: "#FFF8",
                marginTop: "-20px",
              }}
            >
              HOURES
            </p>
          </div>
          <div
            style={{
              width: "60px",
              height: "60px",
              background: "#080F1A",
              borderRadius: "10px",
            }}
          >
            <p style={{ fontSize: "28px", color: "#FFFF", fontWeight: "bold" }}>
              60
            </p>
            <p
              style={{
                fontSize: "13px",
                color: "#FFF8",
                marginTop: "-20px",
              }}
            >
              MINUTES
            </p>
          </div>
          <div
            style={{
              width: "60px",
              height: "60px",
              background: "#080F1A",
              borderRadius: "10px",
            }}
          >
            <p style={{ fontSize: "28px", color: "#FFFF", fontWeight: "bold" }}>
              60
            </p>
            <p
              style={{
                fontSize: "13px",
                color: "#FFF8",
                marginTop: "-20px",
              }}
            >
              SECONDS
            </p>
          </div>
        </div>
      </div>
      <Info />
    </Container>
  );
}

export default HeroSection;
