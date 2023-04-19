
function Task({task, onCheck, onDelete, onEdit}){

    const updateTask = (id) => {
        let taskUpdate = prompt("Modify task", task.name)
        onEdit(id, taskUpdate)
    }

    return (
        <div className='taskItem'>
            <input
                type='checkbox' id={task.id} onChange={() => onCheck(task.id)} 
                checked={task.completed}/>
            <span className={task.completed ? "completed" : undefined}>{task.name}</span>
            <a onClick={() => updateTask(task.id)}>✏️</a>
            <a onClick={() => onDelete(task.id)}>❌</a>
        </div>
    )
}   
export default Task