import { Container, Image } from "react-bootstrap";
import { PiShootingStarLight } from "react-icons/pi";

function Frame() {
  return (
    <Container className="my-5">
      <div className="d-flex">
        <div>
          <PiShootingStarLight className="fs-4" />
        </div>
        <p className="fw-bold" style={{ marginLeft: "20px" }}>
          Our Jobs Speaks for Ourseleves.
        </p>
      </div>
      <div>
        <Image
          src="C:\Users\meles\Documents\GitHub\hoski_home\src\Icons\heart.png"
          width="75px"
          height="75px"
          alt="Profile pic"
          fluid
        />
      </div>
    </Container>
  );
}

export default Frame;
