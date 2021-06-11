import React from 'react';
import { FaTimes } from 'react-icons/fa';

const TaskDetails = ({task, deleteTask,onToggleTask}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggleTask(task.id)}>
            <h3>
                {task.text} <FaTimes onClick={() => deleteTask(task.id)} style={{color:'red', cursor:'pointer'}} />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default TaskDetails
