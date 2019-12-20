import Footer from "components/Footer";
import Header from "components/Header";
import MainMenu from "components/MainMenu";
import { withSession } from "components/Session";
import { withRouter } from "react-router-dom";
import React, { Component } from "reactn";
import { dispatchWithLoading } from "utils/loading";
import ActionTypes from "utils/types/ActionTypes";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);

    // Scroll to top on every new page
    this.locationListener = this.props.history.listen(location => {
      window.scrollTo(0, 0);
    });

    // Check that service workers are supported, if so, progressively
    // enhance and add push messaging support, otherwise continue without it.
    // if (ServiceWorkerHelper.isSupportingServiceWorker()) {
    //   ServiceWorkerHelper.registerServiceWorker();
    // }
  }

  componentDidMount = () => {
    dispatchWithLoading(ActionTypes.GET_ALERTS);
    dispatchWithLoading(ActionTypes.GET_STAGE);
  };

  componentWillUnmount = () => {
    this.locationListener();
  };

  render() {
    return (
      <div className="app">
        <Header />

        <div className="app__main">
          <MainMenu isMenuOpen={this.global.isMenuOpen} />
          {this.props.children}
        </div>

        <Footer />
      </div>
    );
  }
}

export default withRouter(withSession(App));
