import React, { useEffect } from "react";
import StudyMaterialPost from "./StudyMaterialPost/StudyMaterialPost";
import { Helmet } from "react-helmet";
import AddStudyMaterialPanel from "../../AddStudyMaterialPanel/AddStudyMaterialPanel";
import styles from "./StudyMaterial.module.css";
function StudyMaterial() {
  return (
    <div className={styles.mainContainer}>
      <Helmet>
        <title>Study Material</title>
      </Helmet>
      {/* <TitleComponent title={title} /> */}
      <StudyMaterialPost />
      <AddStudyMaterialPanel />
    </div>
  );
}

export default StudyMaterial;
