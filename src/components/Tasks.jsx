import React from 'react';
import TaskDetails from './TaskDetails';


const Tasks = ({tasks, deleteTask, onToggleTask}) => {
    return (
        <div>
            {tasks.map(task => (
              <TaskDetails key={task.id} task={task} deleteTask={deleteTask} onToggleTask={onToggleTask} />
            ))}
        </div>
    )
}

export default Tasks;
