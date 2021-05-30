import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import FormikControl from "../../UserDetailsFrom/FormikControl";
import "../RegistrationForm/extra.css";
import styles from "../RegistrationForm/RegistrationForm.module.css";
let count = 0;

const AddNew = ({ key, defaultValue, inputvalues, count, ...rest }) => {
  const swt = (i, val) => {
    inputvalues[i] = val;
  };
  let i = count;
  return <FormikControl key={key} {...rest} />;
};

function PrincipalForm() {
  const [inputList, setInputList] = useState([]);
  const [inputvalues, setInputValues] = useState([]);

  const initialValues = {
    submitstudentName: "",
    phone: "",
    selectStandard: "",
    refercode: "",
    teacherEmail: "",
    teacherSubject: "",
  };
  const validationSchema = Yup.object({
    submitstudentName: Yup.string().required("name needed"),
    phone: Yup.string()
      .min(10, "Must be 10 characters")
      .required("phone is required"),
    selectStandard: Yup.string().required("please select standard"),
    refercode: Yup.string()
      .required("Referece code is Required")
      .min(4, "Minimum 4 characters are required for the code"),
    teacherEmail: Yup.string()
      .required("Teacher Name is required")
      .email("This is not a correct E-mail"),
    teacherSubject: Yup.string().required("Subject is Required"),
  });
  const dropdownOptions = [
    { key: "default", value: "Select your Standard" },
    { key: "1-12", value: "1st to 12th" },
    { key: "1-10", value: "1st to 10th" },
    { key: "5-10", value: "5th to 10th" },
    { key: "5-12", value: "5th to 12th" },
  ];
  const handleSubmit = (values) => {
    console.log("Form submited desc ", values);
  };
  const onAddBtnClick = (event, errors, touched) => {
    count += 2;
    setInputList(
      inputList.concat(
        <div className={styles.inputs}>
          <AddNew
            key={inputList.length}
            defaultValue=""
            errMsg={errors.teacherEmail}
            isTouched={touched.teacherEmail}
            onChange={(e) => {
              [e.target.name] = e.target.value;
              swt(inputList.length + 2, e.target.value);
            }}
            name="teacherEmail"
            inputvalues={inputvalues}
            count={count}
            control="input"
            type="text"
            label="Enter Email of Teacher "
            fullWidth="true"
            className={styles.inputsIn}
            placeholder="E-mail"
            onBlur={(e) => {
              swt(2, e.target.value);
            }}
          />
          <AddNew
            key={inputList.length}
            defaultValue=""
            errMsg={errors.teacherSubject}
            isTouched={touched.teacherSubject}
            onChange={(e) => {
              [e.target.name] = e.target.value;
              swt(inputList.length + 2, e.target.value);
            }}
            inputvalues={inputvalues}
            count={count}
            control="input"
            type="text"
            label="Subject of that Teacher"
            name="teacherSubject"
            className={styles.inputsIn}
            fullWidth="true"
          />
        </div>
      )
    );
  };
  console.log(inputList);
  console.log(inputvalues);
  const swt = (i, val) => {
    inputvalues[i] = val;
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
                  label="Full Name of Principal"
                  isTouched={touched.submitstudentName}
                  fullWidth="true"
                  name="submitstudentName"
                  errMsg={errors.submitstudentName}
                  placeholder="Teachers's Name"
                  className={styles.inputsIn}
                />
              </div>
              {/* <div className={styles.inputs}>
                <FormikControl
                  control="input"
                  type="text"
                  label="Full Name of Principal's Father"
                  name="fatherName"
                  errMsg={errors.fatherName}
                  isTouched={touched.fatherName}
                  fullWidth="true"
                  className={styles.inputsIn}
                  placeholder="Father's Name"
                />
              </div> */}

              <div className={styles.inputs}>
                <FormikControl
                  control="select"
                  label="Select the Standard range of your School"
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
                  label="Create a Referal Code for your School"
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
                  label="Phone number"
                  name="phone"
                  errMsg={errors.phone}
                  isTouched={touched.phone}
                  className={styles.inputsIn}
                  fullWidth="true"
                />
              </div>
              <div className={styles.inputs}>
                <div className={styles.headerContainerh4}>
                  Add Teachers and their subjects
                </div>
              </div>
              <div className={styles.inputs}>
                <FormikControl
                  control="input"
                  type="text"
                  name="teacherEmail"
                  label="Enter Email of Teacher "
                  errMsg={errors.teacherEmail}
                  isTouched={touched.teacherEmail}
                  fullWidth="true"
                  className={styles.inputsIn}
                  placeholder="E-mail"
                  defaultValue=""
                  onBlur={(e) => {
                    swt(2, e.target.value);
                  }}
                />

                <FormikControl
                  control="input"
                  type="text"
                  label="Subject of that Teacher"
                  name="teacherSubject"
                  errMsg={errors.teacherSubject}
                  isTouched={touched.teacherSubject}
                  className={styles.inputsIn}
                  fullWidth="true"
                />
              </div>
              {inputList}
              <div className={styles.inputs}>
                <button onClick={(e) => onAddBtnClick(e, errors, touched)}>
                  Add input
                </button>
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

export default PrincipalForm;
