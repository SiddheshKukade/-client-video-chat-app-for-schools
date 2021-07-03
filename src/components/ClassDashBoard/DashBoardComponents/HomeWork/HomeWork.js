import React, { useState, useEffect } from "react";
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
function HomeWork({ homeWorkPosts }) {
  const userRole = useSelector((state) => state.role);
  const [postsList, setPostsList] = useState(homeWorkPosts);
  const state = useSelector(state => state)
  const updateHomeWork = (sm) => {
    setPostsList([sm, ...postsList]);
    console.log("I have a HomeWork added Post", postsList);
    console.log("psts for sefve", homeWorkPosts)
  };
  useEffect(() => {
    console.log("HW Updated")
    // return () => {
    //   cleanup
    // }
  }, [postsList, state.currentSubject])
  return (<>
    <div className={styles.mainContainer}>
      <Helmet>
        <title>Home Work</title>
        <meta name="description" content="App Description" />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
      {postsList.map((post) => (
        <HomeWorkPost
          title={post.title}
          fromSchoolRef={post.fromSchoolRef}
          fromTeacherMail={post.fromTeacherMail}
          subject={post.subject}
          marks={post.marks}
          hwCode={post.hwCode}
        />

      ))}
      <HomeWorkPost title="samplke titel" marks={23} />

      {/* {userRole ==="Teacher" ? <AddHomeWorkPanel /> : null } */}

    </div>
    <AddHomeWorkPanel updateHomeWork={updateHomeWork} /></>
  );
}

export default HomeWork;
