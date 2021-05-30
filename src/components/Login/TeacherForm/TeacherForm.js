import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { Form } from "formik";
import FormikControl from "../../UserDetailsFrom/FormikControl";
import "../RegistrationForm/extra.css";
import styles from "../RegistrationForm/RegistrationForm.module.css";

function TeacherForm() {
  // const radioOptions = [
  //   { key: "Email", value: "emailmoc" },
  //   { key: "telephone", value: "telephonemoc" },
  // ];
  const initialValues = {
    submitstudentName: "",
    fatherName: "",
    dob: null,
    phone: "",
    selectStandard: "",
    refercode: "",
  };
  const validationSchema = Yup.object({
    submitstudentName: Yup.string().required("name needed"),
    fatherName: Yup.string().required("fathername needed"),
    phone: Yup.string()
      .min(10, "Must be 10 characters")
      .required("phone is required"),
    selectStandard: Yup.string().required("please select standard"),
    dob: Yup.date("please give correct date"),
    refercode: Yup.string()
      .required("Referece code is Required")
      .min(4, "Minimum 4 characters are required for the code"),
  });
  const dropdownOptions = [
    { key: "1", value: "Select your Standard" },
    { key: "2", value: "5th" },
    { key: "3", value: "6th" },
    { key: "4", value: "7th" },
    { key: "5", value: "8th" },
  ];
  const handleSubmit = (values) => {
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
                  isTouched={touched.submitstudentName}
                  fullWidth="true"
                  name="submitstudentName"
                  errMsg={errors.submitstudentName}
                  placeholder="Teachers's Name"
                  className={styles.inputsIn}
                />
              </div>
              <div className={styles.inputs}>
                <FormikControl
                  control="input"
                  type="text"
                  label="Full Name of Teacher's Father"
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
                  control="select"
                  label="Select Your Standard"
                  name="selectStandard"
                  options={dropdownOptions}
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
              <div className={styles.inputsbtn}>
                <button
                  type="submit"
                  disabled={!formik.isValid}
                  className={styles.buttonSb}
                >
                  Save and Continue
                </button>
              </div>
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

export default TeacherForm;
