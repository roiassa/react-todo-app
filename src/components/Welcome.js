import React, { useState, useEffect } from 'react'
import Spinner from 'react-bootstrap/Spinner'

function Welcome() {
    const [welcome, setLoad] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            {
                setLoad(!welcome)
            }
        }, 3000)
    }, [])

    return (
        <React.Fragment>
            {welcome ? <div className="welcomeDiv">
                <div className="loadingDiv">
                    <h1>Welcome to my React Todo App!</h1>
                    <p>Loading...</p> <Spinner animation="border" variant="danger" /> </div></div> : null}
        </React.Fragment>
    )
}


export default Welcome;