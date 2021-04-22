import { Button } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import React from "react";
import "./AddStudyMaterialPanel.css";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Form } from "formik";
import FormikControl from "./../../UserDetailsFrom/FormikControl";
import * as Yup from "yup";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
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
    console.log("form data ss sumit", values);
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
    <div>
      <Button
        variant="contained"
        color="default"
        className=" "
        startIcon={<CloudUploadIcon />}
        onClick={handleOpen}
      >
        Add Material Here
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
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
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              {(formik) => {
                console.log(formik.values);
                const { errors, touched } = formik;
                return (
                  <Form>
                    <div className="rounded-md shadow-sm -space-y-px">
                      <label
                        for="email-address"
                        className="sr-only"
                        htmlFor="email"
                      >
                        Email address
                      </label>
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
                    <button type="submit" disabled={!formik.isValid}>
                      Upload Study Material
                    </button>
                    <input
                      class="box__file"
                      type="file"
                      name="file"
                      id="file"
                      data-multiple-caption="{count} files selected"
                      multiple
                    />
                    <label for="file">
                      <strong>Choose a file</strong>
                      <span class="box__dragndrop"> or drag it here</span>.
                    </label>
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
