import { Container } from "react-bootstrap";
import { BsFillPeopleFill } from "react-icons/bs";
import { RiMedal2Line } from "react-icons/ri";
import { CiWallet } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { AiOutlineMessage } from "react-icons/ai";

const Info = () => {
  return (
    <Container
      fluid
      className="mt-5"
      style={{ marginLeft: "0px", alignItems: "left", color: "white" }}
    >
      <div className="d-flex">
        <BsFillPeopleFill style={{ color: "#4AC97D", fontSize: "24px" }} />
        <p style={{ paddingLeft: "20px" }}>
          50,000 people and their families will Live, Work and Study in USA.{" "}
        </p>
      </div>
      <div className="d-flex">
        <RiMedal2Line style={{ color: "#4AC97D", fontSize: "24px" }} />
        <p style={{ marginLeft: "20px" }}>OFFICIAL USA Governmental program.</p>
      </div>
      <div className="d-flex">
        <CiWallet style={{ color: "#4AC97D", fontSize: "24px" }} />
        <p style={{ marginLeft: "20px" }}>
          Your chance to Live, Work and Study in USA.
        </p>
      </div>
      <div className="d-flex">
        <CiClock2 style={{ color: "#4AC97D", fontSize: "24px" }} />
        <p style={{ marginLeft: "20px" }}>
          Simple registration with in 5 minute.
        </p>
      </div>
      <div className="d-flex">
        <AiOutlineMessage style={{ color: "#4AC97D", fontSize: "24px" }} />
        <p style={{ marginLeft: "20px" }}>Personal suport in every step.</p>
      </div>
      <div className="d-flex">
        <CiHeart style={{ color: "#4AC97D", fontSize: "24px" }} />
        <p style={{ marginLeft: "20px" }}>
          Double chance for married peaple to win the Green Card.
        </p>
      </div>
    </Container>
  );
};

export default Info;
