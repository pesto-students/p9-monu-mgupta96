import Task from './Task';

function Tasks({tasks, onCheck, onDelete, onEdit}){
    return (
      <>
        <div className='unCompleted'>
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
        <div className='completed'>
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