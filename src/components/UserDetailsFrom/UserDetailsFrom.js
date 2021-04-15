import React from "react";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import FormikControl from "./FormikControl";
import TextArea from "../FormElements/TextArea";
function UserDetailsFrom() {
  const dropdownOptions = [
    { key: "1", value: "Select an option" },
    { key: "2", value: "Gotya" },
    { key: "3", value: "basketBall" },
  ];
  const radioOptions = [
    { key: "Malegaon", value: "1" },
    { key: "Rahata", value: "2" },
    { key: "Aurangabad", value: "3" },
  ];
  const checkboxOptions = [
    { key: "Malegaon", value: "CMalegaon" },
    { key: "Rahata", value: "CRahata" },
    { key: "Aurangabad", value: "CAurangabad" },
  ];
  const initialValues = {
    email: "",
    description: "",
    selectGame: "",
    radioOption: "",
    checkboxOption: [],
    birthDate: null,
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("please enter an e-mail"),
    description: Yup.string().required("You have to give some description"),
    selectGame: Yup.string().required("You have to select at least one game"),
    radioOption: Yup.string().required(
      "You have to select at least one Option"
    ),
    checkboxOption: Yup.array().required(
      "you have to select at least one option from above"
    ),
    birthDate: Yup.date().required("Cannt work").nullable(),
  });
  const onSubmit = (values) => {
    console.log("form data is submitted", values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form className="p-4 flex flex-col items-center justify-center gap-5">
          <FormikControl
            control="input"
            type="email"
            name="email"
            className="bg-pink-300 text-pink-900"
            label="E-mail"
          />

          <FormikControl
            control="textarea"
            name="description"
            label="Enter Description here"
            type="textarea"
            className="bg-blue-200 text-blue-900 w-96 h-96"
          />
          <FormikControl
            control="select"
            label="select game"
            name="selectGame"
            options={dropdownOptions}
            className="w-28 bg-green-400 text-green-900 "
          />
          <FormikControl
            control="radio"
            label="select your city"
            name="radioOption"
            options={radioOptions}
          />
          <FormikControl
            control="checkbox"
            name="checkboxOption"
            label="check some topics"
            options={checkboxOptions}
          />
          <FormikControl control="date" label="Pick a date" name="birthDate" />
          <button type="submit">Submit</button>
          <pre>{JSON.stringify(formik.values)}</pre>
        </Form>
      )}
    </Formik>
  );
}

export default UserDetailsFrom;
