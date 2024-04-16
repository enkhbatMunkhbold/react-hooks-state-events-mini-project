import React, { useState } from "react";
import { v4 as uuid } from "uuid";


function NewTaskForm({categories, onTaskFormSubmit}) {

  const initialFormValues = {
    id: uuid(),
    text: '',
    category: ''
  }

  const [newTask, setNewTask] = useState(initialFormValues)
  const renderSelection = categories.map(category => {
    if(category !== 'All') 
      return <option key={category}>{category}</option>
      
  })

  function handleSubmit(e) {
    e.preventDefault()
    onTaskFormSubmit(newTask)
    setNewTask(initialFormValues)
  }
  
  const handleChange = e => {
    const {name, value} = e.target
    setNewTask({...newTask, [name]: value})
  }
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleChange} value={newTask.text}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleChange} value={newTask.category}>
          {renderSelection}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
