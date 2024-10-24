import React from 'react'
import './Style.css'
import { Link } from 'react-router-dom'


const RoutNavBar = () => {
    return (
        <div>
            <nav>
                <h2>Navbar</h2>

                <div className='child'>
                    <Link to="/">
                        <li>Home</li>
                    </Link>


                    <Link to="/about">
                        <li>About</li>
                    </Link>

                    <Link to="/contect">
                        <li>Contect</li>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default RoutNavBar
