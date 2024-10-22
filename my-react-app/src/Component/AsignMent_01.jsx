import React, { useEffect, useState } from 'react'

const AsignMent_01 = () => {

  let [data, setData] = useState();

  useEffect(() => {
    fetch('https://dummyjson.com/recipes').then(() => {
      return res.json();
    }).then((val) => {
      
    })
  }, [])
  return (
    <div>

    </div>
  )
}

export default AsignMent_01
