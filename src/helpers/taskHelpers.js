export default function removeFromTasks(curArr, taskToRemove, callBack) {
    const updatedTasks = curArr.filter((task => {
        return task.id !== taskToRemove.id;
    }))
    callBack(updatedTasks);
}


export function updateIsDone(curArr, taskToChange, callBack) {
    const updatedTasks = curArr.map((task => {
        if (task.id === taskToChange.id) {
            task.isDone = true;
        }
        return task;
    }))
    callBack(updatedTasks);
}

export function duplicateInput(arr, input) {
    let isDuplicate = false;

    arr.forEach(task => {
        if (input.trim() === task.value.trim()) {
            isDuplicate = true;
        }
    })
    return isDuplicate;
}