import { useState } from "react"

function AddTask({onAdd}){
    const [newTask, setNewTask] = useState("")
    document.addEventListener('keypress', (e)=>{
        if(e.key === 'Enter' && newTask.length > 0){
            onAdd(newTask)
            setNewTask("")
        }
    })

    return(
        <input
            className="takeInput" 
            placeholder="Take note..."
            maxLength={30}
            id="inputTask" 
            value={newTask} 
            onChange={(e) => setNewTask(e.target.value)}/>
    )
}
export default AddTask