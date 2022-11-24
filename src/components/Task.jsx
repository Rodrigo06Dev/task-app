import React from 'react'
import '../styles/task.css'
import { RiDeleteBin5Line} from "react-icons/ri";

const Task = ({id,text, complete, completeTask, deleteTask }) => {
  return (
    <div className={complete ? 'task__container complete' : 'task__container'}>
        <div className="task__container__text" onClick={() => completeTask(id)}>
            {text}
        </div>
        <div className="task__container__icons" onClick={() => deleteTask(id)}>
            <RiDeleteBin5Line  className="task__icon"/>
        </div>
    </div>
  )
}

export default Task