import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./navbar.scss";

function Navbar({ branding, query, onChangeQueryHandler }) {
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
                <li><Link to="/"><i className="fas fa-home"></i> Home</Link></li>
                <li><Link to="/add"><i className="fas fa-plus"></i> Add</Link></li>
            </ul>
        </nav>
    );
}

Navbar.propTypes = {
    branding: PropTypes.string.isRequired,
    query: PropTypes.string.isRequired,
    onChangeQueryHandler: PropTypes.func.isRequired,
};

export default Navbar;
