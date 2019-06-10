import React from "react";
import "./add-contact.css";
import PropTypes from "prop-types";

import Title from "../../Layout/Title/Title";

const AddContact = ({ onAddContactHandler, history }) => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        onAddContactHandler({ name, email, phone });
        history.push("/");
    }

    return (
        <div className="add-contact">
            <Title
                colored="Add"
                notColored="Contact"
            />
            <div className="add-contact-box">
                <div className="add-contact-body">
                    <form onSubmit={onSubmitHandler}>
                        <div className="add-contact-body-item">
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </div>
                        <div className="add-contact-body-item">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="add-contact-body-item">
                            <input
                                type="text"
                                name="phone"
                                placeholder="Phone Number"
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                            />
                        </div>
                        <button className="btn-add" type="submit">Add Contact</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

AddContact.propTypes = {
    onAddContactHandler: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
};

export default AddContact;