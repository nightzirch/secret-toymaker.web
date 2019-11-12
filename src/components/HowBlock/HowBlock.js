import classnames from "classnames";
import PropTypes from "prop-types";
import React from "reactn";
import "./HowBlock.scss";

const HowBlock = props => {
  let renderTopArrow = () => (
    <div className="how-block__top-arrow">
      <div className="how-block__top-arrow__left" />
      <div className="how-block__top-arrow__mid-left" />
      <div className="how-block__top-arrow__mid-right" />
      <div className="how-block__top-arrow__right" />
    </div>
  );

  let renderRightArrow = () => (
    <div className="how-block__right-arrow">
      <div className="how-block__right-arrow__top" />
      <div className="how-block__right-arrow__mid-top" />
      <div className="how-block__right-arrow__mid-bottom" />
      <div className="how-block__right-arrow__bottom" />
    </div>
  );

  let renderBottomArrow = () => (
    <div className="how-block__bottom-arrow">
      <div className="how-block__bottom-arrow__mid" />
    </div>
  );

  let renderLeftArrow = () => (
    <div className="how-block__left-arrow">
      <div className="how-block__left-arrow__top" />
      <div className="how-block__left-arrow__mid-top" />
      <div className="how-block__left-arrow__mid-bottom" />
      <div className="how-block__left-arrow__bottom" />
    </div>
  );

  let blockClasses = classnames("how-block", `how-block--step-${props.step}`, {
    "how-block--foreground": props.isForeground,
    "how-block--has-top-arrow": props.hasTopArrow,
    "how-block--has-right-arrow": props.hasRightArrow,
    "how-block--has-bottom-arrow": props.hasBottomArrow,
    "how-block--has-left-arrow": props.hasLeftArrow
  });

  return props.children ? (
    <div className={blockClasses}>
      <div className="how-block__left">{renderLeftArrow()}</div>

      <div className="how-block__center">
        {renderTopArrow()}
        {renderBottomArrow()}
        <div className="how-block__content">{props.children}</div>
      </div>

      <div className="how-block__right">{renderRightArrow()}</div>
    </div>
  ) : null;
};

HowBlock.propTypes = {
  hasTopArrow: PropTypes.bool,
  hasRightArrow: PropTypes.bool,
  hasBottomArrow: PropTypes.bool,
  hasLeftArrow: PropTypes.bool,
  isForeground: PropTypes.bool,
  step: PropTypes.string.isRequired
};

HowBlock.defaultProps = {
  hasTopArrow: false,
  hasRightArrow: false,
  hasBottomArrow: false,
  hasLeftArrow: false,
  isForeground: false
};

export default HowBlock;
