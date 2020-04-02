import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'

function SideBar() {
    return (
        <nav className="side-bar">
            <Link to="/" ><div className="link-div">
                <FontAwesomeIcon icon={faHome} className="icon-home" />
                <span className="nav-link">Home</span>
            </div>
            </Link>
            <Link to="/about" ><div className="link-div">
                <FontAwesomeIcon icon={faUserSecret} className="icon-user" />
                <span className="nav-link">About</span>
            </div>
            </Link>
        </nav>
    )
}


export default SideBar;