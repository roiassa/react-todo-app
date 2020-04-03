import React from 'react';

function Todo() {
    return (
        <div className="todo-window">
            <h1>Tasks</h1>
            <div className="sections">
                <button className="buttons">Tasks</button>
                <button className="buttons">Done</button>
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