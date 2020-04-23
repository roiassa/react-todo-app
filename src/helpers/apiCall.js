import axios from 'axios'
import removeFromTasks, {updateIsDone} from './taskHelpers'

export default function apiGet(callBack, error) {
    const url = 'http://localhost:5000/todos'
    axios.get(url)
        .then(res => {
            callBack(res.data)
        })
        .catch(err => {
            if (err.response.status === 404) {
                error(true);
            }
        })
}

// export function editApi(keyName, arr, item, callBack, task) {
//     const url = `http://localhost:5000/todos/${task.id}`
//     axios.get(url)
//     .then(res => {
//         if (keyName === 'isDone') {
//             axios.patch(url, {
//                 isDone: true
//             })
//             updateIsDone(arr, item, callBack)
//         } else {
//             axios.delete(url)
//             removeFromTasks(arr, item, callBack)
//         }
//     })
// }

