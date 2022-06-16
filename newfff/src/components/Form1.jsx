import React, { useEffect } from 'react'
import { useState } from 'react'
import styles from "./Form1.module.css"

const inital = {
    name :"",
    age : "",
    address :"",
    Department : "",
    Salary : "",
    Martial_status: "Married",

}

const Form1 = () => {
    const [page , setPage] = useState(1);
    const [state,setState] = useState(inital)
    const [formss,setFormss] = useState([])
    // const [isChecked,setIsChecked] = useState(true);
   
    const handleabout = e =>{
        const {name, value} = e.target
        setState( { ...state, [name]: value} )
    }
    const handlesubmit = (e)=>{
        e.preventDefault()
       savedata()
      
    }
    const savedata = async()=>{
        try {
            let r = await fetch(` http://localhost:3004/forms`, {
                method : "POST",
                headers : {"content-type":"application/json"},
                body: JSON.stringify({value:state})
            }
            )
            let d = await r.json();
           console.log(d)
           handleabout(d)
           
        } catch (error) {
            
        }
    }
    useEffect(()=>{
        const showData = async() => {
            try {
                let res = await fetch(` http://localhost:3004/forms?_page=${page}&_limit=5`)
                let data = await res.json()
                console.log(data)
                setFormss(data)

                   
            } catch (error) {
                console.log(error)
            }
        }
        showData()
    },[page])
    
    // const handleChange = ()=>{
        
    //     setIsChecked(!isChecked)
        
         
    // }

  return (
    <div>
        <form onSubmit={handlesubmit}>
           
            <input type="text" placeholder='Enter Name' name="name" value={state.name} onChange={handleabout} />
           
           
            
            <input type="text" placeholder='Enter Age' name="age" value={state.age} onChange={handleabout} />
           
        
            
            <input type="text" placeholder='Enter Address'name="address"  value={state.address}  onChange={handleabout}/>
            
           
         
         <select  value={state.Department} name="Department" onChange={handleabout}> 
                <option >Department</option>
                <option >Electrical</option>
                <option >Mechanical</option>
                <option>civil</option>
            </select> 
           
            
           
          
            <input type="text" placeholder='Enter Salary' name="Salary" value={state.Salary} onChange={handleabout}/>
           
           
           
            {/* <input type="checkbox" name='Martial_status'  checked={isChecked} value={state.Martial_status} onChange={handleChange}/>married */}
       
           
           <input type="submit"  />
        </form>

        <div className={styles.flexbox}>
            <p>Name |</p>
            <p>Age |</p>
            <p>Address |</p>
            <p>Department |</p>
            <p>Salary |</p>
            <p>Martial_status</p>
        </div>


        

        {formss.map((state)=>(
            <div key={state.id} className={styles.flexbox}>
                <p>{state.value.name}</p>
                <p >{state.value.age}</p>
                <p >{state.value.address}</p>
                <p >{state.value.Department}</p>
                <p >{state.value.Salary}</p>
                <p >{state.value.Martial_status}</p>
            </div>
        ))}
    </div>
  )
}

export default Form1