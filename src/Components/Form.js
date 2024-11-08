import React, {useState} from 'react'
import styles from './Form.module.css'
import { v4 as uuidv4 } from 'uuid';

function Form({addTask}) {
    const [userInput, setUserInput] = useState('')
    const handleChange = (e) => {
        setUserInput(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput)
        setUserInput("")
    }
    return (
      
      <form className={styles.form}
      onSubmit={handleSubmit}>
          <input type='text' placeholder='Add tasks...'
              onChange={handleChange} value={userInput}
                className={styles.input} id="ghfhru"/>
          <button type="submit" title="Save task" className={styles.button} key={uuidv4()}>Save</button>
    </form>
  )
}

export default Form
