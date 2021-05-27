import React from "react";
import "./Sidebar.css";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
// import styles from "./TopNavMobile.module.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  mainNav: { fontSize: "1.5rem" },
});
const Sidebar = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button>
          <ListItemText>
            <b>Siddhesh B. Kukade</b>
          </ListItemText>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText>
            <b>Teachers</b>
          </ListItemText>
        </ListItem>
        {["Mr,Kuk.de", "TEACHERS", "Mr.R", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        <Divider />
        <ListItem button>
          <ListItemText>
            <b>Others</b>
          </ListItemText>
        </ListItem>
        {["Announcements", "Attedance"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        <Divider />
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    // <div className={styles.top_container}>
    //   {["left"].map((anchor) => (
    //     <div key={anchor}>
    //       <Button onClick={toggleDrawer(anchor, true)}>
    //         <MenuIcon className={styles.menuIcon} />
    //       </Button>
    //       <SwipeableDrawer
    //         anchor={anchor}
    //         open={state[anchor]}
    //         onClose={toggleDrawer(anchor, false)}
    //         onOpen={toggleDrawer(anchor, true)}
    //       >
    //         {list(anchor)}
    //       </SwipeableDrawer>
    //     </div>
    //   ))}
    //   <div className={styles.school_name_container}>Z.P Kakani Vidyalay</div>
    //   <div className="profile">
    //     <AccountCircleIcon className={styles.profileIcon} />
    //   </div>
    // </div>
    // <></>
    // return (
    <div className="sidebar__container">
      <h1 class=" sidebar-head">Video Chat App</h1>
      <h2 class="list-title profile-name">Siddhesh B. Kukade</h2>

      <div class="list-title  font-extrabold text-lg py-2">TEACHERS</div>

      <ul>
        <li className="list-entry">Mr. P. B Mali</li>
        <li className="list-entry">Mr. P. B Mali</li>
      </ul>
      <div class="list-title   ">
        SUBJECTS <span>(121)</span>
      </div>

      <ul>
        <li className="list-entry channels-list ">
          <span>#</span>Marathi
        </li>

        <li className="list-entry channels-list">
          <span>#</span>English
        </li>

        <li className="list-entry channels-list">
          <span>#</span>Science
        </li>

        <li className="list-entry channels-list">
          <span>#</span>Algebra
        </li>
      </ul>

      <div class="list-title direct-message">OTHER</div>
      <ul>
        <li class="list-entry">ANNOUNCEMENTS</li>
        <li class=" list-entry">ATTENDANCE</li>
      </ul>
      <div class="list-title direct-message font-extrabold text-lg py-2">
        DIRECT MESSAGES <span>(12)</span>
      </div>
    </div>
  );
};

export default Sidebar;
//     <h1>Video Chat App</h1>
//   </div>
//   <div className="flex flex-col ml-4 bg-pink-500">
//     <ul>
//       <li>
//         <h6 className="text-3xl">Techers</h6>
//       </li>
//       <li>
//         <span>N. U Mali</span>
//       </li>
//       <li>
//         <span>N. B Kale</span>
//       </li>
//     </ul>
//   </div>

//   <div className="flex flex-col">
//     <ul>
//       <li>
//         <h6>Subjects</h6>
//       </li>
//       <li>
//         <span>Marathi</span>
//       </li>
//       <li>
//         <span>Science</span>
//       </li>
//     </ul>
//   </div>

//   <div className="flex flex-col">
//     <h6>Other</h6>
//     <span>Announcement</span>
//     <span>Attendance</span>
//   </div>
//   <div className="">
//     <h6>Persnal</h6>
//     <span></span>
//     <span></span>
//   </div>
