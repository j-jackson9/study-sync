import { useState } from 'react'
import './App.css'
import './styles/TaskInput.css';
import './styles/TaskList.css';
import './styles/ScheduleView.css';



function App() {
  return (
    <>
     <div className="header">
       Study✏️Sync
      </div>

      <div className="task-box">
        <div className="add-task">
          <h1>✅Add Task</h1>
          <form>
            <label>Task Name</label>
            <br />
            <input type="text" className="l1" name="task-name" />

            <br />
            <label>Due Date</label>
            <br />
            <input type="text" className="l1" name="task-date" />

            <br />
            <label>Hours Needed</label>
            <br />
            <input type="text" className="l1" name="task-hours" />

            <div className="btn">
              <button className="add-button">+Add task</button>
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
