import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faBriefcase } from '@fortawesome/free-solid-svg-icons'


function Todo() {
    return (
        <div className="todo-window">
            <h1>Tasks</h1>
            <div className="sections">
                <div>
                    <button className="buttons">
                        <FontAwesomeIcon icon={faBriefcase} className="icon-briefcase" />
                        Tasks</button>
                </div>
                <div>
                    <button className="buttons">
                        <FontAwesomeIcon icon={faCheck} className="icon-check" />
                        Done</button>
                </div>
            </div>
            <div className="submit-div">
                <input type="text" placeholder="Type your task here" />
                <button type="submit">Submit</button>
            </div>
            <div className="tasks-div">

            </div>
        </div >
    )
}


export default Todo;