import React from 'react'
import '../App.css';

const Navbar = () => {
  return (
    <div className="App">
        <div>
            <h2>LOGOBAKERY</h2>
        </div>
        <div className='App1'>
            <p>Services</p>
            <p>Projects</p>
            <p>About</p>
        </div>
        <div>
            <button className='Shr'>Contact</button>
        </div>
    </div>
  )
}

export default Navbar