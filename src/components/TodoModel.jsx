import React, { useState } from 'react';
import styles from '../styles/modules/modal.module.scss';
import { MdOutlineClose } from 'react-icons/md';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { addTodo } from '../slices/todoSlices';
import { v4 as uuid } from 'uuid';

function TodoModel({ modalOpen, setModalOpen }) {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('incomplite');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && status) {
      dispatch(
        addTodo({
          id: uuid(),
          titile: title,
          status,
          time: new Date().toLocaleDateString(),
        })
      );
    }
  };

  return (
    <>
      {modalOpen && (
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <div
              className={styles.closeButton}
              onClick={() => setModalOpen(false)}
              onKeyDown={() => setModalOpen(false)}
              tabIndex={0}
              role='button'
            >
              <MdOutlineClose />
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
              <h1 className={styles.formTitle}>Add Task</h1>
              <label htmlFor='title'>
                Title
                <input
                  type='text'
                  id='title'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>
              <label htmlFor='status'>
                Status
                <select
                  name='status'
                  id='status'
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value='incomplite'>Incomplite</option>
                  <option value='complite'>Complite</option>
                </select>
              </label>
              <div className={styles.buttonContainer}>
                <Button type='submit' variant='primary'>
                  Add Task
                </Button>
                <Button
                  type='button'
                  variant='secondary'
                  onClick={() => setModalOpen(false)}
                  onKeyDown={() => setModalOpen(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default TodoModel;
