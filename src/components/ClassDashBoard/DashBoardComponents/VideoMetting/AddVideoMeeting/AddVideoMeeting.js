import React from "react";
import styles from "./AddVideoMeeting.module.css";
import { Button } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import axios from "axios";
import Tooltip from "@material-ui/core/Tooltip";
import FormikControl from "./../../../../UserDetailsFrom/FormikControl";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    height: " 53vh",
    width: "50vw",
  },
}));

const AddVideoMeeting = () => {
  const currentMail = useSelector((state) => state.email);
  const initialValues = {
    name: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string("This is  a wrong format")
      .required("Name field is needed")
      .min(4, "Name is too Short"),
  });
  const onSubmit = (values) => {
    console.log("form data Add Study material sumit 🍎 📎", values);
    console.log(values);
    axios.post("http://localhost:6969/addVideo", {
      title: values.name,
      fromTeacher: currentMail,
      date: Date(),
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
          {/* <form
            method="POST"
            action="http://localhost:6969"
            enctype="multipart/form-data"
          > */}
          <div className={classes.paper}>
            <div className={styles.header}>
              Create Video Meeting For your class
            </div>
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
              className={styles.formContainer}
            >
              {(formik) => {
                console.log(formik.values);
                const { errors, touched, setFieldValue } = formik;
                return (
                  <Form encType="multipart/form-data">
                    <div
                      className={styles.formContainer}
                      // className={`rounded-md shadow-sm -space-y-px ${styles.inner} `}
                    >
                      <div class={styles.nameContainer}>
                        <FormikControl
                          name="name"
                          control="input"
                          type="text"
                          label="Enter Topic of Meeting"
                          placeholder="Name"
                          errMsg={errors.name}
                          isTouched={touched.name}
                        />
                      </div>
                      <div class={styles.buttonContainer}>
                        <button
                          type="submit"
                          // disabled={!formik.isValid}
                          className={styles.button}
                        >
                          Start Video Meeting
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
      {/* </form> */}
      {/* </Modal> */}
    </div>
  );
};
export default AddVideoMeeting;
