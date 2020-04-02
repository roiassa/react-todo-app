import React from 'react';
import {Link} from 'react-router-dom';

function SideBar() {
    return (
        <nav className="side-bar">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
        </nav>
    )
}


export default SideBar;