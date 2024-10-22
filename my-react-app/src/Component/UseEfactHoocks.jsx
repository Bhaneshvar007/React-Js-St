import React, { useEffect, useState } from 'react';


// useefact  hoock ye btata hai ki kab kab aapko apne ui ka data relode karna hai jab bhi usestate change ho 
//  Normally state change hone par sara page relode hota hai but ham chahte ki ek spacific operation par hi data relode ho tab ham use effact ka use karenge
//  UseEfact hoock me 2 chije hoti hai pahli callback function jisme hame ye batan hota hai ki hame kis code ko relode karwana hai dusra depandancy[] jo ye batati hai ki kis variable ke change hone par data relode hoga 

const UseEfactHoocks = () => {
  let [count, setCount] = useState(0);
  let [city, setCity] = useState("Jabalpur");

  console.log("This data always be relode");
  

  //  Hame chahte hai ki jab jab count ki value increse ho tab tab ye code chale esliye ham depandancy me state pass kar dege
  useEffect(() => {
    let a = 10;
    let b = 20;

    console.log("sum - " , a + b);

  }, [count]); // jis variable ko change hone par rflact karwana hai use pass krte hai
  return (
    <div>
      <h1>Count = {count}</h1>
      <button onClick={() => setCount(count + 1)}>Icr Count </button>


      <h1>{city}</h1>
      <button onClick={() => setCity("Balaghat")} >Chang City</button>
    </div>
  )
}

export default UseEfactHoocks
