import axios from 'axios'

export default function apiCall(url, callBack, error) {
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