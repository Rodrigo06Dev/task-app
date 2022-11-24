import React, { useState } from 'react'
import '../styles/form.css'
import {v4 as uuidv4} from 'uuid'

const FormTask = (props) => {

  const [input, setInput] = useState("")

const handleChange = e => {
  setInput(e.target.value)
}

const handleSend = e => {
  e.preventDefault();
  const taskNew = {
    id: uuidv4(),
    text: input,
    complete: false
  }
  
  props.onSubmit(taskNew)
  cleanform();
  
}

const cleanform = () =>{
  setInput("")
  document.querySelector(".form__task").reset();
}
  return (
    <form className="form__task" onSubmit={handleSend}>
        <input 
            type="text" 
            className="input__task" 
            name="text"
            placeholder='New Task'
            onChange={handleChange}
        />
        <button className="button__task">
            Add  
        </button>    
    </form>
  )
}

export default FormTask