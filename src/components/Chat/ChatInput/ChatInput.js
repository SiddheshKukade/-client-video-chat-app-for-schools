import React from "react";
import styles from "./ChatInput.module.css";
import SendIcon from "@material-ui/icons/Send";
const ChatInput = () => {
  return (
    <div className={styles.inputContainer}>
      <div className={styles.inputFormContainer}>
        <form className={styles.form}>
          <input
            placeholder="Type you message here "
            type="text"
            className={styles.input}
          />
        </form>
      </div>
      <div className={styles.attachCotainer}>
        <SendIcon className={styles.icon} />
      </div>
    </div>
  );
};
export default ChatInput;
