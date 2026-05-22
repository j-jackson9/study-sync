import { useState } from 'react'
import './App.css'
import './styles/TaskInput.css';
import './styles/TaskList.css';
import './styles/ScheduleView.css';


function App() {
  const [taskName, setTaskName] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [hours, setHours] = useState('');
  const [task, setTask] = useState([]);

  function handleAddTask(e) {
      e.preventDefault();
      const newTask = {
        name: taskName,
        dueDate,
        hours
      };

      setTask([...task,newTask]);

      
      console.log(taskName);
      console.log(dueDate);
      console.log(hours);
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
          <label><i>No tasks yet -- add one!</i></label>
        </div>
      </div>

      <div className="schedule">
        <h1>📝Generated Schedule</h1>
        <label><i>Your schedule will appear here.</i></label>
      </div>

      <div className="btn">
        <button className="generate">Generate</button>
      </div>
    </>
  )
}

export default App
