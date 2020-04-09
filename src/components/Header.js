import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'



function Header() {
    const [register, setRegister] = useState(false);


    return (
        <React.Fragment>
            <div className="header">
                <img src="https://i.pinimg.com/originals/57/40/bb/5740bb4e1da387df4d92a09475c9b049.png" alt="):" />
                <h1>Todo-List</h1>
                <button>Login</button>
                <button onClick={() => setRegister(true)}>Register</button>
                {register ? <Modal style={{marginTop : 230}} show={true} >
                    <Modal.Header closeButton onClick={() => setRegister(false)}>
                        <Modal.Title>Register</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form className="register-form" onChange={(e) => console.log('bye')}>
                            <p>Your username:</p>
                            <input type="text" />
                            <p>Your password:</p>
                            <input type="text" />
                            <p>Repeat password:</p>
                            <input type="text" />
                            <p>Email:</p>
                            <input type="text" />
                            <Button className="submit-btn" type="submit" >Submit</Button>
                        </form></Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary"  onClick={() => setRegister(false)}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal> : null}
            </div>
        </React.Fragment>
    )
}


export default Header;