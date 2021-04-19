import React from "react";
import "./Sidebar.css";
const Sidebar = () => {
  return (
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
