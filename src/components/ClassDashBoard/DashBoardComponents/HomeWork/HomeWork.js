import React from "react";
import HomeWorkPost from "./HomeWorkPost/HomeWorkPost";
import { Helmet } from "react-helmet";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import styles from "./Homework.module.css";
import AddHomeWorkPanel from "../../AddHomeWorkPanel/AddHomeworkPanel";
const title = "Homework - Sid";
function HomeWork() {
  return (
    <div className={styles.mainContainer}>
      <Helmet>
        <title>Home Work</title>
        <meta name="description" content="App Description" />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
      {/* <TitleComponent title={title} /> */}
      <HomeWorkPost />

      <AddHomeWorkPanel />
    </div>
  );
}

export default HomeWork;
