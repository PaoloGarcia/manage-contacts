import React from "react";
import "./navbar.css";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

const Navbar = ({ branding, query, onChangeQueryHandler }) => {
    return (
        <nav className="navbar">
            <div className="brand-box">
                {branding}
            </div>
            <div className="search-box">
                <input
                    type="text"
                    placeholder="Search Contact"
                    value={query}
                    onChange={onChangeQueryHandler}
                />
            </div>
            <ul className="tabs">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/add">Add</Link>
                </li>
            </ul>
        </nav>
    );
};

Navbar.propTypes = {
    branding: PropTypes.string.isRequired,
};

export default Navbar;