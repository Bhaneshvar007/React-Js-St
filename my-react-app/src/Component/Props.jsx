import React from 'react'
import New from './New'

const Props = ({ data }) => {
    return (
        <div>
            <h2>Your recived data : {data}</h2>

            {/*  Transfer the data app.js to Props.js and Props.js to New.js */}

            <New data={data} />
        </div>
    )
}

export default Props
