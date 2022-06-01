import React from 'react';
import Button, { SelectButton } from './Button';
import styles from '../styles/modules/app.module.scss'


function AppHeader(props) {
  return (
    <div className={styles.appHeader}>
      <Button variant='primary'>Click Me</Button>
      <SelectButton>
        <option value='all'>All</option>
        <option value='incomplite'>Incomplite</option>
        <option value='complite'>Complite</option>
      </SelectButton>
    </div>
  );
}

export default AppHeader;
