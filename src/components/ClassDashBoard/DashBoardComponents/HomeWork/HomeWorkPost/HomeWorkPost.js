import React, { useState } from "react";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import "./HomeWorkPost.css";
import axios from "axios";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { useSelector } from "react-redux";
import AddYourHWStudent from './../../../AddYourHWStudent/AddYourHWStudent';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ShowHomeWork from "../../../ShowHomeWork/ShowHomeWork";
function rand() {
  return Math.round(Math.random() * 20) - 10;
}
function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "50vw",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function HomeWorkPost({
  title,
  fromSchoolRef,
  fromTeacherMail,
  subject,
  marks,
  hwCode
}) {
  console.log("my Hw coe is ", hwCode)
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [fileObject, setFileObject] = useState(null);
  const schoolRefCode = useSelector((state) => state.schoolRefCode);
  const role = useSelector(state => state.role)
  const currentMail = useSelector((state) => state.email);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmitHomework = (e) => {
    e.preventDefault();
    axios.post("http://localhost:6969/addHomeWorkStudent", {
      file: fileObject,
      from: currentMail,
      schoolRefCode: schoolRefCode,
      title: title,
    });
    alert("Homework Submitted Sucesssfully.");
    console.log(fileObject.name);
  };
  const body = (
    <div style={modalStyle} className={`${classes.paper} formContainer`}>
      <form className="inner" onSubmit={handleSubmitHomework}>
        <h1 id="simple-modal-title">Upload you Work here : </h1>
        <p id="simple-modal-description">
          Make sure to name the file accoding to your Enrollment Number.
        </p>
        <div className="fileContainer">
          <input
            className="file"
            type="file"
            id="file"
            data-multiple-caption="{count} files selected"
            multiple
            name="file"
            onChange={(event) => setFileObject(event.target.files[0])}
          />
          <label htmlFor="file">
            <strong>Choose a file</strong>
            <span class="box__dragndrop"> or drag it here</span>.
          </label>
        </div>
        <div class="buttonContainer">
          <button
            type="submit"
            // disabled={!formik.isValid}
            className="button"
          >
            Upload Study Material
          </button>
        </div>
      </form>
    </div>
  );
  return (
    <div className="post__wrapper">
      <div className="upper__wrapper">
        <div className="first__wrapper">
          <AssignmentOutlinedIcon />
        </div>
        <div className="second__wrapper">
          <div className="post__title">
            Teacher has posted {title}
          </div>
          <div className="post__date"> {marks} Marks</div>
        </div>
      </div>
      <div className="third__wrapper">
        {
          role === "Teacher" ? (<CheckCircleOutlineIcon onClick={handleOpen} />) : (<CloudUploadIcon onClick={handleOpen} />)

        }
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        class="containerHomwWorkModal"
      >
        {
          role === "Teacher" ? (<ShowHomeWork hwCode={hwCode} />) : (<AddYourHWStudent handleCloseParent={handleClose} hwCode={hwCode} />)
        }
      </Modal>
    </div>
  );
}
export default HomeWorkPost;
