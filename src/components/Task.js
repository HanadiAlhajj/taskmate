import React from 'react'
import '../assets/css/TaskCard.css';
export const Task = (props) => {
  return (
    
    <li key={props.task.id} className={props.task.completed?"completed":"incomplete"}>
            <span className="name">{props.task.name}</span>
            <span className="time">{props.task.time}</span>
            <i  className='bi bi-pencil-square'></i>
            <i className='bi bi-trash'></i>
    
          </li>
          
  )
}
