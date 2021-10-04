import React from 'react';
import './Navbar.css';


// don't delete Router !!! it will break the code
import {BrowserRouter as Router ,NavLink} from "react-router-dom";

const Navbar = () => {
    return(
        <header className="main-header">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/action"><b>ACTION</b></NavLink>
                    </li>
                    <li>
                        <NavLink to="/drama"><b>DRAMA</b></NavLink>
                    </li>
                    <li>
                        <NavLink to="/history"><b>HISTORY</b></NavLink>
                    </li>
                    <li>
                        <NavLink to="/animation"><b>ANIMATION</b></NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;