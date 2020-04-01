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
        <div>
            {welcome ? <div>
                <h1>Welcome to my React Todo App!</h1>
                <p>Loading...</p> <Spinner animation="border" variant="danger" /> </div>  : null}
        </div>
    )
}


export default Welcome;