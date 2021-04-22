import React, { useState } from "react";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import { Formik } from "formik";
import * as Yup from "yup";
import FormikControl from "../../UserDetailsFrom/FormikControl";
import { Form } from "formik";
import styles from "./FormikLogin.module.css";

import GoogleLogin from "react-google-login";
import UserDetailsFrom from "./../../UserDetailsFrom/UserDetailsFrom";
import { Helmet } from "react-helmet";

function FormikLogin() {
  const [loadNextForm, setLoadNextForm] = useState(false);
  const [u, sU] = useState({});
  console.log(u);
  const responseG = (res) => {
    console.log(res);
    console.log(res.profileObject);
  };
  const handleSubmit = () => {
    setLoadNextForm(true);
  };
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid E-mail").required("E-mail is required "),
    password: Yup.string().required("You have to give a Password "),
  });
  const onSubmit = (values) => {
    console.log("form data sumit", values);
    console.log(values);
  };
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      {false ? (
        <UserDetailsFrom />
      ) : (
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
              <h1 className={styles.h1L}>Login to App</h1>

              <Formik
                className={styles.formContainer}
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
              >
                {(formik) => {
                  console.log(formik.values);
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
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
                          <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                          Continue to App
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
                  buttonText="Sign-up / Login  with Google Account"
                  onSuccess={(res) => sU(res)}
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

export default FormikLogin;
