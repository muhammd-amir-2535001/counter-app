import { useState } from 'react'
import './App.css'

function App() {
  // let count = 1;

  const [count, setCount] = useState(1)
   
  const remove = () => {
    setCount(count-1)
  }

  const IncNam = () => {
    setCount(count+1)
  }

  return (
    <>
    <h1>{count}</h1>
    <button
    onClick={IncNam}
    >Add No</button>
    <br />
    <br />
     <button
    onClick={remove}
    >Remove</button>
    </>
  )
}

export default App
