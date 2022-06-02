import React from 'react';
import styles from '../styles/modules/todoItem.module.scss';

function TodoItem({ todo }) {
  return (
    <div className={styles.item}>
      <div className={styles.todoDetals}>
        []
        <div className={styles.text}>
          <p>{todo.title}</p>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
