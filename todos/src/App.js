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

  return (
    <>
    <h1>To do list</h1>
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
