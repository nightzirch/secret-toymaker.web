import t from "prop-types";
import React from "reactn";
import Paragraph from "./Paragraph";

const Paragraphs = props => {
  let renderParagraphs = () => {
    let renderedParagraphs = [];
    let paragraphs = props.paragraphs;
    if (paragraphs && paragraphs.length > 0) {
      for (let i = 0; i < paragraphs.length; i++) {
        renderedParagraphs.push(
          <Paragraph colorScheme={props.colorScheme} key={i}>
            {paragraphs[i]}
          </Paragraph>
        );
      }
      return renderedParagraphs;
    }
    return;
  };

  return <div className="paragraphs">{renderParagraphs()}</div>;
};

Paragraphs.propTypes = {
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
