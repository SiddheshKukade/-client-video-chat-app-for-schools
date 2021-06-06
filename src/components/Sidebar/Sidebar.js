// import React from "react";
// import "./Sidebar.css";
// import clsx from "clsx";
// import { makeStyles } from "@material-ui/core/styles";
// import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
// import Button from "@material-ui/core/Button";
// import List from "@material-ui/core/List";
// import Divider from "@material-ui/core/Divider";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import MailIcon from "@material-ui/icons/Mail";
// import MenuIcon from "@material-ui/icons/Menu";
// import styles from "../mobile/ClassDashBoardMobile/TopNavMobile.module.css";
// import AccountCircleIcon from "@material-ui/icons/AccountCircle";
// const useStyles = makeStyles({
//   list: {
//     width: 250,
//   },
//   fullList: {
//     width: "auto",
//   },
//   mainNav: { fontSize: "1.5rem" },
// });
// const Sidebar = () => {
//   const classes = useStyles();
//   const [state, setState] = React.useState({
//     left: false,
//   });

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (
//       event &&
//       event.type === "keydown" &&
//       (event.key === "Tab" || event.key === "Shift")
//     ) {
//       return;
//     }

//     setState({ ...state, [anchor]: open });
//   };

//   const list = (anchor) => (
//     <div
//       className={clsx(classes.list, {
//         [classes.fullList]: anchor === "top" || anchor === "bottom",
//       })}
//       role="presentation"
//       onClick={toggleDrawer(anchor, false)}
//       onKeyDown={toggleDrawer(anchor, false)}
//     >
//       <List>
//         <ListItem button>
//           <ListItemText>
//             <b>Siddhesh B. Kukade</b>
//           </ListItemText>
//         </ListItem>
//         <Divider />
//         <ListItem button>
//           <ListItemText>
//             <b>Teachers</b>
//           </ListItemText>
//         </ListItem>
//         {["Mr,Kuk.de", "TEACHERS", "Mr.R", "Drafts"].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//         <Divider />
//         <ListItem button>
//           <ListItemText>
//             <b>Others</b>
//           </ListItemText>
//         </ListItem>
//         {["Announcements", "Attedance"].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//         <Divider />
//         {["All mail", "Trash", "Spam"].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>
//               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//             </ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );

//   // return (
//   //   <div className={styles.top_container}>
//   //     {["left"].map((anchor) => (
//   //       <div key={anchor}>
//   //         <Button onClick={toggleDrawer(anchor, true)}>
//   //           <MenuIcon className={styles.menuIcon} />
//   //         </Button>
//   //         <SwipeableDrawer
//   //           anchor={anchor}
//   //           open={state[anchor]}
//   //           onClose={toggleDrawer(anchor, false)}
//   //           onOpen={toggleDrawer(anchor, true)}
//   //         >
//   //           {list(anchor)}
//   //         </SwipeableDrawer>
//   //       </div>
//   //     ))}
//   //     <div className={styles.school_name_container}>Z.P Kakani Vidyalay</div>
//   //     <div className="profile">
//   //       <AccountCircleIcon className={styles.profileIcon} />
//   //     </div>
//   //   </div>
//   // <></>
//   return (
//     <div className="sidebar__container">
//       <h1 class=" sidebar-head">Video Chat App</h1>
//       <h2 class="list-title profile-name">Siddhesh B. Kukade</h2>

//       <div class="list-title  font-extrabold text-lg py-2">TEACHERS</div>

//       <ul>
//         <li className="list-entry">Mr. P. B Mali</li>
//         <li className="list-entry">Mr. P. B Mali</li>
//       </ul>
//       <div class="list-title   ">
//         SUBJECTS <span>(121)</span>
//       </div>

//       <ul>
//         <li className="list-entry channels-list ">
//           <span>#</span>Marathi
//         </li>

//         <li className="list-entry channels-list">
//           <span>#</span>English
//         </li>

//         <li className="list-entry channels-list">
//           <span>#</span>Science
//         </li>

//         <li className="list-entry channels-list">
//           <span>#</span>Algebra
//         </li>
//       </ul>

//       <div class="list-title direct-message">OTHER</div>
//       <ul>
//         <li class="list-entry">ANNOUNCEMENTS</li>
//         <li class=" list-entry">ATTENDANCE</li>
//       </ul>
//       <div class="list-title direct-message font-extrabold text-lg py-2">
//         DIRECT MESSAGES <span>(12)</span>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
// //     <h1>Video Chat App</h1>
// //   </div>
// //   <div className="flex flex-col ml-4 bg-pink-500">
// //     <ul>
// //       <li>
// //         <h6 className="text-3xl">Techers</h6>
// //       </li>
// //       <li>
// //         <span>N. U Mali</span>
// //       </li>
// //       <li>
// //         <span>N. B Kale</span>
// //       </li>
// //     </ul>
// //   </div>

// //   <div className="flex flex-col">
// //     <ul>
// //       <li>
// //         <h6>Subjects</h6>
// //       </li>
// //       <li>
// //         <span>Marathi</span>
// //       </li>
// //       <li>
// //         <span>Science</span>
// //       </li>
// //     </ul>
// //   </div>

// //   <div className="flex flex-col">
// //     <h6>Other</h6>
// //     <span>Announcement</span>
// //     <span>Attendance</span>
// //   </div>
// //   <div className="">
// //     <h6>Persnal</h6>
// //     <span></span>
// //     <span></span>
// //   </div>
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandMore from "@material-ui/icons/ExpandMore";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import Divider from "@material-ui/core/Divider";
import SurroundSoundIcon from "@material-ui/icons/SurroundSound";
import DateRangeIcon from "@material-ui/icons/DateRange";
import SubjectIcon from "@material-ui/icons/Subject";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    position: "relative",
    overflow: "auto",
    maxHeight: "100vh",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  container: {
    height: "100vh",
    backgroundColor: `var(--primary)`,
    flex: 0.25,
    borderRight: "1px solid #d7d7d7",
  },
}));
export default function Sidebar({ userName, teacherList, schoolName }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [openTeacher, setOpenTeacher] = React.useState(true);
  const [openOther, setOpenOther] = React.useState(true);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClickTeacher = () => {
    setOpenTeacher(!openTeacher);
  };
  const handleClickOther = () => {
    setOpenOther(!openOther);
  };
  const [index, setIndex] = React.useState(0);
  const [collapsed, setCollapsed] = React.useState(false);
  const onClick = () => {
    setCollapsed(!collapsed);
  };
  const commonProps = (i) => ({
    selected: index === i,
    onClick: () => setIndex(i),
    collapsed,
    dotOnCollapsed: true,
  });
  return (
    <div className={classes.container}>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Video Chat app
          </ListSubheader>
        }
        className={classes.root}
      >
        {/* <GmailSidebarItem
        color={"#da3125"}
        startIcon={<Inbox />}
        label={"Inbox"}
        amount={"1,198"}
        {...commonProps(0)}
        dotOnCollapsed={false}
      /> */}
        <ListItem
          button
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Siddhesh Bhupedra Kukade" />
        </ListItem>
        <Divider />
        {/* <GmailSidebarItem
        color={"#1a73e8"}
        startIcon={<PeopleAltIcon />}
        label="Teachers"
        {...commonProps(0)}
      /> */}
        <ListItem
          button
          selected={selectedIndex === 1}
          onClick={(event) => {
            handleClickTeacher();
            handleListItemClick(event, 1);
          }}
        >
          <ListItemIcon>
            <PeopleAltIcon />
          </ListItemIcon>
          <ListItemText primary="Teachers" />
          {openTeacher ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openTeacher} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Siddhesh Bhupendra Kukade" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Siddhesh Bhupendra Kukade" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Siddhesh Bhupendra Kukade" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Siddhesh Bhupendra Kukade" />
            </ListItem>
          </List>
        </Collapse>
        <Divider />
        <ListItem
          button
          selected={selectedIndex === 2}
          onClick={(event) => {
            handleClick();
            handleListItemClick(event, 2);
          }}
        >
          <ListItemIcon>
            <SubjectIcon />
          </ListItemIcon>
          <ListItemText primary="Subjects" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="Maths" />
            </ListItem>
          </List>
        </Collapse>
        <Divider />
        <ListItem
          button
          selected={selectedIndex === 3}
          onClick={(event) => {
            handleClickOther();
            handleListItemClick(event, 3);
          }}
        >
          <ListItemIcon>
            <SubjectIcon />
          </ListItemIcon>
          <ListItemText primary="Others" />
          {openOther ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openOther} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <SurroundSoundIcon />
              </ListItemIcon>
              <ListItemText primary="Announcements" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <DateRangeIcon />
              </ListItemIcon>
              <ListItemText primary="Attendances" />
            </ListItem>
          </List>
        </Collapse>
        <Divider />
      </List>
    </div>
  );
}
