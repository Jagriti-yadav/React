import { useState } from 'react'
import Timer from './components/Timer.jsx'
import DataFetcher from './components/DataFetcher.jsx'
import ResizeComponents from './components/ResizeComponent.jsx'
import MultipleEffects from './components/MultipleEffects.jsx'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Timer/> */}
    {/* <DataFetcher/> */}
    {/* <ResizeComponents/> */}
    <MultipleEffects/>
    
    </>
  )
}

export default App
