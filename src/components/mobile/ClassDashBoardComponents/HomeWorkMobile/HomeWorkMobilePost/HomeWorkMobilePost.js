import React from "react";
import styles from "./HomeWorkMobilePost.module.css";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";

const HomeWorkMobilePost = () => {
  return (
    <div className={styles.post__wrapper}>
      <div className={styles.upper__wrapper}>
        <div className={styles.first__wrapper}>
          <AssignmentOutlinedIcon />
        </div>
        <div className={styles.second__wrapper}>
          <div className={styles.post__title}>
            Teacher has posted Chapter Two Notes
          </div>
          <div className={styles.post__date}>23.11.2021</div>
        </div>
      </div>
      <div className={styles.third__wrapper}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default HomeWorkMobilePost;
