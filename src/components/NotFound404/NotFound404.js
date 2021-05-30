import React from "react";
import PageNotFound from "./notfound.jpg";
import { Link } from "react-router-dom";
const NotFound404 = () => {
  return (
    <div>
      <img src={PageNotFound} />
      <p style={{ textAlign: "center" }}>
        <Link to="/dashboard">Go to Home </Link>
      </p>
    </div>
  );
};

export default NotFound404;
