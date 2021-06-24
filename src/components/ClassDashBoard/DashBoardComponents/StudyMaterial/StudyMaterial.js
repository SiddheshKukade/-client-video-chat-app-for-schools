import React, { useEffect } from "react";
import StudyMaterialPost from "./StudyMaterialPost/StudyMaterialPost";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import AddStudyMaterialPanel from "../../AddStudyMaterialPanel/AddStudyMaterialPanel";
import styles from "./StudyMaterial.module.css";
import { useForm } from "react-hook-form";

function StudyMaterial({ studyMaterialList, studyMaterialPosts }) {
  const userRole = useSelector((state) => state.role);
  return (
    <div className={styles.mainContainer}>
      <Helmet>
        <title>Study Material</title>
      </Helmet>
      {/* <TitleComponent title={title} /> */}
      {/* {studyMaterialPosts.map((post) => (
        <StudyMaterialPost
          postedAt={post.postedAt}
          fromSchoolRef={post.fromSchoolRef}
          fromTeacherMail={post.fromTeacherMail}
          name={post.name}
          file={post.file}
          subject={post.subject}
          standard={post.standard}
          createdAt={post.createdAt}
          updatedAt={post.updatedAt}
        />
      ))} */}
      {/* {userRole ==="Teacher" ? <AddStudyMaterialPanel /> : null } */}
      <StudyMaterialPost title="Teacher has posted Chapter Two Notes" />
      <AddStudyMaterialPanel />
    </div>
  );
}

export default StudyMaterial;
