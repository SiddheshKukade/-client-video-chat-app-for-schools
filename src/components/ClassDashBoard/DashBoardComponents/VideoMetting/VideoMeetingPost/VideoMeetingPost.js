import React from "react";
import DuoIcon from "@material-ui/icons/Duo";
import styles from "./VideoMeetingPost.module.css";
const VideoMeetingPost = ({ title = "so dsds sd id", fromTeacher, date }) => {
  const handleClickVideo = () => {
    window.location.replace(
      `http://localhost:3030/${title.replace(/\s/g, "")}`
    );
  };
  return (
    <div className="post__wrapper">
      <div className="upper__wrapper">
        <div className="first__wrapper">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
           */}
          {/* <DuoIcon /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </div>
        <div className="second__wrapper">
          <div className="post__title">{title}</div>
          <div className="post__date">
            {/* 23.11.2021 Posted at {date.toISOString().slice(0, 10)} */}2
            hours ago
          </div>
        </div>
      </div>
      <div className="third__wrapper" title="Click to Join Meeting Directly">
        <button className={styles.button} onClick={handleClickVideo}>
          Join Meeting
        </button>
      </div>
    </div>
  );
};

export default VideoMeetingPost;
