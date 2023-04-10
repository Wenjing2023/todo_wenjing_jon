import React, {useState} from 'react';

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
  
  const [newTask,setNewTask] = useState('');

  const [newPriorityLevel, setNewPriorityLevel] = useState(['low'])

  const handleTaskInput = (event)=>{
    console.log(event.target)
    setNewTask(event.target.value)
  };

  const handleRadioChange = (event) => {
    console.log("handleRadioChange called")
    console.log(event.target)
    if (event.target.value === "high") {
      console.log("High selected")
      setNewPriorityLevel('high')
    }
    if (event.target.value === "low") {
      console.log("Low selected")
      setNewPriorityLevel('low')

    }
  }

  const handleTaskSubmit = (event)=>{
    event.preventDefault()
    // const {name, value, type, checked} = event
    // console.log(name)
    const copyTasks = [...tasks]
    copyTasks.push({
      name: newTask,
      priority: newPriorityLevel      
    })
    setTasks(copyTasks)

    setNewTask('')
  };
  

  return (
    <>
        <h1>To do list</h1>
        <h2>Add to dos</h2>
          <form onSubmit={handleTaskSubmit}>
          <span>
          <label htmlFor='new-task'> Add a new task</label>
          <input 
            type='text'
            id="new-task"
            onChange={handleTaskInput}
            value={newTask} 
          />
          <div className="radio">
            <label>
              <input
                type="radio"
                value="high"
                onChange={handleRadioChange}
                checked = {newPriorityLevel === 'high'}
              />
              High
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="low"             
                onChange={handleRadioChange}
                checked = {newPriorityLevel === 'low'}

              />
              Low
            </label>
          </div>
          <button> Save Task</button>          
          </span>
          </form>

        <h2>Existing to dos</h2>
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
  )
}

export default App;
