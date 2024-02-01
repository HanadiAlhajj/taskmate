import React from 'react'

export const ShowTask = ({taskList,setTaskList,task,setTask}) => {
      
      const  handleDelete= (id)=>{
        const updateList =  taskList.filter(task => task.id !== id);
        setTaskList(updateList)
    
      }
      const handleEdit =(id) =>{
        const selectedTask = taskList.find(task => task.id=== id);
        setTask(selectedTask);
        console.log(selectedTask);
      }
  return (
    <section className='showTask'>
      <div >
        <p className="head"> 
          <span>
          <span className='title'>Todo</span>
          <span className='count'>{taskList.length}</span>
          </span>
          <button className='clearAll' onClick={()=>setTaskList([])}> Clear All</button>
        
        </p>
        
         
      </div>
      <ul> 
      
        { taskList.map((todo) => 
        <div key = {todo.id}>
          <li key={todo.id} >
            <p>
            <span className="name">{todo.name}</span>
            <span className="time">{todo.time}</span>
            </p>
            <i onClick={()=>handleEdit(todo.id)} className='bi bi-pencil-square'></i>
            <i onClick={()=>handleDelete(task.id)} className='bi bi-trash'></i>
    
          </li>
          
          </div>
        )}
      </ul>
    </section>
  )
}

