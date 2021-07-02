import React, { useState } from "react";
import HomeWorkPost from "./HomeWorkPost/HomeWorkPost";
import { Helmet } from "react-helmet";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import styles from "./Homework.module.css";
import AddHomeWorkPanel from "../../AddHomeWorkPanel/AddHomeworkPanel";
import { useDispatch, useSelector } from "react-redux";
const title = "Homework - Sid";
function HomeWork({ homeWorkList, homeWorkPosts }) {
  const userRole = useSelector((state) => state.role);
  const [postsList, setPostsList] = useState(homeWorkPosts);
  const updateHomeWork = (sm) => {
    setPostsList([...postsList, sm]);
    console.log("I have a HomeWork added Post");
  };
  return (
    <div className={styles.mainContainer}>
      <Helmet>
        <title>Home Work</title>
        <meta name="description" content="App Description" />
        <meta name="theme-color" content="#008f68" />
      </Helmet>

      {/* <TitleComponent title={title} /> */}
      {/* {homeWorkPosts.map((post) => (
        <HomeWorkPost
          title={post.title}
          postedAt={post.postedAt}
          fromSchoolRef={post.fromSchoolRef}
          fromTeacherMail={post.fromTeacherMail}
          subject={post.subject}
          standard={post.standard}
          file={post.file}
          createdAt={post.createdAt}
          emailWhoSubmitted={post.emailWhoSubmitted}
          updatedAt={post.updatedAt}
          marks={post.marks}
          dueDate={post.dueDate}
        />
      ))} */}
      <HomeWorkPost />

      {/* {userRole ==="Teacher" ? <AddHomeWorkPanel /> : null } */}

      <AddHomeWorkPanel updatedAt={updateHomeWork} />
    </div>
  );
}

export default HomeWork;
