import { useState, useEffect } from 'react';
import './App.css';
import Tasks from './component/Tasks';
import AddTask from './component/AddTask';
import EditTask from './component/EditTask';

function App() {
  const [tasks, setTasks] = useState([
    {id: 1, name: "Keep calm and drink water", completed: false},
    {id: 2, name: "Grocery shopping", completed: false},
    {id: 3, name: "Increase efficiency", completed: true},
    {id: 4, name: "Eliminate one-click thinkgs", completed: true}
  ])

  const onCheck = (id) => {
    setTasks(tasks.map( task => {
      if(task.id === id){
        task.completed = !task.completed
      }
      return task
    }))
  }
  const onDelete = (id) => {
    setTasks(tasks.filter( task => task.id !== id))
  }

  const onAdd = (data) => {
    let prevId = tasks.length >0 ? tasks.slice(-1)[0].id : 1
    let newTask = {id: prevId+1, name: data, completed:false}
    setTasks([...tasks, newTask])
  }

  const onEdit = (id, value) => {
    setTasks(tasks.map( task => {
      if(task.id === id){
        task.name = value
      }
      return task
    }))
  }
 
  return (
    <div className="App">
      <AddTask onAdd={onAdd}/>
      <Tasks tasks={tasks} onCheck={onCheck} onDelete={onDelete} onEdit={onEdit}/>
    </div>
  );
}

export default App;
