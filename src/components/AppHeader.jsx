import React from 'react';
import Button, { SelectButton } from './Button';
import styles from '../styles/modules/app.module.scss'
import TodoModel from './TodoModel';


function AppHeader(props) {
  return (
    <div className={styles.appHeader}>
      <Button variant='primary'>Add Task</Button>
      <SelectButton id='status'>
        <option value='all'>All</option>
        <option value='incomplite'>Incomplite</option>
        <option value='complite'>Complite</option>
      </SelectButton>
      <TodoModel/>
    </div>
  );
}

export default AppHeader;
