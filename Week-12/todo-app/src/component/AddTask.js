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

function foo1()
{
  return {
      bar: "hello"
  };
}
function foo2()
{
  return
  {
      bar: "hello"
  };
}
foo1()
foo2()
export default AddTask