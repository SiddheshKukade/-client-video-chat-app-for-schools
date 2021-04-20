import React from "react";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Sid from "./../Sid";
import Sample from "./Sample";
import ClassDashBoard from "./../ClassDashBoard/ClassDashBoard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard">
          <ClassDashBoard />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
      {/* <Home /> */}
      {/* <Login /> */}
      {/* <Sample /> */}
    </Router>
    // <Sid />

    // <h1 className="text-indigo-200  bg-red-500   ">
    //   Jai Aai Jai Baba
    //   <hr />
    //   <hr />
    //   <hr />
    //   Om GanaPatay Namah <hr /> Om namah Shivay
    // </h1>
  );
};

export default App;
