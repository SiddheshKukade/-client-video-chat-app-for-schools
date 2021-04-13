import React from "react";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar__container   ml-0 flex-col items-start justify-start w-full h-screen  ">
      <h1 class="list-title sidebar-head text-2xl ">Video Chat App</h1>
      <h2 class="list-title profile-name">Siddhesh B. Kukade</h2>

      <div class="list-title channels font-extrabold text-lg py-2">
        TEACHERS
      </div>

      <ul>
        <li className="font-bold">Mr. P. B Mali</li>
        <li className="font-bold">Mr. P. B Mali</li>
      </ul>
      <div class="list-title channels font-extrabold text-lg py-2">
        SUBJECTS <span>(121)</span>
      </div>

      <ul>
        <li className="font-bold"># Marathi</li>
        <li className="font-bold"># English</li>
        <li className="font-bold"># Science</li>
        <li className="font-bold"># Algebra</li>
      </ul>

      <div class="list-title direct-message font-extrabold text-lg py-2">
        OTHER
      </div>
      <ul>
        <li class="icon-favorite font-bold">ANNOUNCEMENTS</li>
        <li class=" font-bold">ATTENDANCE</li>
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
