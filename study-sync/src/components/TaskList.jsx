function TaskList ({ task }){
    if (task.length === 0) {
        return (
             <label><i>No tasks yet -- add one!</i></label>
        )
    }
   return (
    <div>
        {task.map((item, index) => (
                <div key={index} style={{borderBottom: '3px solid rgba(0, 0, 0, 0.15)'}}>
                    <p><strong>Task:</strong> {item.name} <button>❌</button></p>
                </div>
        ))}
    </div>
   );
}

export default TaskList;