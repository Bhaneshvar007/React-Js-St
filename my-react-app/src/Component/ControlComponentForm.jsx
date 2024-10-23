import React, { useState } from 'react'

const ControlComponentForm = () => {


    let [input, setInput] = useState({
        name: "",
        number: "",
        age: ""
    });


    function func1(e) {
        let { name, value } = e.target;

        setInput({ ...input, [name]: value });

        console.log(input);

    }




    return (
        <div>
            <fieldset>
                <legend> Form </legend>
                Name : <input onChange={func1} type="text" name='name' value={input.name} placeholder='E:g write name...' />
                <br />
                <br />
                Number :  <input onChange={func1} type="number" name='number' value={input.number} placeholder='E:g write number...' />
                <br />
                <br />
                Age : <input onChange={func1} type="text" name='age' value={input.age} placeholder='E:g write age...' />

                <br /><br />

                <button>Submit</button>
            </fieldset>
        </div>
    )
}

export default ControlComponentForm
