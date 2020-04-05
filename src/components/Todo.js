import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faBriefcase } from '@fortawesome/free-solid-svg-icons'



function Todo() {
    const [tasks, setTasks] = useState([])
    const [input, setInput] = useState('')
    const [taskList, setTaskList] = useState(null)
    
    function handleSubmit(e) {
        e.preventDefault();
        if (!input) { return; }
        setTasks([...tasks, input])
        setInput('');
    }


   

    return (
        <div className="todo-window">
            {taskList ? <h1>Tasks</h1>: <h1>Done</h1>}
            <div className="sections">
                <div>
                    <button className="buttons" onClick={() => setTaskList(taskList === false)}>
                        <FontAwesomeIcon icon={faBriefcase} className="icon-briefcase" />
                        Tasks</button>
                </div>
                <div>
                    <button className="buttons" onClick={() => setTaskList(taskList === false)}>
                        <FontAwesomeIcon icon={faCheck} className="icon-check" />
                        Done</button>
                </div>
            </div>
            
            <form className="submit-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Type your task here" value={input} onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
            {taskList ? <div className="todo-list">
                {tasks.map((task, index) => {
                    return <div className="todo-item" key={index}>
                        <span >{task}</span>
                        <button>Done</button>
                        <button>Remove</button>
                    </div>
                })}
            </div> : <div className="done-list">
                <p style={{color : "white"}}>hi</p>
            </div> }
            
        </div >
    )
}
export default Todo;