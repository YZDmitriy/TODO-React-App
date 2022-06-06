import { format } from 'date-fns/esm';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { MdDelete, MdEdit } from 'react-icons/md';
import styles from '../styles/modules/todoItem.module.scss';
import { getClasses } from '../utils/getClasses';
import { deleteTodo } from '../slices/todoSlices';
import toast from 'react-hot-toast';
import TodoModel from './TodoModel';
import CheckButton from './CheckButton';

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  useEffect(() => {
    if (todo.status === 'complite') {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [todo.status]);

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
    toast.success('Todo Deleted Seccessfully');
  };

  const handleUpdate = () => {
    setUpdateModalOpen(true);
  };

  return (
    <>
      <div className={styles.item}>
        <div className={styles.todoDetails}>
          <CheckButton checked={checked} setChecked={setChecked} />
          <div className={styles.text}>
            <p
              className={getClasses([
                styles.todoText,
                todo.status === 'complete' && styles['todoText--completed'],
              ])}
            >
              {todo.title}
            </p>
            <p className={styles.time}>
              {format(new Date(todo.time), 'p, MM/dd/yyyy')}
            </p>
          </div>
        </div>
        <div className={styles.todoActions}>
          <div
            className={styles.icon}
            onClick={handleDelete}
            onKeyDown={handleDelete}
            tabIndex={0}
            role='button'
          >
            <MdDelete />
          </div>
          <div
            className={styles.icon}
            onClick={handleUpdate}
            onKeyDown={handleUpdate}
            tabIndex={0}
            role='button'
          >
            <MdEdit />
          </div>
        </div>
      </div>
      <TodoModel
        type='update'
        todo={todo}
        modalOpen={updateModalOpen}
        setModalOpen={setUpdateModalOpen}
      />
    </>
  );
}

export default TodoItem;
