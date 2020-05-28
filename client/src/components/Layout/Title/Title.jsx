import PropTypes from "prop-types";
import React from "react";
import "./title.scss";

function Title({ colored, notColored }) {
    return (
        <h1 className="title">
            <span className="colored-side">{colored}</span>{" "}
            {notColored}
        </h1>
    );
}

Title.propTypes = {
    colored: PropTypes.string.isRequired,
    notColored: PropTypes.string.isRequired,
};

export default Title;
