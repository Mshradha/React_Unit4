import React from 'react';
import styles from "./todo.module.css"

const TodoItem = ({todo , onDelete}) => {
    const [isComplete , setIsComplete] =React.useState(todo.isComplete);
  return (
    <div  className={styles.todo} key={todo.id}>
                <input type="checkbox" checked={isComplete} onChange={(e) => {
                    setIsComplete(e.target.checked);
                }} />
                <div className={isComplete ? styles.striked : ""} >{todo.value}</div>
                <button onClick={() => onDelete(todo.id)}>Delete</button>
            </div>
  )
}

export default TodoItem
