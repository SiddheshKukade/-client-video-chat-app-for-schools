import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import styles from "./VideoMeeeting.module.css";
import VideoMeetingPost from "./VideoMeetingPost/VideoMeetingPost";
import AddVideoMeeting from "./AddVideoMeeting/AddVideoMeeting";
function VideoMetting({ videoMeetingPosts }) {
  const [postsList, setPostsList] = useState(videoMeetingPosts || [{ fromSchoolRef: "ref", fromTeacher: "mail", title: "post name", subject: "sample Subject" }]);

  const updateVM = (vm) => {
    setPostsList([vm, ...postsList]);
    console.log("I have added VM");
  }
  useEffect(() => {
    console.log("SM Updated")
    // return () => {
    //   cleanup
    // }
  }, [postsList])
  return (
    <div className={styles.mainContainer}>
      <Helmet>
        <title>Video Meeting</title>
      </Helmet>
      {console.log("Video Meetings are   :", postsList)
      }      {postsList ?
        postsList.map((post) => (
          <VideoMeetingPost
            title={post.title}
            fromTeacher={post.fromTeacher}
            subject={post.subject}
            fromSchoolRef={post.fromSchoolRef}
          />
        )) : null}
      <VideoMeetingPost title="Java Programming  " />
      <VideoMeetingPost title="PHP Class" />
      <VideoMeetingPost title="Maths Class" />
      <AddVideoMeeting updateVM={updateVM} />
    </div>
  );
}

export default VideoMetting;
