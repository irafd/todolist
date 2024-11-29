import React, { FC, useState, ChangeEvent, FormEvent } from 'react';
import styles from './Form.module.css';
import { v4 as uuidv4 } from 'uuid';

interface EditProps {
  editTodo: (userInput: string, taskId: number) => void;
  task: { id: number };
}

const Edit: FC<EditProps> = ({ editTodo, task }) => {
  const [userInput, setUserInput] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    editTodo(userInput, task.id);
    setUserInput('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Update tasks...'
        onChange={handleChange}
        value={userInput}
        className={styles.input}
        id='gfrrus'
      />
      <button type="submit" title="Update task" className={styles.button} key={uuidv4()}>
        Update
      </button>
    </form>
  );
};

export default Edit;