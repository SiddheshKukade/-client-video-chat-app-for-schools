import { Button } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import React from "react";
import "./AddStudyMaterialPanel.css";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
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
            <form
              class="box"
              method="post"
              action=""
              enctype="multipart/form-data"
            >
              <div class="box__input">
                <input
                  class="box__file"
                  type="file"
                  name="files[]"
                  id="file"
                  data-multiple-caption="{count} files selected"
                  multiple
                />
                <label for="file">
                  <strong>Choose a file</strong>
                  <span class="box__dragndrop"> or drag it here</span>.
                </label>
                <button class="box__button" type="submit">
                  Upload
                </button>
              </div>
              <div class="box__uploading">Uploading…</div>
              <div class="box__success">Done!</div>
              <div class="box__error">
                Error! <span></span>.
              </div>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default AddStudyMaterialPanel;
