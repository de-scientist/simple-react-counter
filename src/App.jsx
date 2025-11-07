//import the useState hook from react to manage component state
import { useState } from "react"

//create the main controller component
function App() {
  //initialize the 'number' state variable with a stating value of 1
  const [number, setNumber] = useState(1);
  const [interpretation, setInterpretation]
= useState('2 is an even number')

//add functionality for incrementing a variable onClick of the plus button
function incrementNumber() {
  setNumber(number + 1);
}

//add functionality for decrementing a variable onClick of the minus button
function decrementNumber() {
  setNumber(number - 1);
}
  return (
    <div>
      //button for incrementing a variable
      <button onClick={incrementNumber}>+</button>
      //set the number in a h2
      <h2>10</h2>
      //setInterpretation in a h2 
      <h2>10 is even</h2>
      //button for decrementing a variable
      <button onClick={decrementNumber}>-</button>
    </div>
  )
}
export default App
