import React, { FC, useState } from 'react';
import styles from "./Footer.module.css";
import { v4 as uuidv4 } from 'uuid';

const Footer: FC = () => {
  const [date, setDate] = useState<string>(() => {
    const currentDate: Date = new Date();
    const month: string = (currentDate.getMonth() + 1).toString(); 
    const day: string = currentDate.getDate().toString(); 
    
    return `${currentDate.getFullYear()}-${month.length === 2 ? month : `0${month}`}-${day.length === 2 ? day : `0${day}`}`;
  });

  return (
    <div className={styles.footer}>
      <div className={styles.red} key={uuidv4()}></div>
      <input 
        placeholder='value' 
        value={date} 
        onChange={e => setDate(e.target.value)}  
        className={styles.date} 
        type="date" 
        key={uuidv4()} 
      />
    </div>
  );
}

export default Footer;