import React from 'react'
import styles from "./todo.module.css"
import TodoItem from './TodoItem';
const Todo = () => {
    let [newTodo , setNewtodo] = React.useState("");
    const [todos, setTodos] = React.useState([]);
    
    const onDelete = (id)=>{
        let newTodos = todos.filter(todo => todo.id !== id)
        setTodos(newTodos)
    }
   
  return (
    <div className={styles.div1}>Todo

<div className={styles.todoList}>
        {todos.map((todo)=> (
           <TodoItem key={todo.id} todo={todo } onDelete={onDelete}/>
           
            
        
        )
            )}
        </div>
        <input type="text" placeholder='Write Something' className={styles.inp} value ={newTodo} onChange={(e)=> setNewtodo(e.target.value)}/>
        <button onClick={()=>{
            setTodos([
            ...todos,
            { id: Date.now(), value: newTodo }
            
        ]);
        setNewtodo("");
        }}
        >+
        </button>
        <br />
        <br />
       
        
    </div>
  );
};

export default Todo