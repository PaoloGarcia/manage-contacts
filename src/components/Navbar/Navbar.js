import React from "react";
import "./navbar.css";
import PropTypes from "prop-types";

const Navbar = ({ branding }) => {
    return (
        <nav className="navbar">
            <div className="brand-box">
                {branding}
            </div>
            <div className="search-box">
                <input type="text" placeholder="Search Contact" />
            </div>
            <ul className="tabs">
                <li>
                    <a href="#!">Home</a>
                </li>
                <li>
                    <a href="#!">Add</a>
                </li>
            </ul>
        </nav>
    );
};

Navbar.propTypes = {
    branding: PropTypes.string.isRequired,
};

export default Navbar;