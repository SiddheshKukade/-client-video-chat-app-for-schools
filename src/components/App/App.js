import React from "react";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Sid from "./../Sid";
import Sample from "./Sample";
import ClassDashBoard from "./../ClassDashBoard/ClassDashBoard";
import FormikLogin from "./../Login/FormikLogin/FormikLogin";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  Redirect,
} from "react-router-dom";

const App = () => {
  // const [redirect, setRedirect] = React.useState("/dashboard");
  return (
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
        <Route path="/login" component={FormikLogin} />
        <Route path="/home" component={Home} />
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
