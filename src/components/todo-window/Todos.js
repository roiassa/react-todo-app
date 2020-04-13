import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoItem from "./TodoItem"
import Sections from "./Sections"


function Todos() {
    const [tasks, setTasks] = useState([])
    const [taskList, setTaskList] = useState(true)

    useEffect(() => {
        axios.get(`http://localhost:5000/todos`)
            .then(res => {
                setTasks(res.data)
            })
    }, [])

    return (
        <div className="todo-window">>
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
        </div>
    )
}

export default Todos;