import classnames from "classnames";
import t from "prop-types";
import React from "reactn";
import Paragraph from "./Paragraph";

const Paragraphs = props => {
  const { className, colorScheme, paragraphs, ...rest } = props;

  let renderParagraphs = () => {
    let renderedParagraphs = [];
    if (paragraphs && paragraphs.length > 0) {
      for (let i = 0; i < paragraphs.length; i++) {
        renderedParagraphs.push(
          <Paragraph colorScheme={colorScheme} key={i} {...rest}>
            {paragraphs[i]}
          </Paragraph>
        );
      }
      return renderedParagraphs;
    }
    return;
  };

  return (
    <div className={classnames("paragraphs", className)}>
      {renderParagraphs()}
    </div>
  );
};

Paragraphs.propTypes = {
  className: t.string,
  colorScheme: t.oneOf([
    "black",
    "dark",
    "dark-grey",
    "grey",
    "light",
    "white"
  ]),
  paragraphs: t.array.isRequired
};

Paragraphs.defaultProps = {
  colorScheme: "dark"
};

export default Paragraphs;
