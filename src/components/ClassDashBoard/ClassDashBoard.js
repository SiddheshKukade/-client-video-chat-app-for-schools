import React from "react";
import "./ClassDashBoard.css";
import Sidebar from "./../Sidebar/Sidebar";
// import { Paper, Tab, Tabs } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import VideoMetting from "./DashBoardComponents/VideoMetting/VideoMetting";
import HomeWork from "./DashBoardComponents/HomeWork/HomeWork";
import StudyMaterial from "./DashBoardComponents/StudyMaterial/StudyMaterial";

function ClassDashBoard() {
  return (
    <div className="dashboard__container">
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
            <Tab className="nav-tabs">Study Material</Tab>
          </div>
        </TabList>

        <TabPanels>
          <TabPanel>
            <VideoMetting />
          </TabPanel>
          <TabPanel>
            <HomeWork />
          </TabPanel>
          <TabPanel>
            <StudyMaterial />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default ClassDashBoard;
