import React from "react";
import styles from "./ClassDashBoardMobile.module.css";
import TopNavMobile from "./TopNavMobile";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import VideocamIcon from "@material-ui/icons/Videocam";
import AssignmentIcon from "@material-ui/icons/Assignment";
import MenuBookIcon from "@material-ui/icons/MenuBook";

import BatteryCharging30Icon from "@material-ui/icons/BatteryCharging30";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import BackupIcon from "@material-ui/icons/Backup";

const ClassDashBoardMobile = () => {
  const [value, setValue] = React.useState("recents");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles.main_container}>
      <TopNavMobile />

      {/* MIDDLE UI */}
      <div className={styles.middle_container}>
        <pre>{value}</pre>
      </div>

      {/* 
      {value === "recents" ? <h1>AAi Baba</h1> : null}
      {value === "Lectures" ? <AutorenewIcon /> : null}
      {value === "Study Material" ? <BackupIcon /> : null}
      {value === "Homework" ? <BatteryCharging30Icon /> : null} */}

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
