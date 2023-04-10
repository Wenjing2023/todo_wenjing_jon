import {useState} from 'react';

import './App.css';

function App() {

  const [tasks, setTasks] = useState(
    [
      {
        name: "Buy shopping",
        priority: "high"
      },
      {
        name: "Clear bathroom",
        priority: "low"
      },
      {
        name: "Car MOT",
        priority: "high"
      }
    ]
  )
  
  const [newTask,setNewTask] = useState('')

  const handleTaskInput = (event)=>{
    setNewTask(event.target.value)
  }
  const handleTaskSubmit =(event)=>{
    event.preventDefault()
    const copyTasks = [...tasks]
    copyTasks.push({
      name: newTask,
      priority: "low"       
    })
    setTasks(copyTasks)

    setNewTask('')
  }
  

  return (
    <>
    <h1>To do list</h1>
    <h2>Add to dos</h2>
    <h2>Existing to dos</h2>
    <form onSubmit={handleTaskSubmit}>
    <label htmlFor='new-task'> Add a new task</label>
    <input 
      type='text'
      id="new-task"
      onChange={handleTaskInput}
      value={newTask} />
      <button> Save Task</button>
    </form>
    <ul>
    {
      tasks.map( (task) => {
          return (
            <li 
              className={ task.priority === "high" ? "high-priority" : "low-priority"}
            >
              {task.name}
            </li>)
          }
        )
    }

         
    </ul>

    </>
  );
}

export default App;
