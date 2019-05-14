import React from "react";
import "./contact.css";
import PropTypes from "prop-types";

const Contact = ({ name, email, phone }) => {
    return (
        <li className="contact">
            <h3 className="contact-title">{name}</h3>
            <div className="contact-item">Email: {email}</div>
            <div className="contact-item">Phone: {phone}</div>
        </li>
    );
};

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
};

export default Contact;