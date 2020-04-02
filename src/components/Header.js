import React from 'react';
import {Link} from 'react-router-dom'


function Header() {
    return (
        <div className="header">
            <img src="https://i.pinimg.com/originals/57/40/bb/5740bb4e1da387df4d92a09475c9b049.png" alt="):" className="maple" />
            <h1>Todo-List</h1>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    )
}


export default Header;