import React, { useState } from 'react';
import Button, { SelectButton } from './Button';
import styles from '../styles/modules/app.module.scss';
import TodoModel from './TodoModel';

function AppHeader(props) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className={styles.appHeader}>
      <Button variant='primary' onClick={() => setModalOpen(true)}>
        Add Task
      </Button>
      <SelectButton id='status'>
        <option value='all'>All</option>
        <option value='incomplite'>Incomplite</option>
        <option value='complite'>Complite</option>
      </SelectButton>
      <TodoModel modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}

export default AppHeader;
