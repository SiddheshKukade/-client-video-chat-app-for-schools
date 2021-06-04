import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Form } from "formik";
import styles from "./Signup.module.css";
import GoogleLogin from "react-google-login";
import { Helmet } from "react-helmet";
// import UserDetailsFrom from "../../UserDetailsFrom/UserDetailsFrom";
import PrincipalForm from "../Login/PrincipalForm/PrincipalForm";
import RegistrationForm from "../Login/RegistrationForm/RegistrationForm";
import TeacherForm from "../Login/TeacherForm/TeacherForm";
import FormikControl from "./../UserDetailsFrom/FormikControl";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import { setMailPassRole } from "./../../redux/actions/actions";
function Signup({ role }) {
  const [isGoogle, setIsGoogle] = useState(false);
  const [loadNextForm, setLoadNextForm] = useState(false);
  const [u, sU] = useState({});
  const dispatch = useDispatch();
  const StateValues = useSelector((state) => state);
  console.log("Googel AO", u);
  const responseG = (res) => {
    console.log(res);
    console.log(res.profileObject);
  };

  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid E-mail").required("E-mail is required "),
    password: Yup.string()
      .min(6, "At least 6 Characters are required for the password")
      .required("You have to give a Password "),
  });
  const onSubmit = (values) => {
    // do a request to backend and with '/newUserCheck'
    // axios
    //   .post("http://localhost:6969/newUserCheck", {
    //     email: values.email,
    //   })
    //   .then((res) => {
    //     //check if the user exsts here !!
    //     dispatch(setMailPassRole(values.email, values.password, role));
    //   })
    //   .catch((err) => console.log(err));
    setLoadNextForm(true);
  };

  const loadForm = (role) => {
    switch (role) {
      case "Principal":
        return <PrincipalForm role={role} isGoogle={isGoogle} />;
      case "Teacher":
        return <TeacherForm role={role} isGoogle={isGoogle} />;
      case "Student":
        return <RegistrationForm role={role} isGoogle={isGoogle} />;
      default:
        console.log("problem with role in signup.js");
    }
  };

  return (
    <>
      <Helmet>
        <title>Create Account - App</title>
      </Helmet>
      {loadNextForm ? (
        loadForm(role)
      ) : (
        // <RegistrationForm />
        <div className={styles.mainContainer}>
          <div className={styles.container}>
            <div className={styles.inner1}>
              <img
                src="https://image.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg"
                alt="login"
                srcset=""
                className={styles.image}
              />
            </div>
            <div className={styles.inner2}>
              <h1 className={styles.h1L}>Register to App</h1>

              <Formik
                className={styles.formContainer}
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
              >
                {(formik) => {
                  const { errors, touched } = formik;
                  return (
                    <Form class={styles.form1}>
                      <div className={styles.formMain}>
                        <div className={styles.formInputs}>
                          {/* <label
                            for="email-address"
                            className="sr-only"
                            htmlFor="email"
                          >
                            Email address
                          </label> */}
                          <FormikControl
                            name="email"
                            control="input"
                            type="email"
                            autocomplete="email"
                            label="Enter your email Address"
                            className=""
                            placeholder="Email address"
                            errMsg={errors.email}
                            isTouched={touched.email}
                            fullWidth="true"
                          />
                        </div>
                        <div className={styles.formInputs}>
                          {/* <label for="password" className="sr-only">
                            Password
                          </label> */}
                          <FormikControl
                            control="input"
                            type="password"
                            label="Enter your Password here"
                            name="password"
                            className=""
                            placeholder="Password"
                            autocomplete="current-password"
                            errMsg={errors.password}
                            isTouched={touched.password}
                            fullWidth="true"
                          />
                        </div>
                      </div>

                      <div className={styles.formInputsBtn}>
                        <button
                          type="submit"
                          disabled={!formik.isValid}
                          className={styles.button}
                        >
                          <span className={styles.shortText}>Continue</span>
                          <span className={styles.fullText}>
                            {" "}
                            Continue to App
                          </span>
                        </button>
                      </div>
                      <h6 className={styles.opt}>Or</h6>
                    </Form>
                  );
                }}
              </Formik>

              <div className={styles.formInputsGgl}>
                <GoogleLogin
                  clientId="204884301404-mt7viu03jv87ivlvu45qo41sv6cqg26v.apps.googleusercontent.com"
                  buttonText="Sign-up / Login  with Google "
                  onSuccess={(res) => {
                    sU(res);
                    setIsGoogle(true);
                  }}
                  onFailure={responseG}
                  cookiePolicy={"single_host_origin"}
                  className={styles.google}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Signup;
