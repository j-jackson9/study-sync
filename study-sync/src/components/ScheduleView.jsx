import React from 'react';
import  RandomColor  from './RandomColor';
import '../styles/ScheduleView.css';

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
                <React.Fragment key={index}>
                 <div className={'schedule-box'} key={index}>
                    <div className={'color-dot'}>
                        <button style={{backgroundColor: item.color}}></button>
                    </div>
                    <div className={'mid-box'}>
                    <h3>{item.name}</h3>
                    <p style={{color: 'gray'}}>{item.dueDate}</p>
                    </div>
                    <div className={'end-box'}>
                        <p style={{backgroundColor: item.color, color: 'white'}}>{item.hours}H</p>
                    </div>
                    
                </div>  
                </React.Fragment>
            ))}
            
        </div>
    )
    
}

export default ScheduleView;