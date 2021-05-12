import React from "react";
import styles from "./LoginAs.module.css";
import Teacherimg from "./images/teacher-clipart-transparent-15.png";
import Studentimg from "./images/student.jpg";
import Principalimg from "./images/principal.jpg";
const LoginAs = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.container}>
        <div className={styles.headingContainer}>Who are you ?</div>
        <div className={styles.left}>
          <div className={styles.imgContainer}>
            <img src={Teacherimg} alt="" className={styles.img} />{" "}
          </div>

          <div className={styles.button}>Teacher</div>
        </div>
        <div className={styles.middle}>
          <div className={styles.imgContainer}>
            <img src={Studentimg} alt="" className={styles.img} />
          </div>
          <div className={styles.button}>Student</div>
        </div>
        <div className={styles.right}>
          <div className={styles.imgContainer}>
            <img src={Principalimg} alt="principal" className={styles.img} />{" "}
          </div>
          <div className={styles.button}>Principal</div>
        </div>
      </div>
    </div>
  );
};

export default LoginAs;
