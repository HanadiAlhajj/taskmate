import "../assets/css/AddTask.css";
import {React} from 'react';
export const AddTask = ({taskList,setTaskList,task,setTask}) => {

 //const [taskName,setTaskName] = useState('');
  const handleSumbit = (event)=>{
    event.preventDefault();
    if(task.id){
      const date = new Date();
      const updatedList =taskList.map(t=>(t.id === task.id ?{ id: task.id,name: event.target.task.value ,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}:t));
        setTaskList(updatedList);
        setTask({});
    }
    else{
    const date = new Date();
    const taskObj ={
      id: date.getTime(),
      name :event.target.task.value ,
      time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
      
    }; 
     setTaskList([...taskList,taskObj]);
     setTask({});
    
  }
  }

  return (
    <section className="addTask">
        <form onSubmit={handleSumbit}>
            <input id="task" name="task" value={task.name || ''} type="text" autoComplete="off" placeholder="Task Name" maxLength="25" onChange={(e)=>{setTask({...task,name:e.target.value})}}/>
            <button type="submit">{task.id ?"Update":"Add"}</button>
            
        </form>
    </section>
  )
}


