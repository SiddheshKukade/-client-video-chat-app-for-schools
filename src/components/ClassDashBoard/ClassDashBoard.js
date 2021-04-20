import React from "react";
import "./ClassDashBoard.css";
import Sidebar from "./../Sidebar/Sidebar";
// import { Paper, Tab, Tabs } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import VideoMetting from "./DashBoardComponents/VideoMetting/VideoMetting";
import HomeWork from "./DashBoardComponents/HomeWork/HomeWork";
import StudyMaterial from "./DashBoardComponents/StudyMaterial/StudyMaterial";
import { Helmet } from "react-helmet";
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
                  color: "white",
                  bg: "blue.100",
                  borderWidth: "3px",
                  borderColor: "red.200",
                }}
                _focus={{ borderWidth: "3px", borderColor: "green.200" }}
              >
                Video Metting
              </Tab>
            </Link>
            <Link to={`${match.url}/home-work`}>
              <Tab
                _selected={{
                  borderWidth: "3px",
                  borderColor: "red.200",
                  borderBottom: "0px",
                }}
                className="nav-tabs"
              >
                Home Work
              </Tab>
            </Link>
            <Link to={`${match.url}/study-material`}>
              <Tab className="nav-tabs">Study Material</Tab>
            </Link>
          </div>
        </TabList>

        <TabPanels>
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
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default ClassDashBoard;
