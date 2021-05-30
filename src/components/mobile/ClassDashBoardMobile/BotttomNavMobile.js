import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import VideocamIcon from "@material-ui/icons/Videocam";
import AssignmentIcon from "@material-ui/icons/Assignment";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import styles from "./BotttomNavMobile.module.css";
const BotttomNavMobile = () => {
  const [value, setValue] = React.useState("recents");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="navContainer">
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
          label="Study Matetial"
          value="Study Matetial"
          icon={<MenuBookIcon />}
        />
        <BottomNavigationAction
          label="Homework"
          value="Homework"
          icon={<AssignmentIcon />}
        />
      </BottomNavigation>
    </div>
  );
};

export default BotttomNavMobile;
