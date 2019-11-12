import PropTypes from "prop-types";
import React from "reactn";
import List from "../List";
import { Paragraphs, Title } from "../Typography";
import "./FaqBlock.scss";

const FaqBlock = props => {
  let title = <Title level="tertiary">{props.title}</Title>;
  let text = props.text ? <Paragraphs paragraphs={props.text} /> : null;
  let list = props.list ? <List elements={props.list} /> : null;
  let quote = props.quote ? <blockquote>{props.quote}</blockquote> : null;

  return (
    <div className="faq-block">
      {title}
      {text}
      {list}
      {quote}
    </div>
  );
};

FaqBlock.propTypes = {
  list: PropTypes.array,
  title: PropTypes.string.isRequired,
  text: PropTypes.array,
  quote: PropTypes.string
};

export default FaqBlock;
