import List from "@/components/List";
import { Paragraphs, Title } from "@/components/Typography";
import t from "prop-types";
import React from "reactn";

const FaqBlock = (props) => {
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
  quote: t.string,
};

export default FaqBlock;
