import  RandomColor  from './RandomColor';

function ScheduleView({ color, sortedSchedule })
{ 
    if (sortedSchedule.length === 0) {
        return (
             <label><i>Your generated schedule will appear here!</i></label>
        )
    }
    return (
        <div>
            {sortedSchedule.map((item, index) => (
                 <div key={index} style={{ backgroundColor: item.color }}>
                    <p style={{color:'white',WebkitTextStroke: "0.5px black", textShadow: "0.5px 0.5px 1px black", fontSize: '20px'}}><strong>Task:</strong> {item.name}</p>
                    <p style={{color:'white',WebkitTextStroke: "0.5px black",textShadow: "0.5px 0.5px 1px black", fontSize: '20px'}}><strong>Hours Needed:</strong> {item.hours}</p>
                </div>
            ))}
        </div>
    )
    
}

export default ScheduleView;