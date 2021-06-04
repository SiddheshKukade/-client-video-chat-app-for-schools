import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import FormikControl from "../../UserDetailsFrom/FormikControl";
import "../RegistrationForm/extra.css";
import styles from "../RegistrationForm/RegistrationForm.module.css";
import axios from "axios";
function TeacherForm({ role, isGoogle }) {
  const stateMail = useSelector((state) => state.email);
  const statePass = useSelector((state) => state.password);
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
    axios
      .post(process.env.BACKEND_URL + "/checkTeacher", {
        refercode: values.refercode,
        teacherMail: values.teacherMail,
        teacherStandard: values.selectStandard,
      })
      .then((res) => {
        axios
          .post(process.env.BACKEND_URL + "/newUser", {
            role: role,
            name: values.teacherName,
            email: stateMail,
            password: statePass,
            standard: values.selectStandard,
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
              <pre>{JSON.stringify(formik.values)}</pre>
              {console.log(formik.isValid)}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default TeacherForm;
