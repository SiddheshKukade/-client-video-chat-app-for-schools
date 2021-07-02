import React from 'react'
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import styles from "../AddStudyMaterialPanel/AddStudyMaterialPanel.module.css";
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

const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        height: " 73vh",
        width: "59vw",
    },
}));
const ShowHomeWork = () => {
    const userMail = useSelector((state) => state.email);
    const schoolRefCode = useSelector((state) => state.schoolRefCode);
    const currentSubject = useSelector((state) => state.currentSubject);
    const currentStandard = useSelector((state) => state.currentStandard);

    const validationSchema = Yup.object({
        name: Yup.string()
            .required("Name field is needed")
            .min(4, "Name is too Short"),
        marks: Yup.number("Marks should to be a number").required(
            "Please provide the marks"
        ),
        dueDate: Yup.date("This is not a Date").required("Due Date Is required"),
    });
    const onSubmit = (values) => {
        console.log("form data Add Study material sumit", values);
        console.log(values);

        axios.post("http://localhost:6969/addHomeWork", {
            title: values.name,
            postedAt: Date(),
            fromSchoolRef: schoolRefCode,
            fromTeacherMail: userMail,
            subject: currentSubject,
            standard: currentStandard,
            marks: values.marks,
            emailWhoSubmitted: [],
            dueDate: values.dueDate,
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
        Add Home
      </Button> */}
            <div className={styles.fab}>
                <Tooltip title="Check Submissions" aria-label="add" onClick={handleOpen}>
                    <Fab color="primary">
                        <AddIcon />
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
                        <div className={styles.header}>Students who Submitted this Homework</div>

                    </div>
                </Fade>
            </Modal>
        </div>)
}

export default ShowHomeWork




