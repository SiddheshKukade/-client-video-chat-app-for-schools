import { Button } from "@material-ui/core";
import React from "react";
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
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    height: " 73vh",
    width: "59vw",
  },
}));
function AddStudyMaterialPanel() {
  const initialValues = {
    name: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name field is needed")
      .min(4, "Name is too Short"),
  });
  const onSubmit = (values) => {
    console.log("form data Add Study material sumit", values);
    console.log(values);
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
            >
              {(formik) => {
                console.log(formik.values);
                const { errors, touched } = formik;
                return (
                  <Form>
                    <div
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
                          isTouched={touched.email}
                        />
                      </div>
                      <div className={styles.fileContainer}>
                        <input
                          className={styles.file}
                          type="file"
                          name="file"
                          id="file"
                          data-multiple-caption="{count} files selected"
                          multiple
                        />
                        <label htmlFor="file">
                          <strong>Choose a file</strong>
                          <span class="box__dragndrop"> or drag it here</span>.
                        </label>
                      </div>
                      <div class={styles.buttonContainer}>
                        <button
                          type="submit"
                          disabled={!formik.isValid}
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
