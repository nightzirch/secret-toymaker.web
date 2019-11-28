import t from "prop-types";
import React from "reactn";
import "./ContactItem.scss";

const ContactItem = props => (
  <a
    className="contact-item"
    href={props.url}
    target="_blank"
    rel="noopener noreferrer"
  >
    {props.icon}
    {props.label}
  </a>
);

ContactItem.propTypes = {
  icon: t.object,
  label: t.string.isRequired,
  url: t.string.isRequired
};

export default ContactItem;
