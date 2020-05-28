import React, { useState } from "react";
import "./add-contact.scss";
import PropTypes from "prop-types";

// components
import Title from "../../Layout/Title/Title";
import InputField from "./InputField/InputField";

function AddContact({ onAddContactHandler, history }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [errors, setErrors] = useState({});

    const onSubmitHandler = e => {
        e.preventDefault();

        if (name === "") {
            setErrors({ name: "Name field is required" });
            return;
        }
        if (email === "") {
            setErrors({ email: "Email field is required" });
            return;
        }
        if (phone === "") {
            setErrors({ phone: "Phone field is required" });
            return;
        }

        onAddContactHandler({ name, email, phone });

        // clear fields
        setName("");
        setEmail("");
        setPhone("");
        setErrors({});

        // redirect to home page
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
                        <InputField
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            error={errors.name}
                        />
                        <InputField
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            error={errors.email}
                        />
                        <InputField
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                            error={errors.phone}
                        />
                        <button className="btn-add" type="submit">Add Contact</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

AddContact.propTypes = {
    onAddContactHandler: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
};

export default AddContact;
