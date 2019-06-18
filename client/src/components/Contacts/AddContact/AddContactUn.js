import React, { useRef } from "react";
import "./add-contact.scss";
import PropTypes from "prop-types";

import Title from "../../Layout/Title/Title";

const AddContact = ({ onAddContactHandler, history, }) => {

    const nameRef = useRef("");
    const emailRef = useRef("");
    const phoneRef = useRef("");

    const onSubmitHandler = e => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;

        if (name === "") {
            console.log("empty name");
            return;
        } else if (email === "") {
            console.log("empty email");
            return;
        } else if (phone === "") {
            console.log("empty phone");
            return;
        }

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
                                ref={nameRef}
                            />
                        </div>
                        <div className="add-contact-body-item">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                ref={emailRef}
                            />
                        </div>
                        <div className="add-contact-body-item">
                            <input
                                type="text"
                                name="phone"
                                placeholder="Phone Number"
                                ref={phoneRef}
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