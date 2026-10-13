import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App(){

  let [counter,setCounter] = useState(0);

  const addValue = ()=>{
    counter++;
    if(counter<=20){
      setCounter(counter);
    } 
  }
  const removeValue =()=>{
    counter--;
    if(counter >= 0){
      setCounter(counter);
    }
    
  }
  return (
    <>
    <h3> Hooks in React</h3>
    <p> Count : {counter}</p>

    <button onClick={addValue}>Add value</button>
    <button onClick={removeValue}>Remove value</button>
    </>
  )
};

export default App
