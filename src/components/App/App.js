import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "../Home/Home";
import ClassDashBoard from "./../ClassDashBoard/ClassDashBoard";
import EmailLogin from "./../Login/MainLogin/EmailLogin";
import LoginAs from "./../Login/LoginAs/LoginAs";
import NotFound404 from "./../NotFound404/NotFound404";
import Chat from "./../Chat/Chat";
import TeacherForm from "./../Login/TeacherForm/TeacherForm";
import RegistrationForm from "./../Login/RegistrationForm/RegistrationForm";
const App = () => {
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
        <Route path="/login" component={EmailLogin} />
        <Route path="/create-account" component={LoginAs} />
        <Route path="/home" component={Home} />
        <Route path="/404" component={NotFound404} />
        <Route path="/chat" component={Chat} />
        <Route path="*" component={NotFound404} />
      </Switch>
    </Router>
  );
};

export default App;
