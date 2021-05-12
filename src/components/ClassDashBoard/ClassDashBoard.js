import React from "react";
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
// import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import VideoMetting from "./DashBoardComponents/VideoMetting/VideoMetting";
import HomeWork from "./DashBoardComponents/HomeWork/HomeWork";
import { makeStyles, useTheme } from "@material-ui/core/styles";

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
function TabPanel(props) {
  const { children, value, index, ...other } = props;

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
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  let match = useRouteMatch();
  console.log(match);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  let width = window.innerWidth;
  if (width > 500) {
    return (
      <div className={styles.dashboard__container}>
        <Helmet>
          <title>Dashboard Title</title>
          <meta name="description" content="App Description" />
          <meta name="theme-color" content="#008f68" />
        </Helmet>
        <Sidebar />
        {/* <Tab
          isFitted
          size="lg"
          align="center"
          variant="enclosed"
          colorScheme="green"
          className={styles.dash__header__container}
        >
          <TabList>
            <div className={styles.dash__header}>
              <Link to={`${match.url}/video-meeting`}>
                <Tab
                  className={styles.nav - TabList}
                  _selected={{
                    color: "black",
                    fontWeight: "semibold",
                    borderWidth: "1px",
                    borderColor: "gray.500",
                    borderBottom: "0px",
                  }}
                  _focus={{
                    borderBottom: "0px",
                  }}
                >
                  <VideoCallOutlinedIcon />
                  Video Metting
                </Tab>
              </Link>
              <Link to={`${match.url}/home-work`}>
                <Tab
                  _selected={{
                    color: "black",
                    fontWeight: "semibold",
                    borderWidth: "1px",
                    borderColor: "gray.500",
                    borderBottom: "0px",
                  }}
                  _focus={{
                    borderBottom: "0px",
                  }}
                  className={styles.navtabs}
                >
                  <AssignmentLateOutlinedIcon />
                  Home Work
                </Tab>
              </Link>
              <Link to={`${match.url}/study-material`}>
                <Tab
                  className={styles.navtabs}
                  _selected={{
                    color: "black",
                    fontWeight: "semibold",
                    borderWidth: "1px",
                    borderColor: "gray.500",
                    borderBottom: "0px",
                  }}
                  _focus={{
                    borderBottom: "0px",
                  }}
                >
                  <SchoolOutlinedIcon /> Study Material
                </Tab>
              </Link>
            </div>
          </TabList> */}
        {/* <br />
          <br /> */}

        {/* //aleady commenterd */}
        {/* <TabPanels>
          <TabPanel>
            <Route path="/dashboard/video-meeting">
              <VideoMetting />
            </Route>
          </TabPanel>
          <TabPanel>
            <Route path="/dashboard/home-work">
              <HomeWork />
            </Route>
          </TabPanel>
          <TabPanel>
            <Route path="/dashboard/study-material">
              <StudyMaterial />
            </Route>
          </TabPanel>
        </TabPanels> */}
        {/* <Route path="/dashboard/video-meeting">
          <VideoMetting />
        </Route>
        <Route path="/dashboard/home-work">
          <HomeWork />
        </Route>
        <Route path="/dashboard/study-material">
          <StudyMaterial />
          <AddStudyMaterialPanel class={styles.addSM} />
        </Route> */}
        {/* </Tab> */}
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
                    Video Meeting
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
              <StudyMaterial />
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              <HomeWork />
            </TabPanel>
          </SwipeableViews>
        </div>
      </div>
    );
  } else {
    return <ClassDashBoardMobile />;
  }
}

export default ClassDashBoard;
