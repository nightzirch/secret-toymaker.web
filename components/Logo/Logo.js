import classnames from "classnames";
import t from "prop-types";
import React from "reactn";

const Logo = (props) => {
  const { withGlow, withHover } = props;

  return (
    <div
      className={classnames("logo", {
        "logo--with-glow": withGlow,
        "logo--with-hover": withHover,
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
  withGlow: t.bool,
  withHover: t.bool,
};

export default Logo;
