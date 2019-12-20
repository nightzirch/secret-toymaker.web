import t from "prop-types";
import React from "reactn";
import FaqBlock from "./FaqBlock";

const FaqBlocks = props => (
  <div className="faq-blocks">
    {props.blocks.map((b, i) => (
      <FaqBlock
        list={b.list}
        text={b.text}
        title={b.title}
        quote={b.quote}
        key={i}
      />
    ))}
  </div>
);

FaqBlocks.propTypes = {
  blocks: t.array.isRequired
};

export default FaqBlocks;
