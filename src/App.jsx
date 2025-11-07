//import the useState hook from react to manage component state
import { useState } from "react"

//create the main controller component
function App() {
  //initialize the 'number' state variable with a stating value of 1
  const [number, setNumber] = useState(1);

  //initialize 'interpretation' - a message describing the current number
   const [interpretation, setInterpretation]
= useState('2 is an even number')

//function: incrementNumber
//Description: Increases the number by 1 and updates the interpretation
function incrementNumber() {
  const newNumber = number + 1; //increment by 1
  setNumber(newNumber);  // update the state
  interpretNumber(newNumber) //update the message
}

//function: decrementNumber
//Description: Decreases the number by 1 and updates the interpretation
function decrementNumber() {
  const newNumber = number - 1;  // decrement by 1
  setNumber(newNumber);     //update the state
  interpretNumber(newNumber); //update message
}

//function: interpretNumber
//Description: Checks whether a number is even or odd and updates the interpretation message
function interpretNumber(value) {
  //check if when the value is divided by 2 gives a % of 0
  if (value % 2 === 0) {
    setInterpretation(`${value} is an even number`); //message returned if the % === 0
  } else {
    setInterpretation(`${value} is an odd number`); //message returned if the % !== 0
  }
}

//JSX Layout:
//- Two buttons for incrementing/decrementing
//- Two <h2> elements for displaying the number and message

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
