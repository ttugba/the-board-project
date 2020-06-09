import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="nav-wrapper blue darken-3">
            <div className="container">
                <a className="brand-logo">yo'plannah</a>
                <ul className="right">
                    <li><Link to="/">Day</Link></li>
                    <li><Link to="/week">Week</Link></li>
                    <li><Link to="/month">Month</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>

            </div>
        </nav>
    )
}

export default Navbar;