import { createContext , useState } from 'react'
import ChildA from './components/ChildA'
import './App.css'

const ThemeContext = createContext();

function App() {
  const [theme,setTheme] = useState('Light');

  return (
    <>

      <ThemeContext.Provider value = {{theme,setTheme}}>
        <div class='container' style = {{backgroundColor: theme == 'Light'? 'white' : 'black', color: theme == 'Light' ? 'black' : 'white'}}>
          <ChildA/>
        </div>
        
      </ThemeContext.Provider>

    </>
  )
}

export default App
export {ThemeContext}