import React, {useState} from "react";
import { v4 as uuid } from "uuid";

import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log({ CATEGORIES, TASKS });

function App() {

  TASKS.forEach(task => task.id = uuid())
  
  const [tasks, setTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredTasks = tasks.filter(task => {
    if(selectedCategory === 'All') {
      return true
    }
    return task.category === selectedCategory
  })

  function handleTaskFormSubmit(taskObj) {
    setTasks([...tasks, taskObj])
  }

  function handleDelete(e) {
    const index = Number(e.target.parentNode.id)
    const lastElement = tasks[tasks.length - 1]

    if(index === lastElement.id){
      tasks.pop()
    } else {
      tasks.splice(index, 1)
    }
    
    setTasks([...tasks])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <NewTaskForm 
        categories={CATEGORIES}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList 
        tasks={filteredTasks}
        onHandleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
