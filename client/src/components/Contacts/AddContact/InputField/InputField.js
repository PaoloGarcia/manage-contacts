import React from "react";
import "./input-field.scss";
import PropTypes from "prop-types";

function InputField({ type, name, placeholder, value, onChange, error }) {
    return (
        <div className="input-field">
            <input
                className={error ? "invalid-input" : null}
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            <div className="invalid">{error}</div>
        </div>
    );
}

InputField.defaultProps = {
    type: "text",
};

InputField.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

export default InputField;