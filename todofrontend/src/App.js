import React, {useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  let [tasks,setTasks]=useState([]); 

  let [taskname,setTaskname]=useState('');
  const addTask = async(e)=>{
    e.preventDefault();
    const res = 
    await axios.post("http://localhost:5000/dbaddtodo",{taskname});
    setTasks([...tasks,res.data]);
    setTaskname('');
  }
  useEffect(()=>{
    axios.get("http://localhost:5000/dbfetchtodo")
    .then(res=>setTasks(res.data));
  },[]);

  return (
    <div className="App">
      <h1>Todo App</h1>
      <form onSubmit={addTask}>
      <input type="text" value={taskname} onChange={e=>setTaskname(e.target.value)}
      placeholder="Enter task"></input>
      <button>Add</button>
      </form> <br/><br/>
      <table>
      <tr>
        <th>Task name</th>
      </tr>
      {tasks.map(task=>(<tr>
        <td>{task.taskname}</td>
        </tr>))}
      </table>
    </div>
  );
}

export default App;