import React, { useState, useEffect } from "react";
import StudyMaterialPost from "./StudyMaterialPost/StudyMaterialPost";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import AddStudyMaterialPanel from "../../AddStudyMaterialPanel/AddStudyMaterialPanel";
import styles from "./StudyMaterial.module.css";

function StudyMaterial({
  studyMaterialPosts = [
    { fromSchoolRef: "ref", fromTeacher: "teacherMail", name: "name" },
  ],
}) {
  console.log(studyMaterialPosts, "sm posts from schoolDataFromServer");
  const [postsList, setPostsList] = useState(studyMaterialPosts || [{ fromSchoolRef: "ref", fromTeacherMail: "mail", name: "post name", subject: "sample Subject" }]);
  console.log(postsList);
  useEffect(() => {
    console.log("SM Updated")
    // return () => {
    //   cleanup
    // }
  }, [postsList])
  const updateStudyMaterial = (sm) => {
    setPostsList([sm, ...postsList]);
    console.log("I have added Post");
  };
  const userRole = useSelector((state) => state.role);
  return (
    <div className={styles.mainContainer}>
      <Helmet>
        <title>Study Material</title>
      </Helmet>
      {postsList ? postsList.map((post) => (

        <StudyMaterialPost
          fromSchoolRef={post.fromSchoolRef}
          fromTeacherMail={post.fromTeacherMail}
          name={post.name}
          fileName={post.fileName}
          subject={post.subject}
        />
      ))
        : null}
      {/* {userRole ==="Teacher" ? <AddStudyMaterialPanel /> : null } */}
      <StudyMaterialPost name=" Chapter One Notes" />
      <StudyMaterialPost name=" Chapter Two Notes" />
      <AddStudyMaterialPanel updateStudyMaterial={updateStudyMaterial} />
    </div>
  );
}

export default StudyMaterial;
