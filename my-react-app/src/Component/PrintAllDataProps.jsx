// es asignment me hame api se jo data aa rha hia use screen me show karwanana hai


import React, { useEffect, useState } from 'react'

const PrintAllDataProps = () => {

  let [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/recipes').then((res) => {
      return res.json();
    }).then((val) => {
      // console.log(val.recipes);
      setData(val.recipes);

    })
  }, [])
  return (
    <div>
      {
        data.map((e) => {
          return (
            <div className='card'>
              <img src={e.image} alt="" />
              <h2>{e.name}</h2>
              <button>View Item</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default PrintAllDataProps
