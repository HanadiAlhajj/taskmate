
import { useEffect, useState } from 'react';
import { ShowTask } from './components/ShowTask';
import {Footer} from "./components/Footer";
import { AddTask } from "./components/AddTask"
import {HeaderSection } from "./components/HeaderSection"
import './App.css';

function App() {
 
 const [taskList,setTaskList] = useState(JSON.parse(localStorage.getItem("taskList"))||[]);
 const [task,setTask] = useState({
  id: '',
  name :'' ,
  time: ''
  
 });

 useEffect(()=>{
  localStorage.setItem("taskList",JSON.stringify(taskList));
 },[taskList]);
  /*const addNewTask =(task) =>{
    console.log(task);
    setTaskList([...taskList,task]);
  }*/
  return (
    <div className="App">
      <div className="container">
      <HeaderSection/>
      <main>
      <AddTask
       taskList={taskList} 
      setTaskList={setTaskList} 
      task={task}
      setTask={setTask} />
      <ShowTask 
      taskList={taskList} 
      setTaskList={setTaskList} 
      task={task} 
      setTask={setTask}/>
      </main>
      <Footer/>
    </div>
    </div>
  );
}

export default App;
