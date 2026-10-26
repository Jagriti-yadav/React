import React,{useState} from 'react'
import ChildComponent from './components/ChildComponent'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const handleClick = () =>{
    setCount(count+1);
  }

  return (
    <>
    <button onClick={handleClick}>Increment:{count}</button>
    <ChildComponent count={count}/>
    </>
  )
}

export default App
