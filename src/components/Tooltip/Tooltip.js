import classnames from "classnames";
import List from "List";
import t from "prop-types";
import React from "reactn";
import { Paragraphs, Title } from "Typography";
import "./Tooltip.scss";

class Tooltip extends React.Component {
  renderLeftArrow() {
    return (
      <div className="tooltip__left-arrow">
        <div className="tooltip__left-arrow__mid" />
      </div>
    );
  }

  renderBottomArrow() {
    return (
      <div className="tooltip__bottom-arrow">
        <div className="tooltip__bottom-arrow__mid" />
      </div>
    );
  }

  renderContent() {
    let content = this.props.content;

    let title = content.title ? (
      <Title level="tertiary">{content.title}</Title>
    ) : null;
    let text = content.text ? <Paragraphs paragraphs={content.text} /> : null;
    let list = content.list ? (
      <List elements={content.list} ordered={true} />
    ) : null;
    return (
      <div>
        {title}
        {text}
        {list}
      </div>
    );
  }

  render() {
    let helpClasses = classnames("tooltip", {
      "tooltip--active": this.props.for === this.props.form.inputFocus
    });

    return (
      <div className={helpClasses}>
        <div className="tooltip__left">{this.renderLeftArrow()}</div>

        <div className="tooltip__center">
          {this.renderBottomArrow()}
          <div className="tooltip__content">{this.renderContent()}</div>
        </div>
      </div>
    );
  }
}

Tooltip.propTypes = {
  content: t.object.isRequired,
  for: t.string.isRequired
};

export default Tooltip;
