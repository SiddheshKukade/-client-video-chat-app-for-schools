import React, { useState } from "react";
import styles from "./LoginAs.module.css";
import Teacherimg from "./images/teacher-clipart-transparent-15.png";
import Studentimg from "./images/student.jpg";
import Principalimg from "./images/principal.jpg";
import Signup from "./../../Signup/Signup";
const LoginAs = () => {
  const [selectRole, setSelectRole] = useState("");
  if (selectRole !== "") {
    return <Signup role={selectRole} />;
  } else {
    return (
      <div className={styles.main_container}>
        <div className={styles.container}>
          <div className={styles.headingContainer}>Welcome, Who are you ?</div>

          <div className={styles.left}>
            <div className={styles.imgContainer}>
              <img src={Teacherimg} alt="" className={styles.img} />{" "}
            </div>
            <button
              className={styles.button}
              onClick={() => {
                setSelectRole("Teacher");
              }}
            >
              Teacher
            </button>
          </div>

          <div className={styles.middle}>
            <div className={styles.imgContainer}>
              <img src={Studentimg} alt="" className={styles.img} />
            </div>
            <button
              className={styles.button}
              onClick={() => {
                setSelectRole("Student");
              }}
            >
              Student
            </button>
          </div>

          <div className={styles.right}>
            <div className={styles.imgContainer}>
              <img src={Principalimg} alt="principal" className={styles.img} />{" "}
            </div>
            <button
              className={styles.button}
              onClick={() => {
                setSelectRole("Principal");
              }}
            >
              Principal
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default LoginAs;
