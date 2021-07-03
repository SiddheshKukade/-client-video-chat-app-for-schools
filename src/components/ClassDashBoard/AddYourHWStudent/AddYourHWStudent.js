import React, { useState } from 'react'
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import styles from "./AddYourHWStudent.module.css";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import * as Yup from "yup";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import axios from "axios";
import { useSelector } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        height: " 73vh",
        width: "59vw",
    },
}));

const AddYourHWStudent = ({ hwCode, handleCloseParent }) => {
    const userMail = useSelector((state) => state.email);
    const userName = useSelector((state) => state.userName);
    const [fileUpload, setfileUpload] = useState(null);
    const [open, setOpen] = useState(false);
    const [openLoad, setOpenLoad] = useState(false);

    const handleCloseLoad = () => {
        setOpenLoad(false);
    };
    const handleClose = () => {
        setOpen(false);
        handleCloseLoad();
    };

    const onSubmit = () => {
        setOpenLoad(true)
        // who is submitting
        // which file submitting
        // which homework is submitting

        const data = new FormData();
        data.append("image", fileUpload);


        console.log("Student Submitting Homework");
        axios
            .post(process.env.REACT_APP_BACKEND_URL + "homework/upload", data)
            .then(response => {
                console.log("my response", response)
                axios.post(process.env.REACT_APP_BACKEND_URL + "homework/addHomeWorkStudent", {
                    name: userName,
                    email: userMail,
                    filename: response.data.filename,
                    hwCode: hwCode
                }).then(response => {
                    console.log(response)
                    setOpenLoad(false)
                    handleCloseParent();

                }).catch((err) => {
                    console.log(err)
                    handleCloseLoad();
                    setOpen(true)
                })
            })
            .catch(err => console.log(err))


    };
    const classes = useStyles();

    return (
        <div className={styles.container}>

            <div className={classes.paper}>
                <div className={styles.header}>Submit Homework</div>
                <div className={styles.formContainer}>
                    <div className={styles.file}>
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
                            onClick={onSubmit}
                        >
                            Upload Home Work
                        </button>
                    </div>
                </div>
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Problem Occured while connecting to your school  "}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Can't Submit your Homework , Please try again after some time.
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
        </div>)

}

export default AddYourHWStudent
