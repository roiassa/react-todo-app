import React, {useState} from 'react'
import removeFromTasks, { updateIsDone, duplicateInput } from '../../helpers/taskHelpers'
import axios from 'axios';
import uuidv4 from '../../helpers/utils'

function Input(props) {
    const [input, setInput] = useState('')
    const [error, setError] = useState(false)

    function handleSubmit(e) {
        e.preventDefault();
        if (!input.trim() || duplicateInput(props.tasks, input)) {
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
                    props.setTasks([...props.tasks, task])
                })
            setInput('');
        }
    }

    return (
        <React.Fragment>
            {error && props.taskList ? <div className="error"><p>You have to type something in or you have duplicate task.</p> </div> : null}
            <form className="submit-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Type your task here" value={input} onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </React.Fragment>
    )
}

export default Input
