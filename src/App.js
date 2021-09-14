import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import firebase from "firebase/app";
import "firebase/auth";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { UserContext } from "./context/UserContext";

import Footer from "./layout/Footer";
import Header from "./layout/Header";

import firebaseConfig from "./Config/firebaseConfig";
firebase.initializeApp(firebaseConfig);

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Switch>
          <Route exact path="/react-js-pro-githuber" component={Home} />
          <Route
            exact
            path="/react-js-pro-githuber/signin"
            component={SignIn}
          />
          <Route
            exact
            path="/react-js-pro-githuber/signup"
            component={SignUp}
          />
          <Route exact path="*" component={NotFound} />
        </Switch>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
};

export default App;
