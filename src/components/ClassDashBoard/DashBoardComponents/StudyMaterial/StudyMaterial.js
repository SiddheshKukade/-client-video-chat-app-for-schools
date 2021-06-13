import React, { useEffect } from "react";
import StudyMaterialPost from "./StudyMaterialPost/StudyMaterialPost";
import { Helmet } from "react-helmet";
import AddStudyMaterialPanel from "../../AddStudyMaterialPanel/AddStudyMaterialPanel";
import styles from "./StudyMaterial.module.css";
function StudyMaterial({ studyMaterialList, studyMaterialPosts }) {
  return (
    <div className={styles.mainContainer}>
      <Helmet>
        <title>Study Material</title>
      </Helmet>
      {/* <TitleComponent title={title} /> */}
      {studyMaterialPosts.map((post) => (
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
      ))}

      <AddStudyMaterialPanel />
    </div>
  );
}

export default StudyMaterial;
