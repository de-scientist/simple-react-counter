//import the useState from react
import { useState } from "react"

//create the controller
function App() {
  //initialize variables
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
      <h2>10 is even</h2>
      //button for decrementing a variable
      <button onClick={decrementNumber}>-</button>
    </div>
  )
}
export default App
