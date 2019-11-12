import { withRouter } from "react-router-dom";
import React from "reactn";
import Button from "./Button";

class GiftsButton extends React.Component {
  constructor(props) {
    super(props);

    this.gotoGifts = this.gotoGifts.bind(this);
  }

  gotoGifts() {
    this.props.history.push("/signup");
  }

  render() {
    return <Button onClick={this.gotoGifts} title="To Gifts" {...this.props} />;
  }
}

export default withRouter(GiftsButton);
