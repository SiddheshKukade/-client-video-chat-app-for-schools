import React, { useState } from "react";
import styles from "./AddStudyMaterialPanel.module.css";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Form } from "formik";
import FormikControl from "./../../UserDetailsFrom/FormikControl";
import * as Yup from "yup";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import axios from "axios";
import Tooltip from "@material-ui/core/Tooltip";
import { useSelector, useDispatch } from "react-redux";
import { fetch_data_toggle } from "../../../redux/actions/actions";
const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    height: " 73vh",
    width: "59vw",
  },
}));
function AddStudyMaterialPanel({ updateStudyMaterial }) {
  const [fileUpload, setfileUpload] = useState(null);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    file: null,
  };
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name field is needed")
      .min(4, "Name is too Short"),
  });
  const onSubmit = (values) => {
    console.log(fileUpload);
    console.log("form data Add Study material sumit 🍎 📎", values);

    const data = new FormData();
    data.append("image", fileUpload);
    axios
      .post(process.env.REACT_APP_BACKEND_URL + "studymaterial/upload", data)
      .then((response) => {
        console.log("response", response.data);

        if (response.data.sucess) {
          axios
            .post(process.env.REACT_APP_BACKEND_URL + "studymaterial/sm", {
              // fromSchoolRef:  state.schoolRefCode,
              // fromTeacherMail: state.email,
              // name : state.userName,
              // fileName:response.data.filename,
              // subject:state.currentSubject
              fromSchoolRef: "state.schoolRefCode",
              fromTeacherMail: " state.email",
              name: "state.userName",
              fileName: "response.data.filename",
              subject: "state.currentSubject",
            })
            .then((res) => {
              updateStudyMaterial({
                fromSchoolRef: "state.schoolRefCode",
                fromTeacherMail: " state.email",
                name: "state.userName",
                fileName: "response.data.filename",
                subject: "state.currentSubject",
              });
              console.log("rerendering");
              dispatch(fetch_data_toggle(true));
            });

          // handleClose();
        }
        alert("The file is successfully uploaded");
      })
      .catch((error) => {
        alert(error);
      });
  };

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={styles.container}>
      {/* <Button
        variant="contained"
        color="default"
        className=" "
        startIcon={<CloudUploadIcon />}
        onClick={handleOpen}
      >
        Add Material Here
      </Button> */}
      <div className={styles.fab}>
        <Tooltip title="Add Homework" aria-label="add" onClick={handleOpen}>
          <Fab color="primary">
            <AddIcon className={styles.icon} />
          </Fab>
        </Tooltip>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={styles.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className={styles.header}>Upload Study Material to Class</div>
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
              className={styles.formContainer}
              enctype="multipart/form-data"
            >
              {(formik) => {
                const { errors, touched, setFieldValue } = formik;
                return (
                  <Form encType="multipart/form-data">
                    <div
                      // className={styles.formContainer}
                      className={`rounded-md shadow-sm -space-y-px ${styles.inner} `}
                    >
                      <div class={styles.nameContainer}>
                        <FormikControl
                          name="name"
                          control="input"
                          type="text"
                          label="Enter Name of Material"
                          placeholder="Name"
                          errMsg={errors.name}
                          isTouched={touched.name}
                        />
                      </div>
                      <div className={styles.fileContainer}>
                        <input
                          type="file"
                          id="file"
                          data-multiple-caption="{count} files selected"
                          multiple
                          name="file"
                          onChange={(event) => {
                            // setFieldValue("file", event.currentTarget.files[0]);
                            setfileUpload(event.target.files[0]);
                          }}
                        />
                        <label htmlFor="file">
                          <strong>Choose a file</strong>
                          <span class="box__dragndrop"> or drag it here</span>.
                        </label>
                      </div>
                      <div class={styles.buttonContainer}>
                        <button
                          type="submit"
                          // disabled={!formik.isValid}
                          className={styles.button}
                        >
                          Upload Study Material
                        </button>
                      </div>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default AddStudyMaterialPanel;
