import React from "react";
import "./add-contact.css";

const AddContact = () => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");

    return (
        <div className="add-contact">
            {/* <div className="add-contact-header">
                Add Contact
            </div> */}
            <div className="add-contact-body">
                <form onSubmit={e => e.preventDefault()}>
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
                    <button
                        className="btn-add"
                        type="submit"
                    >
                        Add Contact
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddContact;