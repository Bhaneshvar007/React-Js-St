import './NavBar.css'


import React, { useState } from 'react'

const NavBar = ({setMealType}) => {

    function checkItem(e) {
        // console.log(e.target.innerText);
        setMealType(e.target.innerText);
    }
    return (
        <nav>
            <h2>⁜ React.Js</h2>

            <div className='Btns'>
                <button onClick={checkItem}>All</button>
                <button onClick={checkItem}>Lunch</button>
                <button onClick={checkItem} >Dinner</button>
                <button onClick={checkItem} >Breakfast</button>
                <button onClick={checkItem} >Snack</button>
            </div>
        </nav>
    )
}

export default NavBar
