//import the useState from react
import { useState } from "react"

//create the controller
function App() {
  const [number, setNumber] = useState(1);
  const [interpretation, setInterpretation]
= useState('2 is an even number')

function incrementNumber() {
  setNumber(number + 1);
}

function decrementNumber() {
  setNumber(number - 1);
}
  return (
    <div>
      <button onClick={incrementNumber}>+</button>
      <h2>10</h2>
      <h2>10 is even</h2>
      <button onClick={decrementNumber}>-</button>
    </div>
  )
}
export default App
