import React, { useState } from 'react'

const AddTask = ({addTask}) => {

    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    //function to submit add task 
    const onSubmitTask = (e) => {
        e.preventDefault()

        //assigning the input values to addTask function
         addTask(
             {
                text, 
                day, 
                reminder
            });
        //reseting the inputs
        setText('');
        setDay('');
        setReminder(false);
    }

    return (
        <form className="add-form" onSubmit={onSubmitTask}>
            <div className="form-control">
                <label htmlFor="text">Task</label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder='Add Task' />
            </div>
            <div className="form-control">
                <label htmlFor="text">Day & Time</label>
                <input type="text" value={day} onChange={(e) => setDay(e.target.value)} placeholder='Day & Time' />
            </div>
            <div className="form-control form-control-check">
                <label htmlFor="text">Set Reminder</label>
                <input type="checkbox" checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}  />
            </div>
            <input type="submit" className="btn btn-block" value={`Save`} />
        </form>
    )
}

export default AddTask
