import classnames from "classnames";
import PropTypes from "prop-types";
import React from "reactn";
import "./Logo.scss";

const Logo = props => {
  const { withGlow, withHover } = props;

  return (
    <div
      className={classnames("logo", {
        "logo--with-glow": withGlow,
        "logo--with-hover": withHover
      })}
    >
      <img
        alt="Secret Toymaker"
        title="Secret Toymaker"
        src="/images/logo.png"
      />
    </div>
  );
};

Logo.propTypes = {
  withGlow: PropTypes.bool,
  withHover: PropTypes.bool
};

export default Logo;
