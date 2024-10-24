import React from 'react'
import { useState } from 'react'

const ToDo = () => {
    let [input, setInput] = useState();
    let [data, setData] = useState([]);

    function submitFun() {
        setData([...data, input]);
        setInput('')
    }
    return (
        <div>
            <h1>To Do List</h1>
            <input type="text" name='text' onChange={(e) => { setInput(e.target.value) }} value={input} placeholder='Write something' />
            <button onClick={submitFun}>Add Data</button>

            {
                data.map((e) => {
                    return (
                        <div>
                            <li>{e}</li>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ToDo
