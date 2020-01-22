import React from "react";
import { Link } from "react-router-dom";
import home from "../image/home.png";
import "./Navigation.css";

function Navigation() {
    return (
        <div id="nav" className="navbar">
            <Link to="/" className="navbar-brand">
                <img src={home} alt="HOME" title="HOME" className="home_ico" />
            </Link>
        </div>
    );
}

export default Navigation;