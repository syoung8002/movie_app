import React from "react";
import { Link } from "react-router-dom";
import home from "./home.png";

function Navigation() {
    return (
        <div style={{ marginLeft: "20px", paddingTop: "15px" }}>
            <Link to="/">
                <img src={home} alt="HOME" title="HOME" style={{ width: "30px" }} />
            </Link>
        </div>
    );
}

export default Navigation;