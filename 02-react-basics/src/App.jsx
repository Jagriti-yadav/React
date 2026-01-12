//component in react is basically a function 

//named 
import Hello from "./hello.jsx";
import Random from "./Random.jsx";
function App(){
  return <div>
    <h1 style={{"background-color":"grey"}}>this is a button</h1>
    
    {/* can be written as */}
    <Hello/>

    {/* reusability */}
    <Random></Random>
    <Random></Random>
    <Random></Random>
  </div>
}
export default App;