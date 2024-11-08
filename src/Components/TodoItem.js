import React from 'react'
import styles from './TodoItem.module.css'
import { CiCircleRemove } from "react-icons/ci";
import { IoIosCreate } from "react-icons/io";
import { FaLockOpen } from "react-icons/fa";
import { IoLockClosed } from "react-icons/io5";
import { v4 as uuidv4 } from 'uuid';

function TodoItem({ todo, removeTask, togleTask,  editTodo  }) {

  return (
    <div className={styles.wrapper} >
      <div className={styles.container} >
        <div className={styles.title} >
          <div>
            <input placeholder='time'  type='time' className={styles.time} key={uuidv4()}   ></input>
            <input placeholder='date' type='date' className={styles.date} key={uuidv4()} ></input>
              
            <button type="button" onClick={() => togleTask(todo.id)} className={styles.lock} title="Lock" key={uuidv4()} >
              {
                todo.isCompleted ?  <IoLockClosed className={styles.lockClosed}/> : <FaLockOpen  />
              }
              
            </button>
          </div>
          <div className={todo.isCompleted ?  styles.close  : ''}> 
            {todo.task}
          </div>
          <CiCircleRemove onClick={() => removeTask(todo.id)} className={styles.remove} key={uuidv4()} />
      <IoIosCreate onClick={() => editTodo(todo.id)} className={styles.edit} key={uuidv4()} />
        </div>
        
      </div>
      </div>
  )
}

export default TodoItem
