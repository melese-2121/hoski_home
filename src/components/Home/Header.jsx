import React from "react";
import { Navbar, Nav, NavDropdown, Button, Image } from "react-bootstrap";
import styles from "./Header.module.css";
import ChatButton from "./ChatButton";

const Header = () => {
  return (
    <Navbar expand="lg" className={styles.whole_header}>
      <div>
        <Navbar.Brand
          className={styles.logo}
          style={{ color: "white", fontSize: "40px", fontWeight: "bold" }}
        >
          GovAssist
        </Navbar.Brand>
      </div>
      <div className={styles.lang_chat}>
        <Navbar.Toggle
          className="text-light"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Image
              src="https://vectorflags.s3.amazonaws.com/flags/us-square-01.png"
              alt="Flag"
              width="28px"
              height="20px"
              style={{ marginRight: "15px", marginTop: "13px" }}
            />
            <p
              style={{ color: "white", marginRight: "15px", marginTop: "8px" }}
            >
              English
            </p>
          </Nav>
        </Navbar.Collapse>
        <ChatButton />
      </div>
    </Navbar>
  );
};

export default Header;
