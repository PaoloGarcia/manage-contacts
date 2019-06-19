import React from "react";
import "./input-field.scss";
import PropTypes from "prop-types";

const InputField = ({ type, name, placeholder, value, onChange }) => {
    return (
        <div className="input-field">
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

InputField.defaultProps = {
    type: "text",
};

InputField.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default InputField;