import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Header from "./layouts/Header";
import Home from "../Routes/Home";
import Talent from "../Routes/Talent";
import Profile from "../Routes/Profile";
import Login from "../Routes/Login";
import Register from "../Routes/Register";
import ProfileForms from "../Routes/ProfileForms";
import ProfileDetail from "../Routes/ProfileDetail";
import Footer from "./layouts/Footer";

export default () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/talent" component={Talent} />
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile-detail/:profile_id" component={ProfileDetail} />
        <Route path="/create-profile" component={ProfileForms} />
        <Redirect from="/*" to="/" />
      </Switch>
      <Footer />
    </Router>
  );
};
