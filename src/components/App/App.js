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
import LoginAs from "./../Login/LoginAs/LoginAs";

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
        <Route path="/login" component={LoginAs} />
        <Route path="/home" component={Home} />
        {/* <Route path="/user-details" component={UserDetailsFrom} /> */}
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
