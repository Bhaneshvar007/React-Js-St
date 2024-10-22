import React, { useState } from 'react'


// Pure ract me page 2 hi bar rerander hoga pahle jab page load hoga and secount ab state change hogi
// functional component + react hoock => Dynamic website
// React hoock not a part of functinal component it just react topic
const UseStateComp = () => {

    let [count, setCount] = useState(0);

    function incr() {
        setCount(count + 1);
    }


    // Togle btn
    let [togle, setTogle] = useState(true);


    // Creating a digital clock;

    let [time, setTime] = useState();
    let [date, setDate] = useState();




    setInterval(() => {
        let x = new Date().toLocaleTimeString();
        setTime(x);


        let y = new Date().toLocaleDateString();
        setDate(y);
    }); .5



    return (
        <div style={togle ? { backgroundColor: "white" } : { backgroundColor: "red" }}>
            {/* <h1>Counter =  {count}</h1> */}
            {/* <button onClick={incr}>Add</button>
      <button onClick={() => setCount(count - 1)}>Remove</button>
      <button onClick={() => setCount(0)}>reset</button> */}


            {/* Creating a toogle button */}

            {/* <button onClick={() => togle ? setTogle(false) : setTogle(true)}>Togle Btn</button> */}
            {/* <button onClick={() => setTogle(!togle)}>Togle Btn</button> */}








            {/* Digital clock */}
            <h1>Digital Clock</h1>
            <button>Date : {date}</button>
            <button>Time : {time}</button>

        </div>
    )
}

export default UseStateComp
