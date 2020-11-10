import t from "prop-types";
import React from "reactn";
import { prefixZero } from "utils/number";

const CountdownBlock = (props) => {
  const { label, value } = props;

  return (
    <div className="countdown-block">
      <span className="countdown-block__value">{prefixZero(value)}</span>
      <span className="countdown-block__label">{label}</span>
    </div>
  );
};

CountdownBlock.propTypes = {
  label: t.string.isRequired,
  value: t.number.isRequired,
};

export default CountdownBlock;
