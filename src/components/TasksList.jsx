import React, { useEffect, useState } from 'react'
import FormTask from './FormTask'
import Task from './Task'
import '../styles/tasksList.css'

const TasksList = () => {

  const localTask = () => {
    let taks = localStorage.getItem("tasksArray");
    if(taks){
      return JSON.parse(taks)
    }else{
      return [];
    }
  }
  
  const [tasksArray, setTasksArray] = useState(localTask())


  useEffect(() => {
   localStorage.setItem("tasksArray", JSON.stringify(tasksArray));
  }, [tasksArray])
  
  

  const addTask = task => {
    console.log("tarea agregada");
    if(task.text.trim()){
        task.text = task.text.trim();

        const taskUpgrade = [task, ...tasksArray]
        setTasksArray(taskUpgrade);
    } 
  }

  const deleteTask = id =>{
    const taskUpgrade = tasksArray.filter(task => task.id !== id)
    setTasksArray(taskUpgrade)
  }

  const completeTask = id =>{
    const taskUpgrade = tasksArray.map(task => {
        if(task.id === id){
            task.complete = !task.complete
        }
        return task
    });
    setTasksArray(taskUpgrade)
  }
  
    return (
    <>
        <FormTask onSubmit={addTask}/>
        <div className="list__task__container">
            {
                tasksArray.map((task) => 
                    <Task
                        key={task.id}
                        id={task.id}
                        text={task.text}
                        complete={task.complete}
                        deleteTask = {deleteTask}
                        completeTask = {completeTask}
                    />
                )
            }
        </div>
    </>
  )
}

export default TasksList