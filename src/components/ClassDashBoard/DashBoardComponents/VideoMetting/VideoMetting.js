import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import styles from "./VideoMeeeting.module.css";
import VideoMeetingPost from "./VideoMeetingPost/VideoMeetingPost";
import AddVideoMeeting from "./AddVideoMeeting/AddVideoMeeting";
function VideoMetting() {
  return (
    <div className={styles.mainContainer}>
      <Helmet>
        <title>Video Meeting</title>
      </Helmet>
      {/* <TitleComponent title={title} /> */}
      <VideoMeetingPost />
      <VideoMeetingPost />
      <VideoMeetingPost />
      <VideoMeetingPost />
      <VideoMeetingPost />
      <AddVideoMeeting />
    </div>
  );
}

export default VideoMetting;
