import { useState } from "react";
import "./App.css"
function App() {
  const [counter,setCounter] = useState(0);
  const incrementValue = () =>{
    setCounter(counter+1);
  }
  const decrementValue = () =>{
    setCounter(counter-1);
  }

  return (
    <div className="container">
      <h2>Counter value: {counter}</h2>
      <button onClick={incrementValue} >Add value</button>
      <button onClick={decrementValue} >Decrease value</button>
    </div>
  )
}

export default App
