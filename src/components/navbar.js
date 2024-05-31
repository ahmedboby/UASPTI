import React from "react";
import { Link } from "react-router-dom";
import './style.css';

const Navbar = () => {
    return (
        <header className="Header">
            <h1 style={{paddingTop: '20px'}}>Betawi Now</h1>
            <nav class="navigation">
                <Link to="/">Home</Link>
                <a href="/#tari">Budaya</a>
                <a href="/#makan">Makanan</a>
                <Link to="/about">About Us</Link>
            </nav>
        </header>
    );
};

export default Navbar;