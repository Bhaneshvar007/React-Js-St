import React, { useState } from 'react'
import UseStateComp from './Component/UseStateComp'
import Props from './Component/Props'
import UseEfactHoocks from './Component/UseEfactHoocks';
import AsignMent_01 from './Component/PrintAllDataProps';
// import './App.css'
import NavBar from './Component/NavBar/NavBar';
import CardFilterPropsState from './Component/CardFilterPropsState';
import ControlComponentForm from './Component/ControlComponentForm';
import ToDoList from './Component/ToDoList/ToDoList';
import { Route, Routes } from 'react-router-dom';



const App = () => {

  let [mealTypes, setMealType] = useState("All");




  // let data = "Parent data shared";
  return (
    <div>
      {/* <UseStateComp /> */}
      {/* <Props data={data} /> */}

      {/* <UseEfactHoocks /> */}

      {/* <PrintAllDataProps /> */}

      {/* <NavBar setMealType={setMealType} />
      <CardFilterPropsState mealTypes = {mealTypes} /> */}


      {/* <ControlComponentForm /> */}



      {/* <ToDoList /> */}


      {/* <NavBar */}


      
    </div>
  )
}

export default App