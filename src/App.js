import React, { useState, useEffect } from 'react'
import Form from "./Components/Form"
import styles from "./App.module.css"
import TodoItem from './Components/TodoItem'
import Edit from './Components/Edit'
import Footer from './Components/Footer'
import { v4 as uuidv4 } from 'uuid'



function App() {
  const [todos, setTodos] = useState('')
  const [allTodos, setAllTodos] = useState(0)
  const [allComplete, setAllComplete] = useState(0)
  
useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTask = (userInput) => {
    if (userInput) {
      const newTask = {
        id: Date.now(),
        task: userInput,
        completed: false,
        isCompleted: false,
        
      }
      setTodos([...todos, newTask])
      setAllTodos(allTodos +1)
    }

  }
  const removeTask = (id) => {
  setTodos([...todos.filter((todo)=>todo.id !== id)])
    setAllTodos(allTodos - 1)
    
  }

  const toggleTask = (id) => {
    setTodos([...todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : { ...todo })])
     
  }

  const editTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {
      ...todo, completed: !todo.completed
    } : todo ))
  }

const editTask = (task, id) => {
    setTodos(todos.map(todo => todo.id === id ? {
      ...todo, task, completed: !todo.completed
    } : todo ))
  }

  const clearTodos = () => {
    setTodos([])
    setAllTodos(0)
    setAllComplete(0)
  }

useEffect(() => {
    setAllComplete(todos && todos.filter(todo => todo.isCompleted === true).length)
  }, [todos])

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>Daily To do list</h1>
      <hr className={styles.hr} />
      
      <Form addTask={addTask} />
      {todos && todos.map((todo) => (
        todo.completed ? (
          <Edit key={todo.id} editTodo={editTask} task={todo} />
        ) : (
            <TodoItem 
              
          todo={todo}
          key={todo.id}
          removeTask={removeTask}
              togleTask={toggleTask}
              
        editTodo={editTodo}
            />
        )
      ))}
      <div className={styles.alltodos}>
        <span>Total: {allTodos}</span>
        <span>Completed: {allComplete}</span>
      </div>
      
      <button type="button" onClick={clearTodos} className={styles.btnclear} title="Clear task" key={uuidv4()}>Clear all</button>
      <Footer/>
      
      </div>
  )
}

export default App
