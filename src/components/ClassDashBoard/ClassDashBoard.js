import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Sidebar from "./../Sidebar/Sidebar";
import styles from "./ClassDashBoard.module.css";
import VideoMetting from "./DashBoardComponents/VideoMetting/VideoMetting";
import HomeWork from "./DashBoardComponents/HomeWork/HomeWork";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import axios from "axios";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import StudyMaterial from "./DashBoardComponents/StudyMaterial/StudyMaterial";
import { Helmet } from "react-helmet";
import VideocamIcon from "@material-ui/icons/Videocam";
import ClassDashBoardMobile from "./../mobile/ClassDashBoardMobile/ClassDashBoardMobile";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import AssignmentIcon from "@material-ui/icons/Assignment";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import Box from "@material-ui/core/Box";
import Chat from "./../Chat/Chat";
import { useDispatch, useSelector } from "react-redux";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  useEffect(() => {
    axios.get();
  }, []);

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));
function ClassDashBoard() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [schoolName, setSchoolName] = useState("");
  const [teacherList, setTeacherList] = useState([]);
  const [homeWorkList, setHomeWorkList] = useState([]);
  const [studyMaterialList, SetStudyMaterialList] = useState([]);
  let match = useRouteMatch();
  console.log(match);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const requestHomeWorkFromServer = () => {
    axios
      .post(process.env.BACKEND_URL + "/getHomeWork", {
        referCode: state.schoolRefCode,
      })
      .then((res) =>
        //set the state values here and pass them down
        console.log(res.data)
      )
      .catch((err) => console.log(err));
  };

  const requestStudyMaterialFromServer = () => {
    axios
      .post(process.env.BACKEND_URL + "/getStudyMaterial", {
        referCode: state.schoolRefCode,
      })
      .then((res) =>
        //set the state values here and pass them down
        console.log(res.data)
      )
      .catch((err) => console.log(err));
  };
  const requestSchoolInfo = () => {
    axios
      .post(process.env.BACKEND_URL + "/schoolInfo", {
        referCode: state.schoolRefCode,
      })
      .then((res) =>
        //set the state values here and pass them down
        console.log(res.data)
      )
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    requestSchoolInfo();
    requestHomeWorkFromServer();
    requestStudyMaterialFromServer();
  }, []);
  let width = window.innerWidth;
  if (width > 500) {
    return (
      <div className={styles.dashboard__container}>
        <Helmet>
          <title>Dashboard Title</title>
          <meta name="description" content="App Description" />
          <meta name="theme-color" content="#008f68" />
        </Helmet>
        <Sidebar
          userName={state.userName}
          teacherList={teacherList}
          schoolName={schoolName}
        />

        <div className={styles.dash__header__container}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              <Tab
                label={
                  <div className={styles.iconcontainer}>
                    <VideocamIcon
                      style={{ verticalAlign: "middle", marginRight: "1rem" }}
                    />
                    Video Meeting
                  </div>
                }
              />
              <Tab
                label={
                  <div className={styles.iconcontainer}>
                    <MenuBookIcon
                      style={{ verticalAlign: "middle", marginRight: "1rem" }}
                    />
                    Study Material
                  </div>
                }
              />{" "}
              <Tab
                label={
                  <div className={styles.iconcontainer}>
                    <AssignmentIcon
                      style={{ verticalAlign: "middle", marginRight: "1rem" }}
                    />
                    Homework
                  </div>
                }
              />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <VideoMetting />
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <StudyMaterial studyMaterialList={studyMaterialList} />
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              <HomeWork homeWorkList={homeWorkList} />
            </TabPanel>
          </SwipeableViews>
          <Chat />
        </div>
      </div>
    );
  } else {
    return <ClassDashBoardMobile />;
  }
}

export default ClassDashBoard;
