import React, { useState } from "react";
import styles from "./ClassDashBoardMobile.module.css";
import TopNavMobile from "./TopNavMobile";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import VideocamIcon from "@material-ui/icons/Videocam";
import AssignmentIcon from "@material-ui/icons/Assignment";
import MenuBookIcon from "@material-ui/icons/MenuBook";

import VideoMeetingMobile from "./../ClassDashBoardComponents/VideoMeetingMobile/VideoMeetingMobile";
import StudyMaterialMobile from "./../ClassDashBoardComponents/StudyMaterialMobile/StudyMaterialMobile";
import HomeWorkMobile from "./../ClassDashBoardComponents/HomeWorkMobile/HomeWorkMobile";

const ClassDashBoardMobile = () => {
  const [value, setValue] = useState("recents");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles.main_container}>
      <TopNavMobile />

      {/* MIDDLE UI */}
      <div className={styles.middle_container}>
        <pre>{value}</pre>

        {value === "recents" ? <h1>AAi Baba</h1> : null}
        {value === "Lectures" ? <VideoMeetingMobile /> : null}
        {value === "Study Material" ? <StudyMaterialMobile /> : null}
        {value === "Homework" ? <HomeWorkMobile /> : null}
      </div>
      {/* BOTTOM NAVIGATION  */}
      <div className={styles.navContainer}>
        <BottomNavigation
          value={value}
          onChange={handleChange}
          className={styles.bottom_nav}
        >
          <BottomNavigationAction
            label="Lectures"
            value="Lectures"
            icon={<VideocamIcon />}
          />
          <BottomNavigationAction
            label="Study Material"
            value="Study Material"
            icon={<MenuBookIcon />}
          />
          <BottomNavigationAction
            label="Homework"
            value="Homework"
            icon={<AssignmentIcon />}
          />
        </BottomNavigation>
      </div>
    </div>
  );
};

export default ClassDashBoardMobile;
