import React, { useEffect } from "react";
import { TitleComponent } from "../../../Title/TitleComponent";
import "./StudyMaterial";
import StudyMaterialPost from "./StudyMaterialPost/StudyMaterialPost";
import { Helmet } from "react-helmet";

const titlep = "sid Material - Sid";
function StudyMaterial() {
  return (
    <>
      <Helmet>
        <title>Study Material</title>
      </Helmet>
      {/* <TitleComponent title={title} /> */}
      <StudyMaterialPost />
    </>
  );
}

export default StudyMaterial;
