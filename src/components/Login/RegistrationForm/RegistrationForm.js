import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { Form } from "formik";
import FormikControl from "../../UserDetailsFrom/FormikControl";

import styles from "./RegistrationForm.module.css";

function RegistrationForm() {
  // const radioOptions = [
  //   { key: "Email", value: "emailmoc" },
  //   { key: "telephone", value: "telephonemoc" },
  // ];
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
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formik) => {
        const { errors, touched } = formik;

        return (
          <Form>
            <FormikControl
              control="input"
              type="text"
              label="Full Name of Student"
              isTouched={touched.password}
              fullWidth="true"
              name="submitstudentName"
              errMsg={errors.submitstudentName}
              placeholder="Student's Name"
            />
            <FormikControl
              control="input"
              type="text"
              label="Full Name of Student's Father"
              name="fatherName"
              errMsg={errors.fatherName}
              isTouched={touched.password}
              fullWidth="true"
              placeholder="Father's Name"
            />
            <FormikControl
              control="date"
              label="Date of Birth"
              name="dob"
              // onChange={(date) => {
              //   const valueOfInput = date.format();
              // }}
            />
            <FormikControl
              control="select"
              label="Select Your Standard"
              name="selectStandard"
              options={dropdownOptions}
              className=""
              errMsg={errors.selectStandard}
              isTouched={touched.password}
              fullWidth="true"
            />
            <FormikControl
              control="input"
              type="text"
              label="Phone number"
              name="phone"
              errMsg={errors.phone}
              isTouched={touched.password}
              fullWidth="true"
            />
            <FormikControl
              control="textarea"
              label="Address"
              name="address"
              errMsg={errors.address}
              isTouched={touched.password}
              fullWidth="true"
            />
            <button type="submit" disabled={!formik.isValid}>
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
  );
}

export default RegistrationForm;
