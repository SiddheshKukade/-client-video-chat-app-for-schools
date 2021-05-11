import React from "react";
import { Helmet } from "react-helmet";
import styles from "./HomeWorkMobile.module.css";
import HomeWorkMobilePost from "./HomeWorkMobilePost/HomeWorkMobilePost";
const HomeWorkMobile = () => {
  return (
    <>
      <Helmet>
        <title>Home Work</title>
        <meta name="description" content="App Description" />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
      {/* <TitleComponent title={title} /> */}
      <HomeWorkMobilePost />
      <HomeWorkMobilePost />
      <HomeWorkMobilePost />
    </>
  );
};

export default HomeWorkMobile;
