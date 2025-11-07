//import the useState hook from react to manage component state
import { useState } from "react";

//create the main controller component
function App() {
  //initialize the 'number' state variable with a stating value of 1
  const [number, setNumber] = useState(1);

  //initialize 'interpretation' - a message describing the current number
  const [interpretation, setInterpretation] = useState("2 is an even number");

  //function: incrementNumber
  //Description: Increases the number by 1 and updates the interpretation
  function incrementNumber() {
    const newNumber = number + 1; //increment by 1
    setNumber(newNumber); // update the state
    interpretNumber(newNumber); //update the message
  }

  //function: decrementNumber
  //Description: Decreases the number by 1 and updates the interpretation
  function decrementNumber() {
    const newNumber = number - 1; // decrement by 1
    setNumber(newNumber); //update the state
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
    <div
      style={{
        display: "flex",
        flexDirection: "column", // Stack items vertically
        alignItems: "center", // Center horizontally
        justifyContent: "center", // Center vertically
        height: "100vh", // Take full screen height
        background: "linear-gradient(to right, #4facfe, #00f2fe)", // Gradient background
        color: "#fff", // White text
        fontFamily: "Poppins, sans-serif",
      }}
    >

<h1
        style={{
          fontSize: "2.8rem",
          letterSpacing: "1px",
          marginBottom: "30px",
          textTransform: "uppercase",
          background: "linear-gradient(to right, #ffcc70, #ff8177)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: "700",
        }}
      >
        Simple React Counter App
      </h1>

      {/*button for incrementing the number*/}
      <button
        onClick={incrementNumber}
        style={{
          backgroundColor: "#4caf50",
          color: "#fff",
          border: "none",
          padding: "15px 30px",
          fontSize: "1.5rem",
          borderRadius: "10px",
          cursor: "pointer",
          transition: "0.3s",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#43a047")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#4caf50")}
      >
        +
      </button>

      {/*display the current number*/}
      <h2 style={{ fontSize: "4rem", margin: "10px 0" }}>{number}</h2>

      {/* display the interpretation of the number */}
      <h2 style={{ fontSize: "1.5rem", marginBottom: "30px" }}>
        {interpretation}
      </h2>

      {/*button for decrementing number */}
      <button
        onClick={decrementNumber}
        style={{
          backgroundColor: "#ff4b5c",
          color: "#fff",
          border: "none",
          padding: "15px 30px",
          fontSize: "1.5rem",
          borderRadius: "10px",
          cursor: "pointer",
          transition: "0.3s",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#ff2a3a")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#ff4b5c")}
      >
        -
      </button>
    </div>
  );
}

//export the App component for use in my project
export default App;
