import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import FormikControl from "../../UserDetailsFrom/FormikControl";
import "../RegistrationForm/extra.css";
import styles from "../RegistrationForm/RegistrationForm.module.css";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { setTeacherInfo } from "./../../../redux/actions/actions";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Redirect } from "react-router-dom";

function TeacherForm({ role, isGoogle }) {
  const stateMail = useSelector((state) => state.email);
  const [open, setOpen] = useState(false);
  const statePass = useSelector((state) => state.password);
  const [loadDashBoard, setLoadDashBoard] = useState(false);
  const [openLoad, setOpenLoad] = useState(false);
  const dispatch = useDispatch();
  const handleCloseLoad = () => {
    setOpenLoad(false);
  };
  const handleClose = () => {
    handleCloseLoad();
    setOpen(false);
  };

  const initialValues = {
    teacherName: "",
    phone: "",
    selectStandard: null,
    refercode: "",
  };
  const validationSchema = Yup.object({
    teacherName: Yup.string().required("name needed"),
    phone: Yup.string()
      .min(10, "Must be 10 characters")
      .required("phone is required"),
    selectStandard: Yup.number().required("please select standard"),
    dob: Yup.date("please give correct date"),
    refercode: Yup.string()
      .required("Referece code is Required")
      .min(4, "Minimum 4 characters are required for the code"),
  });
  const handleSubmit = (values) => {
    setOpenLoad(true);
    axios
      .post(process.env.REACT_APP_BACKEND_URL + "signup/checkTeacher", {
        refercode: values.refercode,
        teacherMail: stateMail,
        teacherStandard: values.selectStandard,
      })
      .then((res) => {
        if (res.data.allowed) {
          dispatch(
            setTeacherInfo(
              role,
              values.teacherName,
              stateMail,
              statePass,
              values.selectStandard,
              isGoogle
            )
          );
          axios
            .post(process.env.REACT_APP_BACKEND_URL + "signup/newUser", {
              role: role,
              name: values.teacherName,
              email: stateMail,
              password: statePass,
              standard: values.selectStandard,
              googleLogin: isGoogle,
              createdAt: Date(),
              updatedAt: Date(),
            })
            .then((newUserResponse) => {
              handleCloseLoad();
              console.log(newUserResponse);
            })
            .catch((err) => console.log(err));
          setLoadDashBoard(true);
        } else {
          setOpen(true);
        }

        //check if the user exsts here !!
        // dispatch(setMailPassRole(values.email, values.password, role));
        // dispatch(set)
      })
      .catch((err) => console.log(err));
    console.log("Form submited desc ", values);
  };
  if (loadDashBoard) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>Fill in the Below Details</div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => {
          const { errors, touched } = formik;

          return (
            <Form className={styles.form_container}>
              <div className={styles.inputs}>
                <FormikControl
                  control="input"
                  type="text"
                  label="Enter the referal code provided by your principal"
                  name="refercode"
                  errMsg={errors.refercode}
                  isTouched={touched.refercode}
                  fullWidth="true"
                  className={styles.inputsIn}
                  placeholder="Referal Code"
                />
              </div>
              <div className={styles.inputs}>
                <FormikControl
                  control="input"
                  type="text"
                  label="Full Name of Teacher"
                  isTouched={touched.teacherName}
                  fullWidth="true"
                  name="teacherName"
                  errMsg={errors.teacherName}
                  placeholder="Teachers's Name"
                  className={styles.inputsIn}
                />
              </div>

              <div className={styles.inputs}>
                <FormikControl
                  control="input"
                  label="Select Your Standard"
                  name="selectStandard"
                  errMsg={errors.selectStandard}
                  isTouched={touched.selectStandard}
                  className={styles.inputsIn}
                  fullWidth="true"
                  type="number"
                />
              </div>
              <div className={styles.inputs}>
                <FormikControl
                  control="input"
                  type="text"
                  label="Phone number"
                  name="phone"
                  errMsg={errors.phone}
                  isTouched={touched.phone}
                  className={styles.inputsIn}
                  fullWidth="true"
                />
              </div>
              <div className={styles.inputsbtn}>
                <button
                  type="submit"
                  disabled={!formik.isValid}
                  className={styles.buttonSb}
                >
                  Save and Continue
                </button>
              </div>
              {/* <pre>{JSON.stringify(formik.values)}</pre>
              {console.log(formik.isValid)} */}
            </Form>
          );
        }}
      </Formik>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Problem Occured while connecting to your school  "}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            The school is not found or either you are not allowed as a teacher.
            Check your reference code and email again.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openLoad}
        onClose={handleCloseLoad}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <div style={{ overflowX: "hidden", overflowY: "hidden" }}></div>
          <CircularProgress />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default TeacherForm;
