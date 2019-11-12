import PropTypes from "prop-types";
import React from "reactn";
import "./List.scss";

const List = props => {
  let renderElements = () => {
    return props.elements.map((el, i) => {
      if (typeof el === "string") {
        return <li key={i}>{el}</li>;
      } else if (typeof el === "object" && el.text && el.url) {
        return (
          <li key={i}>
            <a href={el.url} target="_blank" rel="noopener noreferrer">
              {el.text}
            </a>
          </li>
        );
      }
      return null;
    });
  };

  return React.createElement(
    props.ordered ? "ol" : "ul",
    { className: "list" },
    renderElements()
  );
};

List.propTypes = {
  elements: PropTypes.array.isRequired,
  ordered: PropTypes.bool
};

export default List;
