import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Component/card'



function App() {

  let firstLogo = 'https://media.assettype.com/outlookbusiness/2023-11/2a4cc9e8-4fef-4ae5-a0e7-b956098aab2e/infosys.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true';

  let SecLogo = 'https://image.cnbcfm.com/api/v1/image/107171454-1672168914998-gettyimages-1245840483-PORTUGAL_ECO.jpeg?v=1702581828';

  let thirdLogo = 'https://searchengineland.com/wp-content/seloads/2024/05/google-logo-leaking-data-1920.jpg';


  return (
    <div className='flex gap-10 flex-wrap'>
      <Card company="Infosys" Location='Indore' img={firstLogo} />
      <Card company="Microsoft" Location='Pune' img={SecLogo} />
      <Card company="Google" Location='Bangluru' img={thirdLogo} />
    </div>
  )
}

export default App
