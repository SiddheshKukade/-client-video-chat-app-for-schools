import React from "react";
import HomeWorkPost from "./HomeWorkPost/HomeWorkPost";
import { Helmet } from "react-helmet";

const titl = "Homework - Sid";
function HomeWork() {
  return (
    <>
      <Helmet>
        <title>Home Work</title>
        <meta name="description" content="App Description" />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
      {/* <TitleComponent title={title} /> */}
      <HomeWorkPost />
    </>
  );
}

export default HomeWork;
