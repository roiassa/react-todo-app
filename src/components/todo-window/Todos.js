import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoItem from "./TodoItem"
import Sections from "./Sections"
import ErrorPage from "../ErrorPage"
import apiCall from '../../helpers/apiCall'
import { BrowserRouter as Router, Route } from 'react-router-dom'


function Todos() {
    const [tasks, setTasks] = useState([])
    const [taskList, setTaskList] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
      apiCall(`http://localhost:5000/todos`, setTasks, setError)
    }, [])

    return (
        <React.Fragment>
            {error ? <React.Fragment><ErrorPage /></React.Fragment>
                :
                <div className="todo-window">
                    <Sections setTasks={setTasks} tasks={tasks} taskList={taskList} setTaskList={setTaskList} />
                    <div className="list-container">
                        {taskList ? <div className="task-list">
                            {tasks.map((task, index) => {
                                return <TodoItem
                                    tasks={tasks}
                                    setTasks={setTasks}
                                    index={index}
                                    task={task} />
                            })}
                        </div>
                            :
                            <div className="done-list">
                                {tasks.map((task, index) => {
                                    return <TodoItem
                                        doneFlag={!taskList}
                                        tasks={tasks}
                                        setTasks={setTasks}
                                        index={index}
                                        task={task} />
                                })}
                            </div>
                        }
                    </div>
                </div>}
        </React.Fragment>
    )
}

export default Todos;