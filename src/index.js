import fastclick from "fastclick";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "reactn";
import addReactNDevTools from "reactn-devtools";
import App from "./pages/App";
import FaqPage from "./pages/FaqPage";
import FrontPage from "./pages/FrontPage";
import GiftsPage from "./pages/GiftsPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import SignupPage from "./pages/SignupPage";
import Routes from "./routes";
import { setGlobalStore, setReducers } from "./store";
import "./styles/style.scss";

addReactNDevTools();

setGlobalStore();
setReducers();

fastclick.attach(document.body);

ReactDOM.render(
  <Router>
    <App>
      <Route path={Routes.FRONTPAGE} exact component={FrontPage} />
      <Route path={Routes.FAQ} exact component={FaqPage} />
      <Route path={Routes.GIFTS} exact component={GiftsPage} />
      <Route path={Routes.LOGIN} exact component={LoginPage} />
      <Route path={Routes.SIGNUP} exact component={SignupPage} />
      <Route path={Routes.PROFILE} exact component={ProfilePage} />
    </App>
  </Router>,
  document.getElementById("app")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
