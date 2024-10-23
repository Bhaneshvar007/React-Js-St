import React, { useState } from 'react'
import './ToDoList.css'

const ToDoList = () => {

    let [input, setInput] = useState();
    let [data, setdata] = useState([]);


    function doneFun() {
        setdata([...data, input]);
        setInput('')
    }

    function deleteFun(index) {
        let newData = data.filter((val, ind) => {
            return ind !== index;
        })

        setdata(newData);
    }


    return (
        <div>
            <div>
                <fieldset>
                    <legend>To Do List</legend>

                    <input onChange={(e) => setInput(e.target.value)} type="text" value={input} placeholder='e:g text' />
                    <button onClick={doneFun}>Add</button>
                </fieldset>


                {
                    data.map((e, ind) => {
                        return (
                            <div className='newDiv'>
                                <li>{e} </li>
                                <button onClick={() => deleteFun(ind)}>✕</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ToDoList
