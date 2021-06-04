import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import FormikControl from "../../UserDetailsFrom/FormikControl";
import "./extra.css";
import styles from "./RegistrationForm.module.css";

function RegistrationForm({ role, isGoogle }) {
  const stateMail = useSelector((state) => state.email);
  const statePass = useSelector((state) => state.password);

  const initialValues = {
    submitstudentName: "",
    fatherName: "",
    dob: null,
    address: "",
    phone: "",
    selectStandard: "",
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
  });
  const handleSubmit = (values) => {
    axios
      .post(process.env.BACKEND_URL + "/checkSchoolRefr", {
        refercode: values.refercode,
      })
      .then((res) => {
        axios
          .post(process.env.BACKEND_URL + "/newUser", {
            role: role,
            name: values.submitstudentName,
            fathername: values.fathername,
            dob: values.dob,
            email: stateMail,
            password: statePass,
            standard: values.selectStandard,
            phoneNo: values.phone,
            googleLogin: isGoogle,
            createdAt: Date(),
            updatedAt: Date(),
          })
          .then((newUserResponse) => console.log(newUserResponse))
          .catch((err) => console.log(err));

        //check if the user exsts here !!
        // dispatch(setMailPassRole(values.email, values.password, role));
        // dispatch(set)
      })
      .catch((err) => console.log(err));

    console.log("Form submited desc ", values);
  };
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
              <pre>{JSON.stringify(formik.values)}</pre>
              {console.log(formik.isValid)}
              {/* 
            <FormikControl
              control="input"
              type="password"
              label="Enter password herr"
              name="password"
            />

            <FormikControl
              control="input"
              type="password"
              label="Enter  Confirm password herr"
              name="confirmPassword"
            />
            <FormikControl
              control="radio"
              label="Mode of Contact"
              name="modeOfContact"
              options={radioOptions}
            />
            <FormikControl
              control="input"
              type="text"
              label="phone numer"
              name="phone"
            />
            <button type="submit" disabled={!formik.isValid}>
              Submit
            </button> */}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default RegistrationForm;
