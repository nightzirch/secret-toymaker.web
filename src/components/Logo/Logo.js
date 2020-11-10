import classnames from "classnames";
import Image from "next/image";
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
      <Image
        alt="Secret Toymaker"
        title="Secret Toymaker"
        src="/images/logo.png"
        width={736}
        height={703}
      />
    </div>
  );
};

Logo.propTypes = {
  withGlow: t.bool,
  withHover: t.bool,
};

export default Logo;
