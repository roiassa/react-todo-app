import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faBriefcase } from '@fortawesome/free-solid-svg-icons'



function Todo() {
    const [tasks, setTasks] = useState([])
    const [doneTasks, setDoneTasks] = useState([])
    const [input, setInput] = useState('')
    const [taskList, setTaskList] = useState(true)

    function handleSubmit(e) {
        e.preventDefault();
        if (!input) { return; }
        setTasks([...tasks, input])
        setInput('');
    }


    function removeTask(arr, taskToRemove) {
        const updatedTasks = arr.filter((task) => taskToRemove !== task);
        setTasks(updatedTasks);
    }

    function doneTask(doneArr, currArr, taskToDone) {
        setDoneTasks([...doneArr, taskToDone]);
        removeTask(currArr, taskToDone);
    }

    return (
        <div className="todo-window">
            {taskList ? <h1>Tasks</h1> : <h1>Done</h1>}
            <div className="sections">
                <div>
                    <button className="buttons" onClick={() => setTaskList(true)}>
                        <FontAwesomeIcon icon={faBriefcase} className="icon-briefcase" />
                        Tasks</button>
                </div>
                <div>
                    <button className="buttons" onClick={() => setTaskList(false)}>
                        <FontAwesomeIcon icon={faCheck} className="icon-check" />
                        Done</button>
                </div>
            </div>

            {taskList ? <form className="submit-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Type your task here" value={input} onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Submit</button>
            </form> : null}
            <div className="list-container">
                {taskList ? <div className="task-list">
                    {tasks.map((task, index) => {
                        return <div className="todo-item" key={index}>
                            <span>{task}</span>
                            <button onClick={() => doneTask(doneTasks, tasks, task)}>Done</button>
                            <button onClick={() => removeTask(tasks, task)}>Remove</button>
                        </div>
                    })}
                </div> : <div className="done-list">
                        {doneTasks.map((task, index) => {
                            return <div className="todo-item" key={index}> 
                                <span>{task}</span>
                                <button onClick={() => removeTask(doneTasks, task)}>Remove</button>
                            </div>
                        })}
                    </div>}
            </div>
        </div >
    )
}

export default Todo;