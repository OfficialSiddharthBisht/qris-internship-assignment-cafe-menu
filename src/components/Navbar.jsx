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
                    <h1>Menu List</h1>
                    <div className="underline"></div>
                </div>
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/breakfast">Breakfast</Link></li>
                <li><Link to="/lunch">Lunch</Link></li>
                <li><Link to="/dinner">Dinner</Link></li>
            </ul>
        </div>
        </main>
    )
}

export default Navbar;