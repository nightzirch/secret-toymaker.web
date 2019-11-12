import PropTypes from "prop-types";
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
  icon: PropTypes.object,
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default ContactItem;
