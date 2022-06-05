import React, { useEffect, useState } from 'react'

const Todo = () => {
    const [page , setPage] = useState(1);
    const [newTodo, setNewTodo] = useState("")
    const [todo , setTodo] = useState([]);
  

    const saveInfo = ()=>{
        fetch("http://localhost:3004/todos",{
            method : "POST",
            headers : {
                "content-type": "application/json",
            },
            body : JSON.stringify({
                "value" : newTodo , "isCompleted": true
            })
        })
        .then((r)=> r.json())
        .then((d)=>{
            setTodo([...todo,d])
            setNewTodo("");

        })
       
    }
   useEffect(()=>{
       const getData = async()=>{
           let r = await fetch(`http://localhost:3004/todos?_page=${page}&_limit=5`);
           let d = await r.json();
        //    console.log(d)
        setTodo(d);
       }
       getData()
   },[page])
 
    
  return (
    <div>Todo
        <div>
        <input value={newTodo} onChange={({target})=> setNewTodo(target.value)}/>
        <button onClick={saveInfo}>+</button>
        </div>
         
         
         {todo.map((todo)=>(
             <div key={todo.id}>{todo.value}</div>
         ))}

         <button onClick={()=> setPage(page-1)}>{'<'} </button>
         <button onClick={()=> setPage(page+1)}>{'>'}</button>
    </div>
   

  )
}

export default Todo