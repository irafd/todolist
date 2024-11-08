import React, {useState} from 'react'
import styles from './Form.module.css'
import { v4 as uuidv4 } from 'uuid';


function Edit({editTodo, task}) {
    const [userInput, setUserInput] = useState('')
    const handleChange = (e) => {
        setUserInput(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo(userInput, task.id)
        setUserInput("")
    }
    return (
      
      <form className={styles.form}
      onSubmit={handleSubmit}>
          <input type='text' placeholder='Update tasks...'
              onChange={handleChange} value={userInput}
              className={styles.input} id='gfrrus'/>
          <button type="submit" title="Update task"  className={styles.button} key={uuidv4()}>Update</button> 
    </form>
  )
}

export default Edit
