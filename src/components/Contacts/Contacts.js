import React from "react";
import "./contacts.css";
import PropTypes from "prop-types";

import Contact from "./Contact";

const Contacts = ({ contacts, onDeleteContactHandler }) => {
    const list = contacts.map(contact => {
        return (
            <Contact
                key={contact.id}
                name={contact.name}
                email={contact.email}
                phone={contact.phone}
                onDeleteContactHandler={() => onDeleteContactHandler(contact.id)}
            />
        );
    });

    return (
        <ul className="contacts">
            {list}
        </ul>
    );
};

Contacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContactHandler: PropTypes.func.isRequired,
};

export default Contacts;