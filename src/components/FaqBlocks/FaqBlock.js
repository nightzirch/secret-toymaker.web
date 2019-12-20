import t from "prop-types";
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
  list: t.array,
  title: t.string.isRequired,
  text: t.array,
  quote: t.string
};

export default FaqBlock;
