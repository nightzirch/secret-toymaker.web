import React from "reactn";
import "./PageSection.scss";

class PageSection extends React.Component {
  render() {
    return <section className="page-section">{this.props.children}</section>;
  }
}

export default PageSection;
