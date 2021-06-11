import React, { useState } from 'react';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';

const tasksData = [
  {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true
  },
  {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30pm',
      reminder: true
  },
  {
      id: 4,
      text: 'Food Shopping',
      day: 'Feb 5th at 2:30pm',
      reminder: false
  }
]

const App = () => {

  //task state
  const [tasks, setTasks] = useState(tasksData);


  //function to delete task from the list
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  //function to conditionally add reminder class onDoubleClick
  const handleToggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task ))
  }
  

  //function to add task

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000000)  + 1;

    setTasks([...tasks, { id, ...task }]);
  }

  return (
    <div className="container">
      <Header/>
      <AddTask addTask={addTask}/>
        {tasks.length > 0 ? (
          <Tasks tasks={tasks} deleteTask={deleteTask} onToggleTask={handleToggleTask} />
          ) : (
          'No task to show'
        )}
    </div>
  )
}

export default App;
