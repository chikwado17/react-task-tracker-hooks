import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';
import Footer from './components/Footer';
import About from './components/About';


const App = () => {

  //task state
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);


  const fetchData = async () => {
    const res = await axios.get('http://localhost:5000/tasks');
    setTasks(res.data);
  }

  useEffect(() => { 
    fetchData();
  }, []);


  //function to delete task from the list
  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/tasks/${id}`);
    setTasks(tasks.filter(task => task.id !== id));
  }

  //function to conditionally add reminder class onDoubleClick
  const handleToggleTask = async (id) => {

    const getData = await axios.get(`http://localhost:5000/tasks/${id}`);
    const upDateTask = {...getData.data, reminder: !getData.data.reminder}

    await axios.put(`http://localhost:5000/tasks/${id}`,upDateTask);
 

   setTasks(tasks.map(task => task.id === id ? {...task, reminder: upDateTask.reminder} : task ))
  }
  

  //function to add task
  const addTask = async (task) => {
    const getData = await axios.post('http://localhost:5000/tasks/',task);
    setTasks([...tasks, {...getData.data }]);
  }

  return (
    <div className="container">
      <Header showForm={showForm} setShowForm={setShowForm}/>
          <Switch>
            <Route exact path="/" render={(props) => (
              <div>
                <AddTask showForm={showForm} addTask={addTask}/>
                  {tasks.length > 0 ? (
                    <Tasks tasks={tasks} deleteTask={deleteTask} onToggleTask={handleToggleTask} />
                    ) : (
                    'No task to show'
                  )}
              </div>
            )} />
            <Route path="/about" component={About} />
          </Switch>
        <Footer/>
    </div>
  )
}

export default App;
