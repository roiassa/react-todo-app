import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Alert from 'react-bootstrap/Alert'
import axios from 'axios'
import uuidv4 from '../helpers/utils'



function Header() {
    const [register, setRegister] = useState(false);
    const [login, setLogin] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [users, setUsers] = useState([]);
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState(false);

    // useEffect(() => {
    //     axios.get(`http://localhost:2000/users`)
    //         .then(res => {
    //             console.log(res);
    //             setUsers(res.data)
    //         })
    // }, [])

    // const user = {
    //     id: uuidv4(),
    //     username: username,
    //     password: password,
    //     email: email,
    //     isLoggedin: false
    // }
    // axios.post(`http://localhost:2000/users`, user)
    //     .then(res => {
    //         console.log(res.data)
    //         setUsers([...users, user])
    //     })

    function handleSubmit(e) {
        e.preventDefault();
        if (!username || !password || !email) {
            setError(true)
        } else if (!email.includes('@' || '.com' || '.net' || '.co.il')) {
            setError(true)
        }
        else {
            setLoggedIn(true)
            setRegister(false)
            setError(false)
            setUserName('')
            setPassword('')
            setEmail('')
        }
    }

    return (
        <React.Fragment>
            <div className="header">
                <img src="https://i.pinimg.com/originals/57/40/bb/5740bb4e1da387df4d92a09475c9b049.png" alt="):" />
                <h1>Todo-List</h1>
                {loggedIn ? <React.Fragment><p>Welcome!</p> <button onClick={() => setLoggedIn(false)}>Log Out</button></React.Fragment> : <React.Fragment><button onClick={() => setLogin(true)}>Login</button>
                    <button onClick={() => setRegister(true)}>Register</button></React.Fragment>}
                {register ? <Modal style={{ marginTop: 230 }} show={true} >
                    <Modal.Header closeButton onClick={() => setRegister(false)}>
                        <Modal.Title>Register</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form className="register-form" onSubmit={handleSubmit}>
                            <p>Your username:</p>
                            <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} />
                            <p>Your password:</p>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <p>Email:</p>
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                            {error ? <p>Your email has to have a @ sign and one of the following endings: .com/.net/.co.il</p> : null}
                            <Button className="submit-btn" type="submit" >Submit</Button>
                            { error ? <Alert variant="danger" style={{marginTop: 10}} onClose={() => setError(false)} dismissible>
                                <Alert.Heading>You have to fill in all the fields!</Alert.Heading>
                            </Alert> : null}
                        </form></Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setRegister(false)}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal> : null}
                {login ? <Modal show={true} >
                    <Modal.Header closeButton onClick={() => setLogin(false)}>
                        <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form className="register-form" onSubmit={handleSubmit}>
                            <p>Username/Email:</p>
                            <input type="text" placeholder="Your username or email" />
                            {error ? <p>Your email has to have a @ sign and one of the following endings: .com/.net/.co.il</p> : null}
                            <p>Password:</p>
                            <input type="password" placeholder="Your password" />
                            <Button className="submit-btn" type="submit" >Submit</Button>
                            { error ? <Alert variant="danger"  onClose={() => setError(false)} dismissible>
                                <Alert.Heading>You have to fill in all the fields!</Alert.Heading>
                            </Alert> : null}
                        </form></Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setLogin(false)}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal> : null}
            </div>
        </React.Fragment>
    )
}


export default Header;