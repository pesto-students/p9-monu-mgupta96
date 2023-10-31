import Task from './Task';

function Tasks({tasks, onCheck, onDelete, onEdit}){
    return (
      <>
        <div className='taskList unCompleted'>
          {
            tasks.filter(task => !task.completed)
                  .map(task => {
                    return (
                      <span key={task.id}>
                      <Task task={task} onCheck={onCheck} onDelete={onDelete} onEdit={onEdit}/>
                      </span>
                    )
                  })
          }

        </div>
        <div className='taskList'>
          {

            tasks.filter(task => task.completed)
                  .map(task => {
                    return (
                      <span key={task.id}>
                      <Task task={task} onCheck={onCheck} onDelete={onDelete} onEdit={onEdit}/>
                      </span>
                    )
                  })
            
          }

        </div>
      </>
    )
}
export default Tasks