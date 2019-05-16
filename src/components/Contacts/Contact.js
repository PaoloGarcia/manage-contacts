import React from "react";
import "./contact.css";
import PropTypes from "prop-types";

const Contact = ({ name, email, phone }) => {
    return (
        <li className="contact">

            <div className="contact-header">
                <div className="contact-title">
                    {name} <i className="fas fa-sort-down"></i>
                </div>
                <div className="contact-options-box">
                    <i className="fas fa-edit"></i>
                    <i className="fas fa-user-times"></i>
                </div>
            </div>

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