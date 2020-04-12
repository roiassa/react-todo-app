import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faBriefcase } from '@fortawesome/free-solid-svg-icons'

function Sections() {
    const [taskList, setTaskList] = useState(true)


    return (
        <React.Fragment>
            <div>
                {taskList ? <h1>Tasks</h1> : <h1>Done</h1>}
            </div>
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
        </React.Fragment>
    )
}

export default Sections
