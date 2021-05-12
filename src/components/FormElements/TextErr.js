import React from "react";
import "./formStyles.css";
function TextErr(props) {
  return <div className="err">{props.children}</div>;
}

export default TextErr;
