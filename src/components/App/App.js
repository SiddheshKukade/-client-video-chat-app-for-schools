import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  Redirect,
} from "react-router-dom";
import Home from "../Home/Home";
import ClassDashBoard from "./../ClassDashBoard/ClassDashBoard";
import EmailLogin from "./../Login/MainLogin/EmailLogin";
import LoginAs from "./../Login/LoginAs/LoginAs";
import NotFound404 from "./../NotFound404/NotFound404";
import TeacherForm from "./../Login/TeacherForm/TeacherForm";
const App = () => {
  return (
    // <Sid />
    <Router>
      <Route path="/" exact>
        <Redirect
          to={{
            pathname: "/dashboard",
          }}
        />
      </Route>
      <Switch>
        <Route path="/dashboard" component={ClassDashBoard} />
        <Route path="/login" component={EmailLogin} />
        <Route path="/create-account" component={LoginAs} />
        <Route path="/home" component={Home} />
        <Route path="/404" component={NotFound404} />
        <Route path="/zz" component={TeacherForm} />
        <Route path="*" component={NotFound404} />
      </Switch>
    </Router>

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
