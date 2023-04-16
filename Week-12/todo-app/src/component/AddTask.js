import { useState } from "react"

function AddTask({onAdd}){
    const [newTask, setNewTask] = useState("")
    let newTaskInputField = document.getElementById('inputTask')
    document.addEventListener('keypress', (e)=>{
        if(e.key == 'Enter' && newTask.length > 0){
            onAdd(newTask)
            setNewTask("")
        }
    })

    return(
        <input id="inputTask" value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
    )
}
export default AddTask