import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Alert from 'react-bootstrap/Alert'
import { Link } from 'react-router-dom';


function Header() {
    const [register, setRegister] = useState(false);
    const [login, setLogin] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [registerSuccess, setRegisterSuccess] = useState(false)

    function handleSubmit(e) {
        e.preventDefault();
        if (!password || !email) {
            setError(true)
        } else if (!email.includes('@')) {
            setEmailError(true)
        } else if (!email.includes('.com')) {
            setEmailError(true)
        }
        else {
            setLoggedIn(true)
            setRegisterSuccess(true)
            setRegister(false)
            setLogin(false)
            setError(false)
            setPassword('')
            setEmail('')
        }
    }

    useEffect(() => {
        if (registerSuccess) {
            setTimeout(() => {
                setRegisterSuccess(false)
            }, 2000)
        }
    }, [registerSuccess])

    function handleClick() {
        setLogin(false)
        setRegister(false)
        setError(false)
        setEmailError(false)
        setPassword('')
        setEmail('')
    }

    return (
            <div className="header">
                <Link to="/"><img src="https://i.pinimg.com/originals/57/40/bb/5740bb4e1da387df4d92a09475c9b049.png" alt="):" /></Link>
                <h1>Todo-List</h1>

                {loggedIn ? <React.Fragment>{registerSuccess ? <Alert variant="success">
                                <Alert.Heading>Success!</Alert.Heading>
                            </Alert> : null}<p>Welcome!</p> <button onClick={() => setLoggedIn(false)}>Log Out</button></React.Fragment> :
                    <React.Fragment><button onClick={() => setLogin(true)}>Login</button>
                        <button onClick={() => setRegister(true)}>Register</button></React.Fragment>}
                {login ? <Modal style={{ marginTop: 230 }} show={true} >
                    <Modal.Header >
                        <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <p>Email</p>
                            <input type="text" value={email} placeholder="Your email" onChange={(e) => setEmail(e.target.value)} />
                            {emailError ? <p>Your email has to have a @ sign and one of the following ending: .com</p> : null}
                            <p>Password</p>
                            <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                            <Button className="submit-btn" type="submit" >Submit</Button>
                            {error ? <Alert variant="danger" onClose={() => setError(false)} dismissible>
                                <Alert.Heading>You have to fill in all the fields!</Alert.Heading>
                            </Alert> : null}
                        </form></Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClick}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal> : null}

                {register ? <Modal style={{ marginTop: 230 }} show={true} >
                    <Modal.Header >
                        <Modal.Title>Register</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <p>Your Email</p>
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                            {emailError ? <p>Your email has to have a @ sign and one of the following ending: .com</p> : null}
                            <p>Your password</p>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <Button className="submit-btn" type="submit" >Submit</Button>
                            {error ? <Alert variant="danger" style={{ marginTop: 10 }} onClose={() => setError(false)} dismissible>
                                <Alert.Heading>You have to fill in all the fields!</Alert.Heading>
                            </Alert> : null}
                        </form></Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClick}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal> : null}
            </div>
    )
}


export default Header;