import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
     <div class="header">
        Study Sync
     </div>
     <div class='task-box'>
        <div class="add-task">
            <label>Add Task</label>
            <form>
            <label>Task Name</label>
            <br></br>
            <input type='text' class='i1' name='task-name'></input>
          </form> 
        </div>
        <div class="task-list">
          <label class='l2'>Task List</label>
        </div>
     </div>
    </>
  )
}

export default App
