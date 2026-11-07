
//USE CALLBACK HOOK
//observation =  callback hook is used to prevent unnecessary re-rendering of child component when parent component is re-rendered. It returns a memoized version of the callback function that only changes if one of the dependencies has changed.
//means jb parent component re-render hoga to child component re-render nhi hoga jb tk props change nhi hote.
//jb function ko as a prop pass krte h to child component me re-rendering hoti h even if props change nhi hote(even after using react.memo). to isse bachne ke liye usecallback hook ka use krte h.
//means if you are sending function then react.memo will not work because function is a reference type and it will be created again and again on every render. so to prevent this we use usecallback hook.


import React,{useCallback, useState} from 'react'
import ChildComponent from './components/ChildComponent'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const handleClick = useCallback(() =>{
    setCount(count+1);
  },[count])

  return (
    <div>
      <div>Count: {count}</div>
      <div>
        <button onClick={handleClick}>Increment</button>
      </div>
      <div>
        <ChildComponent buttonName="Click Child" handleClick={handleClick}/>
      </div>
    </div>
  )
}

export default App










