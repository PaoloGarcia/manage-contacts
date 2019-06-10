import React from "react";
import "./contacts.css";
import PropTypes from "prop-types";

import Contact from "./Contact/Contact";
import Title from "../Layout/Title/Title";

const Contacts = ({ contacts, onDeleteContactHandler }) => {
    if (contacts.length === 0) return <div>waiting...</div>

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
            <Title colored="Contacts" notColored="List" />
            {list}
        </ul>
    );
};

Contacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContactHandler: PropTypes.func.isRequired,
};

export default Contacts;