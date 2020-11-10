import React from "reactn";

class PageSection extends React.Component {
  render() {
    return <section className="page-section">{this.props.children}</section>;
  }
}

export default PageSection;
