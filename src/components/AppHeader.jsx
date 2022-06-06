import React, { useState } from 'react';
import Button, { SelectButton } from './Button';
import styles from '../styles/modules/app.module.scss';
import TodoModel from './TodoModel';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilterStatus } from '../slices/todoSlices';

function AppHeader(props) {
  const [modalOpen, setModalOpen] = useState(false);
  const initialFilterStatus = useSelector((state) => state.todo.filterStatus);
  const [filterStatus, setFilterStatus] = useState(initialFilterStatus);
  const dispatch = useDispatch();


  const updateFilter = (e) => {
    dispatch(updateFilterStatus(e.target.value))
  };

  return (
    <div className={styles.appHeader}>
      <Button variant='primary' onClick={() => setModalOpen(true)}>
        Add Task
      </Button>
      <SelectButton id='status' value={filterStatus} onChange={updateFilter}>
        <option value='all'>All</option>
        <option value='incomplete'>Incomplete</option>
        <option value='complete'>complete</option>
      </SelectButton>
      <TodoModel type='add' modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}

export default AppHeader;
