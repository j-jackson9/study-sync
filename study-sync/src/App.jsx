import { useState } from 'react'
import TaskList from './components/TaskList';
import ScheduleView from './components/ScheduleView';
import RandomColor from "./components/RandomColor";
import './App.css'
import './styles/TaskInput.css';
import './styles/TaskList.css';
import './styles/ScheduleView.css';

function App() {
  const [taskName, setTaskName] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [hours, setHours] = useState('');
  const [task, setTask] = useState([]);
  const [color, setColor] = useState('')
  const [sortedSchedule, setSortedSchedule] = useState([]);

  function handleAddTask(e) {
      e.preventDefault();
      const newTask = {
        name: taskName,
        dueDate,
        hours,
        color: RandomColor()
      };

      setTask([...task,newTask]);

      setTaskName("");
  setDueDate("");
  setHours("");

      
     console.log("TASK STATE:", task);
  }

  function sortSchedule() {
    let sortedList = [...task];

    sortedList.sort((a,b) => new Date(a.dueDate) - new Date(b.dueDate));

    setSortedSchedule(sortedList);

  }
  return (
    <>
     <div className="header">
       Study✏️Sync
      </div>

      <div className="task-box">
        <div className="add-task">
          <h1>✅Add Task</h1>
          <form onSubmit={handleAddTask}>
            <label>Task Name</label>
            <br />
            <input type="text" className="l1" name="task-name" value={taskName} onChange={(e) => setTaskName(e.target.value)}/>

            <br />
            <label>Due Date</label>
            <br />
            <input type="date" className="l1" name="task-date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />

            <br />
            <label>Hours Needed</label>
            <br />
            <input type="text" className="l1" name="task-hours" value={hours} onChange={(e) => setHours(e.target.value)} />

            <div className="btn">
              <button className="add-button" type='submit'>+Add task</button>
            </div>
          </form>
        </div>

        <div className="task-list">
          <h1>📌Task List</h1>
          <TaskList task={task}/>
        </div>
      </div>

      <div className="schedule">
        <h1>📝Generated Schedule</h1>
        <ScheduleView sortedSchedule={sortedSchedule}/>
       
      </div>

      <div className="btn">
        <button className="generate" onClick={sortSchedule}>Generate</button>
      </div>
    </>
  )
}

export default App
