import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import Input from './Input'

function Sections(props) {
    return (
        <React.Fragment>
            <div>
                {props.taskList ? <h1>Tasks</h1> : <h1>Done</h1>}
            </div>
            <div className="sections">
                <div>
                    <button className="buttons" onClick={() => props.setTaskList(true)}>
                        <FontAwesomeIcon icon={faBriefcase} className="icon-briefcase" />
                Tasks</button>
                </div>
                <div>
                    <button className="buttons" onClick={() => props.setTaskList(false)}>
                        <FontAwesomeIcon icon={faCheck} className="icon-check" />
                Done</button>
                </div>
            </div>
            {props.taskList ? <Input 
            setTasks={props.setTasks}
            tasks={props.tasks}
            taskList={props.taskList} /> : null}
        </React.Fragment>
    )
}

export default Sections
