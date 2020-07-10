import React from "react";
import "./navbar.css";

const Navbar = (props) => (
    <nav class="navbar is-white is-fixed-top">
        <div class="navbar-brand">
            <a id="main" class="navbar-item" href="/"><h1>CompanySearch</h1></a>
        </div>
        <div class="navbar-menu is-active">
            <div class="navbar-start">
                <a href="/" class="navbar-item">Search</a>
                <a href="/saved" class="navbar-item">Saved</a>
            </div>
        </div>
    </nav>
);

export default Navbar;
