import fastclick from "fastclick";
import App from "pages/App";
import FaqPage from "pages/FaqPage";
import FrontPage from "pages/FrontPage";
import GiftsPage from "pages/GiftsPage";
import ProfilePage from "pages/ProfilePage";
import SigninPage from "pages/SigninPage";
import SignupPage from "pages/SignupPage";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "reactn";
import addReactNDevTools from "reactn-devtools";
import { setGlobalStore, setReducers } from "store";
import * as ROUTES from "./routes";
import "./styles/style.scss";

addReactNDevTools();

setGlobalStore();
setReducers();

fastclick.attach(document.body);

ReactDOM.render(
  <Router>
    <App>
      <Route path={ROUTES.FRONTPAGE} exact component={FrontPage} />
      <Route path={ROUTES.FAQ} exact component={FaqPage} />
      <Route path={ROUTES.GIFTS} exact component={GiftsPage} />
      <Route path={ROUTES.SIGNIN} exact component={SigninPage} />
      <Route path={ROUTES.SIGNUP} exact component={SignupPage} />
      <Route path={ROUTES.PROFILE} exact component={ProfilePage} />
    </App>
  </Router>,
  document.getElementById("app")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
