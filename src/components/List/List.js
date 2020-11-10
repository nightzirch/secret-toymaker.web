import t from "prop-types";
import React from "reactn";

const List = (props) => {
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

  const ListEl = props.ordered ? "ol" : "ul";

  return <ListEl className="list">{renderElements()}</ListEl>;
};

List.propTypes = {
  elements: t.array.isRequired,
  ordered: t.bool,
};

export default List;
