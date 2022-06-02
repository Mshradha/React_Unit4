
import './App.css';
import Navbar from './components/Navbar';
import Product from './components/Product';
import About from './components/About';
import Home from './components/Home';
import Products from './components/Products';
import {Routes , Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/product' element={<Product/>}></Route>
      <Route path='/products' element={<Products/>}></Route>
      <Route path='/products/:id' element={<Product/>}></Route>
    </Routes>
    
    </div>
  );
}

export default App;
