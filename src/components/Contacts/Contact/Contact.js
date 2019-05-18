import React from "react";
import "./contact.css";
import PropTypes from "prop-types";

const Contact = ({ name, email, phone, onDeleteContactHandler }) => {
    const [showContact, setShowContact] = React.useState(false);

    return (
        <li className="contact">
            <div className="contact-header">
                <div className="contact-title">
                    {name}
                    <i
                        className="fas fa-sort-down"
                        onClick={() => setShowContact(!showContact)}
                    ></i>
                </div>
                <div className="contact-options-box">
                    <i className="fas fa-edit"></i>
                    <i
                        className="fas fa-user-times"
                        onClick={onDeleteContactHandler}
                    ></i>
                </div>
            </div>
            {
                showContact ? (
                    <div className="contact-items-box">
                        <div className="contact-item">Email: {email}</div>
                        <div className="contact-item">Phone: {phone}</div>
                    </div>
                )
                    :
                    null
            }
        </li>
    );
};

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    onDeleteContactHandler: PropTypes.func.isRequired,
    phone: PropTypes.string.isRequired,
};

export default Contact;