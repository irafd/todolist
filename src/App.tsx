import React, { useState, useEffect, FC } from 'react';
import Form from "./Components/Form";
import styles from "./App.module.css";
import TodoItem from './Components/TodoItem';
import Edit from './Components/Edit';
import Footer from './Components/Footer';

interface Todo {
  id: number;
  task: string;
  completed: boolean;
  isCompleted: boolean;
}

const App: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [allTodos, setAllTodos] = useState<number>(0);
  const [allComplete, setAllComplete] = useState<number>(0);
  
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos') || '[]') as Todo[];
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTask = (userInput: string): void => {
    if (userInput) {
      const newTask: Todo = {
        id: Date.now(),
        task: userInput,
        completed: false,
        isCompleted: false,
      };
      setTodos([...todos, newTask]);
      setAllTodos(allTodos + 1);
    }
  };

  const removeTask = (id: number): void => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
    setAllTodos(allTodos - 1);
  };

  const toggleTask = (id: number): void => {
    setTodos([...todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : { ...todo })]);
  };

  const editTodo = (id: number): void => {
    setTodos(todos.map(todo => todo.id === id ? {
      ...todo, completed: !todo.completed
    } : todo));
  };

  const editTask = (task: string, id: number): void => {
    setTodos(todos.map(todo => todo.id === id ? {
      ...todo, task, completed: !todo.completed
    } : todo));
  };

  const clearTodos = (): void => {
    setTodos([]);
    setAllTodos(0);
    setAllComplete(0);
  };

  useEffect(() => {
    setAllComplete(todos.filter(todo => todo.isCompleted === true).length);
  }, [todos]);
  
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
            toggleTask={toggleTask}
            editTodo={editTodo}
          />
        )
      ))}
      <div className={styles.alltodos}>
        <span>New tasks: {allTodos}</span>
        <span>Completed: {allComplete}</span>
      </div>
      
      <button onClick={clearTodos} className={styles.btnclear}>Clear all</button>
      <Footer />
    </div>
  );
};

export default App;