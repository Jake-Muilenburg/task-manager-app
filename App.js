import React, {useState} from "react"

import './App.css';
import Task from "./Components/Task"

function App() {

  let taskData = {Title: "Title", Date: "9/20/21", Description: "Description", Priority: "Priority"}

  const [tasks, setTasks] = useState([])
  
// Adds Task
  const addTask = () => {
    taskData.Title = document.getElementById("title_placeholder").value;
    taskData.Date = document.getElementById("date_placeholder").value;
    taskData.Description = document.getElementById("description_placeholder").value;
    taskData.Priority = document.getElementById("priority_placeholder").value;
    setTasks([...tasks, taskData])
  }
// Edit task overides the previous task
  const editTask = (index) => {
    taskData.Title = document.getElementById("title_placeholder").value;
    taskData.Date = document.getElementById("date_placeholder").value;
    taskData.Description = document.getElementById("description_placeholder").value;
    taskData.Priority = document.getElementById("priority_placeholder").value;
    const newTasks = [];
    for (let i = 0; i < tasks.length; i++) {
      if (i === index) {
        newTasks.push(taskData);
      } else {
        newTasks.push(tasks[i]);
      }
    }
    setTasks(newTasks);
  }
//Deletes/Complete Task
  const completeTask = (index) => {
    const newTasks = [];
    for (let i = 0; i < tasks.length; i++) {
      if (i !== index) {
        newTasks.push(tasks[i]);
      }
    }
    setTasks(newTasks);
  }

  return (
    <div className="App">
      <div style={{fontSize:"35px",width: "100%", color:"White",backgroundColor: "grey",height:"50px"}}>
        Task Manager App
      </div>
      <input id="title_placeholder" type="text" style={{border:"0px", fontSize:"20px", color:"black",backgroundColor:"white"}} placeholder="Title"/>
      <br/>
      <input id="date_placeholder" type="date"  style={{border:"0px", fontSize:"20px", color:"black",backgroundColor:"white"}}placeholder="Date"/>
      <br/>
      <input id="description_placeholder" type="text"  style={{border:"0px", fontSize:"20px", color:"black",backgroundColor:"white"}}placeholder="Description"/>
      <br/>
      <input id="priority_placeholder" type="number" style={{border:"0px", fontSize:"20px", color:"black",backgroundColor:"white"}} placeholder="Priority"/>
      <br/>
      <button style={{border:"0px", fontSize:"20px", color:"white",backgroundColor:"grey"}} onClick={addTask}>Add Task</button>
      {tasks.map((task, index) => (
        <Task Index={index} Title={task.Title} Date={task.Date} Description={task.Description} Priority={task.Priority} EditTask={editTask} CompleteTask={completeTask}/>
      ))}
    </div>
  );
}

export default App;