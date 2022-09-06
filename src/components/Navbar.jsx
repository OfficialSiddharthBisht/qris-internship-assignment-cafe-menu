import React from "react";
import { Link } from "react-router-dom";
import logo from '../logo.jpg';
const Navbar = () => {
    return (
        <main>
        <div>
            <div className="menu section">
                <div className="title">
                    <img src={logo} alt="logo" className="logo" />
                    <h1>Cafe's Menu </h1>
                    <p>...... One meal from Food Hub a day keeps the hunger away ......</p>
                    <div className="underline"></div>
                </div>
            </div>
            <div className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/breakfast">Breakfast</Link></li>
                <li><Link to="/lunch">Lunch</Link></li>
            </ul>
            </div>
        </div>
        </main>
    )
}

export default Navbar;