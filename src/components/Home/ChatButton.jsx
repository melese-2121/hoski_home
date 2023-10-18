import { Button } from "react-bootstrap";
import styles from "./Button.module.css";

function ChatButton() {
  return (
    <Button variant="outline-light" className={styles.button}>
      Live Chat
    </Button>
  );
}

export default ChatButton;
