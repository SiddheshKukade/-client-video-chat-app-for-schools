import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import FormikControl from "../../UserDetailsFrom/FormikControl";
import "./extra.css";
import styles from "./RegistrationForm.module.css";
import { setStudentInfo } from "../../../redux/actions/actions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Redirect } from "react-router-dom";

function RegistrationForm({ role, isGoogle }) {
  const stateMail = useSelector((state) => state.email);
  const statePass = useSelector((state) => state.password);
  const [loadDashBoard, setLoadDashBoard] = useState(false);
  const [open, setOpen] = useState(false);
  const [openLoad, setOpenLoad] = useState(false);
  const handleCloseLoad = () => {
    setOpenLoad(false);
  };
  const handleClose = () => {
    setOpen(false);
    handleCloseLoad();
  };
  const dispatch = useDispatch();
  const initialValues = {
    submitstudentName: "",
    fatherName: "",
    dob: null,
    address: "",
    phone: "",
    selectStandard: "",
    refCode: "",
  };
  const validationSchema = Yup.object({
    submitstudentName: Yup.string().required("name needed"),
    fatherName: Yup.string().required("fathername needed"),
    address: Yup.string()
      .min(20, "Must be 20 character or less")
      .required("address is required"),
    phone: Yup.string()
      .min(10, "Must be 10 characters")
      .required("phone is required"),
    selectStandard: Yup.string().required("please select standard"),
    dob: Yup.date("please give correct date"),
    refCode: Yup.string().required("Refercode is required"),
  });
  const handleSubmit = (values) => {
    setOpenLoad(true);
    axios
      .post(process.env.REACT_APP_BACKEND_URL + "signup/newUserStudent", {
        role: role,
        name: values.submitstudentName,
        fathername: values.fathername,
        dob: values.dob,
        email: stateMail,
        password: statePass,
        standard: values.selectStandard,
        phoneNo: values.phone,
        googleLogin: isGoogle,
        referCode: values.refCode,
        createdAt: Date(),
        updatedAt: Date(),
      })
      .then((res) => {
        handleCloseLoad();
        if (res.data.alreadyExists) {
          setOpen(true);
        } else {
          dispatch(
            setStudentInfo(
              role,
              values.submitstudentName,
              values.fathername,
              values.dob,
              stateMail,
              statePass,
              values.selectStandard,
              values.phone,
              isGoogle,
              values.refercode
            )
          );
          setLoadDashBoard(true);
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
                  label="Full Name of Student"
                  isTouched={touched.submitstudentName}
                  fullWidth="true"
                  name="submitstudentName"
                  errMsg={errors.submitstudentName}
                  placeholder="Student's Name"
                  className={styles.inputsIn}
                />
              </div>
              <div className={styles.inputs}>
                <FormikControl
                  control="input"
                  type="text"
                  label="Full Name of Student's Father"
                  name="fatherName"
                  errMsg={errors.fatherName}
                  isTouched={touched.fatherName}
                  fullWidth="true"
                  className={styles.inputsIn}
                  placeholder="Father's Name"
                />
              </div>
              <div className={styles.inputs}>
                <FormikControl
                  control="date"
                  className={styles.inputsIn}
                  label="Date of Birth"
                  name="dob"
                  // onChange={(date) => {
                  //   const valueOfInput = date.format();
                  // }}
                  errMsg={errors.dob}
                  isTouched={touched.dob}
                />
              </div>
              <div className={styles.inputs}>
                <FormikControl
                  control="input"
                  label="Enter  Your Standard"
                  name="selectStandard"
                  errMsg={errors.selectStandard}
                  isTouched={touched.selectStandard}
                  className={styles.inputsIn}
                  fullWidth="true"
                />
              </div>
              <div className={styles.inputs}>
                <FormikControl
                  control="input"
                  label="Enter the Reference code of your School"
                  name="refCode"
                  errMsg={errors.refCode}
                  isTouched={touched.refCode}
                  className={styles.inputsIn}
                  fullWidth="true"
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

              <div className={styles.inputs}>
                <FormikControl
                  control="textarea"
                  label="Address"
                  name="address"
                  errMsg={errors.address}
                  className={styles.inputsIn}
                  isTouched={touched.address}
                  fullWidth="true"
                  id="txtareaUserReg"
                  placeholder="Enter you Complete address.."
                  height="200"
                />
              </div>

              <button
                type="submit"
                disabled={!formik.isValid}
                className={styles.buttonSb}
              >
                Save and Continue
              </button>
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
            The school is not found or either your email is already taken, try
            logging in or Check your reference code and email again.
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

export default RegistrationForm;
