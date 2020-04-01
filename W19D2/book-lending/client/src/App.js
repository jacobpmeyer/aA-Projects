import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BookIndex from "./pages/BookIndex";
import BookShow from "./pages/BookShow";
import AuthorIndex from "./pages/AuthorIndex";
import AuthorShow from "./pages/AuthorShow";
import NavBar from "./components/nav_bar/NavBar";
import ErrorPage from "./pages/ErrorPage";
import UserProfile from "./pages/UserProfile";
import ProtectedRoute from "./components/util/ProtectedRoute";
import AuthRoute from "./components/util/AuthRoute";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignupPage";

export default () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <AuthRoute path="/login" component={LoginPage} />
        <AuthRoute path="/signup" component={SignUpPage} />
        <Route exact path="/authors" component={AuthorIndex} />
        <Route exact path="/authors/:authorId" component={AuthorShow} />
        <Route exact path="/books/:bookId" component={BookShow} />
        <ProtectedRoute exact path="/me" component={UserProfile} />
        <Route exact path="/" component={BookIndex} />
        <Route path="/" component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
};
