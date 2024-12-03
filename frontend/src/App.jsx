import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Signup from "./Pages/Singup";

function App() {


  return (
    <>
     <Router>
    <Routes>
      <Route   path='/login' element={<Login/>}/>
      <Route   path='/signup' element={<Signup/>}/>
      <Route path='/' element={<Home/>}/>



    </Routes>
   </Router>
    </>
  )
}

export default App
