import {useState} from 'react';

import './App.css';

function App() {

  const [tasks, setTasks] = useState(
    [
      "Buy shopping",
      "Clear bathroom",
      "Car MOT"
    ]
  )
  
  const [newTask,setNewTask] = useState('')

  const handleTaskInput = (event)=>{
    setNewTask(event.target.value)
  }
  const handleTaskSubmit =(event)=>{
    event.preventDefault()
    // const copyTasks = [...tasks]
    // copyTasks.push(
    //   newTask
    // )
    // setTasks(copyTasks)
    setTasks([...tasks,newTask])
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
          return (<li>{task}</li>)
          }
        )
    }

         
    </ul>

    </>
  );
}

export default App;
