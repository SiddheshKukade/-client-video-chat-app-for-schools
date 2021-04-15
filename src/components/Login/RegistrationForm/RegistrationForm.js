import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { Form } from "formik";
import FormikControl from "../../UserDetailsFrom/FormikControl";

function RegistrationForm() {
  const radioOptions = [
    { key: "Email", value: "emailmoc" },
    { key: "telephone", value: "telephonemoc" },
  ];
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    modeOfContact: "",
    phone: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Wrong E-mail").required("email is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Passwords are not matching")
      .required("this is required"),
    modeOfContact: Yup.string().required("this is required"),
    phone: Yup.string().when("modeOfContact", {
      is: "telephonemoc",
      then: Yup.string().required("enter telephone number"),
    }),
  });
  const onSubmit = (values) => {
    console.log("Form submited ", values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control="input"
              type="email"
              label="your e-mail add here"
              name="email"
            />

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
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default RegistrationForm;
