import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import styles from "./VideoMeeeting.module.css";
import VideoMeetingPost from "./VideoMeetingPost/VideoMeetingPost";
import AddVideoMeeting from "./AddVideoMeeting/AddVideoMeeting";
function VideoMetting({ videoMeetingPosts }) {
  return (
    <div className={styles.mainContainer}>
      <Helmet>
        <title>Video Meeting</title>
      </Helmet>
      {/* <TitleComponent title={title} /> */}
      {/* {videoMeetingPosts.map((post) => (
        <VideoMeetingPost
          updatedAt={post.updatedAt}
          title={post.title}
          fromTeacher={post.fromTeacher}
          date={post.data}
        />
      ))} */}
      <VideoMeetingPost title="Java Programming  " />
      <VideoMeetingPost title="PHP Class" />
      <VideoMeetingPost title="Maths Class" />
      {/* <AddVideoMeeting /> */}
    </div>
  );
}

export default VideoMetting;
