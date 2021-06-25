import React, { useState } from "react";
import * as Yup from "yup";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import FormikControl from "../../UserDetailsFrom/FormikControl";
import "../RegistrationForm/extra.css";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import styles from "../RegistrationForm/RegistrationForm.module.css";
import { setSchoolInfo } from "./../../../redux/actions/actions";
import { setPrincipalInfo } from "../../../redux/actions/actions";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Redirect } from "react-router-dom";
let count = 0;
console.log(count);
let standardRange = [];
const teacherMailSubject = [];
function setTeacherMailSubject(newProp) {
  teacherMailSubject.push(newProp);
}
let tempTeacherMail = "";
function setTempTeacherMail(obj) {
  tempTeacherMail = obj;
}
let tempSubject = "";
function setTempSubject(obj) {
  tempSubject = obj;
}
const AddNew = ({ key, defaultValue, inputvalues, count, ...rest }) => {
  const swt = (i, val) => {
    inputvalues[i] = val;
  };
  let i = count;

  return <FormikControl key={key} {...rest} />;
};

function PrincipalForm({ role, isGoogle }) {
  const principalStateMail = useSelector((state) => state.email);
  const principalStatePass = useSelector((state) => state.password);
  const [loadDashBoard, setLoadDashBoard] = useState(false);

  const [open, setOpen] = useState(false);
  const [openLoad, setOpenLoad] = useState(false);
  const [inputList, setInputList] = useState([]);
  const [inputvalues, setInputValues] = useState([]);
  const [tempObject, setTempObject] = useState({});
  const dispatch = useDispatch();
  const handleClose = () => {
    setOpenLoad(false);
    setOpen(false);
  };
  const handleCloseLoad = () => {
    setOpenLoad(false);
  };
  const initialValues = {
    principalName: "",
    phone: "",
    selectStandard: "",
    referCode: "",
    teacherEmail: "",
    teacherSubject: "",
    schoolName: "",
  };
  const validationSchema = Yup.object({
    principalName: Yup.string().required("name needed"),
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
    schoolName: Yup.string()
      .min(3, "minimum three chracters are required")
      .required("Schoolname is Required"),
  });
  const dropdownOptions = [
    { key: 1, value: "Select your Standard" },
    { key: 2, value: "1st to 12th" },
    { key: 3, value: "1st to 10th" },
    { key: 4, value: "5th to 10th" },
    { key: 5, value: "5th to 12th" },
  ];
  const combineNewTeacherSubjectInputs = () => {
    // setTeacherMailSubject((prev) => [
    //   ...prev,
    //   { email: tempTeacherMail, subject: tempSubject },
    // ]);
    setTeacherMailSubject({ email: tempTeacherMail, subject: tempSubject });
  };
  const onSubmit = (values) => {
    console.log(" 🆗Form submited desc ", values);
    // setTeacherMailSubject((prev) => [
    //   ...prev,
    //   { email: values.teacherEmail, subject: values.teacherSubject },
    // ]);

    setTeacherMailSubject({
      email: values.teacherEmail,
      subject: values.teacherSubject,
    });
    // do a request to backend and with '/checkSchoolRef'
    switch (values.selectStandard) {
      case "Select your Standard":
        break;
      case "1st to 12th":
        standardRange = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        break;
      case "1st to 10th":
        standardRange = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        break;
      case "5th to 10th":
        standardRange = [5, 6, 7, 8, 9, 10];
        break;
      case "5th to 12th":
        standardRange = [5, 6, 7, 8, 9, 10, 11, 12];
        break;
      default:
        break;
    }
    const subjectsMap = teacherMailSubject.map((t) => t.subject);
    setOpenLoad(true);

    axios
      .post(process.env.REACT_APP_BACKEND_URL + "signup/school", {
        name: values.schoolName,
        principalMail: principalStateMail,
        principalName: values.principalName,
        standards: standardRange,
        teacherMails: teacherMailSubject,
        subjects: subjectsMap,
        referCode: values.refercode,
      })
      .then((res) => {
        if (res.data.alreadyExists) {
          setOpen(true);
        } else {
          dispatch(
            setSchoolInfo(
              principalStateMail,
              values.principalName,
              standardRange,
              values.refercode,
              teacherMailSubject,
              subjectsMap,
              values.schoolName
            )
          );

          axios
            .post(process.env.REACT_APP_BACKEND_URL + "signup/newUser", {
              role: role,
              name: values.schoolName,
              email: principalStateMail,
              password: principalStatePass,
              googleLogin: isGoogle,
              referCode: values.refercode,
              // school : object id of school will come from response
            })
            .then((newUserResponse) => {
              console.log(
                "new User sucxess on DB from Principal form",
                newUserResponse
              );
              dispatch(
                setPrincipalInfo(
                  principalStateMail,
                  principalStatePass,
                  role,
                  values.principalName,
                  values.schoolName,
                  values.referCode,
                  values.phone
                )
              );
              setLoadDashBoard(true);
            })
            .catch((err) => console.log(err.response));
        }
      })
      .catch((err) => console.log(err.response));
    console.log(standardRange, "standard Range");
  };

  const onAddBtnClick = (event, errors, touched) => {
    event.preventDefault();
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
              setTempTeacherMail(e.target.value);
              [e.target.name] = e.target.value;
              swt(inputList.length + 2, e.target.value);
            }}
            name={inputList.length.toString()}
            inputvalues={inputvalues}
            count={count}
            control="input"
            type="text"
            label="Enter Email of Teacher "
            fullWidth="true"
            className={styles.inputsIn}
            placeholder="Teacher E-mail"
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
              setTempSubject(e.target.value);
              // [e.target.name] = e.target.value;
              swt(inputList.length + 2, e.target.value);
            }}
            inputvalues={inputvalues}
            count={count}
            control="input"
            type="text"
            label="Subject of that Teacher"
            // name="teacherSubject"
            name={inputList.length.toString()}
            className={styles.inputsIn}
            fullWidth="true"
            placeholder="Subject"
            onBlur={combineNewTeacherSubjectInputs}
          />
        </div>
      )
    );
  };
  if (loadDashBoard) {
    return <Redirect to="/dashboard" />;
  }
  // const onSubmit = () => {};
  const swt = (i, val) => {};
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>Fill in the Below Details</div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          const { errors, touched } = formik;

          return (
            <Form className={styles.form_container}>
              <div className={styles.inputs}>
                <FormikControl
                  control="input"
                  type="text"
                  label="School Name"
                  isTouched={touched.schoolName}
                  fullWidth="true"
                  name="schoolName"
                  errMsg={errors.schoolName}
                  placeholder="School Name"
                  className={styles.inputsIn}
                />
              </div>

              <div className={styles.inputs}>
                <FormikControl
                  control="input"
                  type="text"
                  label="Full Name of Principal"
                  isTouched={touched.principalName}
                  fullWidth="true"
                  name="principalName"
                  errMsg={errors.principalName}
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
          {"Problem Occured while creating your school  "}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Sorry! Other school with same Reference code Exists please try again
            with different reference code
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
console.log("🍎");
console.log(process.env.REACT_APP_BACKEND_URL + "sid");

export default PrincipalForm;
