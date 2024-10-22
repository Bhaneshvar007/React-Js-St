import React from 'react'
import UseStateComp from './Component/UseStateComp'
import Props from './Component/Props'
import UseEfactHoocks from './Component/UseEfactHoocks';

const App = () => {
  let data = "Parent data shared";
  return (
    <div>
      {/* <UseStateComp /> */}
      {/* <Props data={data} /> */}


      <UseEfactHoocks />

    </div>
  )
}

export default App