import React from "react";
import "./contact.css";
import PropTypes from "prop-types";

const Contact = ({ name, email, phone }) => {
    return (
        <li>
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            <div>Phone: {phone}</div>
        </li>
    );
};

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
};

export default Contact;