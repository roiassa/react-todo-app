import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faBriefcase } from '@fortawesome/free-solid-svg-icons'



function Todo() {
    const [tasks, setTasks] = useState([])
    const [input, setInput] = useState('')
    const [taskList, setTaskList] = useState(true)
    const [error, setError] = useState(false)

    function handleSubmit(e) {
        e.preventDefault();
        if (!input) {
            setError(true);
        }
        else {
            setError(false)
            setTasks([...tasks, {
                value: input,
                isDone: false,
                toRemove: false
            }])
            setInput('');
        }
    }

    function handleClick(currArr, taskToRemove, keyName) {
        const updatedTasks = currArr.map((task) => {
            if(task.value === taskToRemove.value) {
                task[keyName] = true;
                return task;
        }else{
            return task;
        }})
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
            {error && taskList ? <div className="error"><p>You have to type something in.</p> </div> : null}
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