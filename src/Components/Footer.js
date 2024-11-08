import React, {useState} from 'react'
import styles from "./Footer.module.css"
import { v4 as uuidv4 } from 'uuid';


function Footer() {
  const [date, setDate] = useState(() => {
    const date = new Date();
    const month = (date.getMonth()+1).toString(); 
    const day = date.getDate().toString(); 
    
    return `${date.getFullYear()}-${month.length === 2 ? month : `0${month}` }-${day.length === 2 ? day : `0${day}`}`
  })

  return (
    <div className={styles.footer}>
      <div className={styles.red} key={uuidv4()} ></div>
      <input placeholder='value' value={date} onChange={e => setDate(e.target.value)}  className={styles.date} type="date" key={uuidv4()} />
    </div>
  );
}
export default Footer