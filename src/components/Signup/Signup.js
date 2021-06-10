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
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";
import { setMailPassRole } from "./../../redux/actions/actions";
function Signup({ role }) {
  const [isGoogle, setIsGoogle] = useState(false);
  const [loadNextForm, setLoadNextForm] = useState(false);
  const [userFromGoogle, setUserFromGoogle] = useState({});
  const dispatch = useDispatch();
  const StateValues = useSelector((state) => state);
  const [open, setOpen] = useState(false);
  const [openGoogle, setOpenGoogle] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseGoogle = () => {
    setOpenGoogle(false);
  };

  console.log("Googel Success", userFromGoogle);
  console.log("Googel Success", userFromGoogle?.profileObj?.email);
  const googleLoginFailed = (res) => {
    setOpenGoogle(true);
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
    // // do a request to backend and with '/newUserCheck'
    // axios
    //   .post("http://localhost:6969/newUserCheck", {
    //     email: values.email,
    //   })
    //   .then((res) => {
    //     console.log(res.data);
    //     // check if the array contains something
    //     if (res.data !== undefined && res.data.length === 0) {
    //       console.log("no previous  record found");
    //       if (isGoogle) {
    //         dispatch(
    //           setMailPassRole(
    //             userFromGoogle.profileObj.email,
    //             values.password,
    //             role,
    //             isGoogle
    //           )
    //         );
    //       } else {
    //         dispatch(
    //           setMailPassRole(values.email, values.password, role, isGoogle)
    //         );
    //       }
    //       setLoadNextForm(true);
    //     } else {
    //       handleClickOpen();
    //     }
    //     //check if the user exsts here !!
    //   })
    //   .catch((err) => console.log(err));
    setLoadNextForm(true);
  };

  const loadForm = () => {
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
  console.log(role);
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
                    setUserFromGoogle(res);
                    setIsGoogle(true);
                  }}
                  onFailure={googleLoginFailed}
                  cookiePolicy={"single_host_origin"}
                  className={styles.google}
                />
              </div>
            </div>
            <div className={styles.inner1}>
              <img
                src="https://image.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg"
                alt="login"
                className={styles.image}
              />
            </div>
          </div>
        </div>
      )}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Problem while creating account"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This account already exists try again with a different email or Log
            in instead.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openGoogle}
        onClose={handleCloseGoogle}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Problem while signing-up with Google"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Problem Occured while Signing up with a Google Account. Please try
            again.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseGoogle} color="primary">
            Go back
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Signup;
