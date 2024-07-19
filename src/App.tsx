import { useState } from 'react'


function App() {

  const numbers = [1, 2, 3];

  numbers.push(4);

  numbers.push("2");

  console.log(numbers);
  
  let head: number = numbers[0];

  console.log(head);


  return (
    <>
    </>
  )
}

export default App
