import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import RoutNavBar from './Component/ReactRouterDom/RoutNavBar';
import Home from './Component/ReactRouterDom/Home';
import About from './Component/ReactRouterDom/About';
import Contect from './Component/ReactRouterDom/Contect';
import Form from './Component/FormControllerComponent/Form';
import ToDo from './Component/ToDoList/ToDo';

function App() {

  return (
    <div>

      {/*  This is about the react routing */}
      {/* <RoutNavBar />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contect' element={<Contect />} />
      </Routes> */}


      {/* <Form /> */}



      {/* To Do List */}
      {/* <ToDo/> */}



      

    </div>
  )
}

export default App
