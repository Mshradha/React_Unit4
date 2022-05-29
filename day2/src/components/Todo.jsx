import React,{useState} from 'react'

const Todo = () => {
    const [todos, setTodos] = useState([]);
  return (
    <div>Todo
        <input type="text" />
        {todos.map(todo=>{
            <div>
                {todo}
            </div>

        })}
    </div>
  )
}

export default Todo