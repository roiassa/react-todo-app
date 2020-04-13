import React from 'react'
import axios from 'axios';
import removeFromTasks, { updateIsDone} from '../../helpers/taskHelpers'

function TodoItem(props) {
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
                            updateIsDone(props.tasks, props.task, props.setTasks)
                        } else {
                            axios.delete(`http://localhost:5000/todos/${task.id}`)
                            removeFromTasks(props.tasks, props.task, props.setTasks)
                        }
                    })
                return task;
            } else {
                return task;
            }

        })
        props.setTasks(updatedTasks);
    }

    return (
        <React.Fragment>
            {props.doneFlag === true ?
                (props.task.isDone && !props.task.toRemove) ?
                    <React.Fragment>
                        <div className="todo-item" key={props.index}>
                            <span>{props.tasks[props.index].value}</span>
                            <button onClick={() => handleClick(props.tasks, props.task, 'toRemove')}>Remove</button>
                        </div>
                    </React.Fragment>
                    :
                    null
                :
                props.task.isDone || props.task.toRemove ? null
                    :
                    <div className="todo-item" key={props.index}>
                        <span>{props.tasks[props.index].value}</span>
                        <button onClick={() => handleClick(props.tasks, props.task, 'isDone')}>Done</button>
                        <button onClick={() => handleClick(props.tasks, props.task, 'toRemove')}>Remove</button>
                    </div>}
        </React.Fragment>
    )
}

export default TodoItem
