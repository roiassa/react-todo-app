import React, { useState, useEffect } from 'react';
import axios from 'axios';
import uuidv4 from '../helpers/utils'
import removeFromTasks, { updateIsDone, duplicateInput } from '../helpers/taskHelpers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faBriefcase } from '@fortawesome/free-solid-svg-icons'


function Todo() {
    const [tasks, setTasks] = useState([])
    const [input, setInput] = useState('')
    const [taskList, setTaskList] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:5000/todos`)
            .then(res => {
                setTasks(res.data)
            })
    }, [])

    function handleSubmit(e) {
        e.preventDefault();
        if (!input.trim() || duplicateInput(tasks, input)) {
            setError(true);
        }

        else {
            setError(false)
            const task = {
                id: uuidv4(),
                value: input,
                isDone: false,
                toRemove: false
            }
            axios.post(`http://localhost:5000/todos`, task)
                .then(res => {
                    console.log(res.data)
                    setTasks([...tasks, task])
                })

            setInput('');
        }
    }

    function handleClick(currArr, taskToRemove, keyName) {
        const updatedTasks = currArr.map((task) => {
            if (task.value === taskToRemove.value) {
                task[keyName] = true;
                axios.get(`http://localhost:5000/todos/${task.id}`)
                    .then(res => {
                        if (keyName === 'isDone') {
                            axios.patch(`http://localhost:5000/todos/${task.id}`, {
                                isDone: true
                            })
                            updateIsDone(tasks, task, setTasks)
                        } else {
                            axios.delete(`http://localhost:5000/todos/${task.id}`)
                            removeFromTasks(tasks, task, setTasks)
                        }
                    })
                return task;
            } else {
                return task;
            }

        })
        setTasks(updatedTasks);
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
            {error && taskList ? <div className="error"><p>You have to type something in or you have duplicate task.</p> </div> : null}
            {taskList ? <form className="submit-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Type your task here" value={input} onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Submit</button>
            </form> : null}

            <div className="list-container">
                {taskList ? <div className="task-list">
                    {tasks.map((task, index) => {
                        return task.isDone || task.toRemove ? null : <div className="todo-item" key={index}>
                            <span>{tasks[index].value}</span>
                            <button onClick={() => handleClick(tasks, task, 'isDone')}>Done</button>
                            <button onClick={() => handleClick(tasks, task, 'toRemove')}>Remove</button>
                        </div>
                    })}
                </div> : <div className="done-list">
                        {tasks.map((task, index) => {
                            return task.isDone && !task.toRemove ? <div className="todo-item" key={index}>
                                <span>{tasks[index].value}</span>
                                <button onClick={() => handleClick(tasks, task, 'toRemove')}>Remove</button>
                            </div> : null;
                        })}
                    </div>}
            </div>
        </div >
    )
}

export default Todo;