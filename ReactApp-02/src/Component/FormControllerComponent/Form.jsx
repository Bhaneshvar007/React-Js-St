import { useState } from 'react'
import './Style.css'


const Form = () => {

    let myObj = {
        name: "",
        email: "",
        password: "",
        number: ""
    }

    let [input, setInput] = useState(myObj);



    function myFun(e) {
        let { name, value } = e.target;
        setInput({ ...input, [name]: value });
        console.log(input);

    }





    return (
        <div>
            <fieldset>
                <legend><h2>Form</h2></legend>


                <input onChange={myFun} type="text" name='name' value={input.name} placeholder="Enter your name" />
                <br /><br />

                <input onChange={myFun} type="email" name='email' value={input.email} placeholder="Enter your email..." />
                <br /><br />

                <input onChange={myFun} type="password" name='password' value={input.password} placeholder="Enter your password..." />
                <br /><br />

                <input onChange={myFun} type="number" name='number' value={input.number} placeholder="Enter your number..." />
                <br /><br />

                <button>Submit</button>
            </fieldset>
        </div>
    )
}

export default Form