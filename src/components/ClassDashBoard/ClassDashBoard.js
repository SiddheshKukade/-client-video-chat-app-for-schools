import React from "react";
import "./ClassDashBoard.css";
import Sidebar from "./../Sidebar/Sidebar";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import VideoMetting from "./DashBoardComponents/VideoMetting/VideoMetting";
import HomeWork from "./DashBoardComponents/HomeWork/HomeWork";
import StudyMaterial from "./DashBoardComponents/StudyMaterial/StudyMaterial";
import { Helmet } from "react-helmet";
import VideoCallOutlinedIcon from "@material-ui/icons/VideoCallOutlined";
import SchoolOutlinedIcon from "@material-ui/icons/SchoolOutlined";
import AssignmentLateOutlinedIcon from "@material-ui/icons/AssignmentLateOutlined";
import AddStudyMaterialPanel from "./AddStudyMaterialPanel/AddStudyMaterialPanel";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
function ClassDashBoard() {
  let match = useRouteMatch();
  console.log(match);
  return (
    <div className="dashboard__container">
      <Helmet>
        <title>Dashboard Title</title>
        <meta name="description" content="App Description" />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
      <Sidebar />
      <Tabs
        isFitted
        size="lg"
        align="center"
        variant="enclosed"
        colorScheme="green"
        className="dash__header__container"
      >
        <TabList>
          <div className="dash__header">
            <Link to={`${match.url}/video-meeting`}>
              <Tab
                className="nav-tabs"
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
                className="nav-tabs"
              >
                <AssignmentLateOutlinedIcon />
                Home Work
              </Tab>
            </Link>
            <Link to={`${match.url}/study-material`}>
              <Tab
                className="nav-tabs"
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
        </TabList>
        <br />
        <br />
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
        <Route path="/dashboard/video-meeting">
          <VideoMetting />
        </Route>{" "}
        <Route path="/dashboard/home-work">
          <HomeWork />
        </Route>
        <Route path="/dashboard/study-material">
          <StudyMaterial />
        </Route>
      </Tabs>
      {/* <AddStudyMaterialPanel /> */}
    </div>
  );
}

export default ClassDashBoard;
