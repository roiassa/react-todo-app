import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'


function Header() {
    const [register, setRegister] = useState(false)


    return (
        <React.Fragment>
            <div className="header">
                <img src="https://i.pinimg.com/originals/57/40/bb/5740bb4e1da387df4d92a09475c9b049.png" alt="):" />
                <h1>Todo-List</h1>
                <button>Login</button>
                <button onClick={() => setRegister(true)}>Register</button>
            </div>
            {register ? <div className="register-wrapper">
                <div className="register-window">
                    <form className="register-form">
                        <button className="close-btn">Close</button>
                        <p>Your username:</p>
                        <input type="text" />
                        <p>Your password:</p>
                        <input type="text" />
                        <p>Repeat password:</p>
                        <input type="text" />
                        <p>Email:</p>
                        <input type="text" />
                        <Button as="input" type="submit" value="Submit" className="submit-btn"/>{' '}
                    </form>
                </div>
            </div> : null}
        </React.Fragment>
    )
}


export default Header;