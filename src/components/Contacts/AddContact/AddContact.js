import React from "react";
import "./add-contact.css";

const AddContact = () => {
    return (
        <div className="add-contact">
            <div className="add-contact-header">
                Add Contact
            </div>
            <div className="add-contact-body">
                <form>
                    <div className="add-contact-body-item">
                        <input type="text" placeholder="Full Name" />
                    </div>
                    <div className="add-contact-body-item">
                        <input type="email" placeholder="Email" />
                    </div>
                    <div className="add-contact-body-item">
                        <input type="text" placeholder="Phone Number" />
                    </div>
                    <button
                        className="btn-add"
                        type="submit"
                    >
                        Add
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddContact;