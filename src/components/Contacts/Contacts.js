import React from "react";
import "./contacts.css";
// import PropTypes from "prop-types";

import Contact from "./Contact";

const Contacts = ({ contacts }) => {
    const list = contacts.map(contact => {
        return (
            <Contact
                key={contact.id}
                name={contact.name}
                email={contact.email}
                phone={contact.phone}
            />
        );
    });

    return (
        <ul>
            {list}
        </ul>
    );
};

Contacts.propTypes = {};

export default Contacts;