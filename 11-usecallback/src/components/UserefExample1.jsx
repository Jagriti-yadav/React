//USEREF HOOK
//1.
// useref = useRef stores a value between renders.
// Updating val.current does not cause a re-render.
// // The value persists even after React re-renders.
// let val = 0 function handleIncrement() { val = val + 1 console.log("Value of val:", val) setCount(count + 1) }=> this cause val to reset to 0 after every render. So we use useRef to store the value between renders.


//2.
//You can use useRef to directly access HTML elements such as input, button, div, etc.
//3. You can use useRef to remember the previous value of a state variable.
//4. useRef can store timer IDs without triggering re-renders.
//5. Preventing unnecessary re-renders => You can store values that are needed by your component but don't need to appear in the UI.
// Example: Automatically focus an input field



// import { useState, useRef, useEffect } from 'react'

// function App() {
//   const [count, setCount] = useState(0)

//   const val = useRef(0)

//   function handleIncrement() {
//     val.current = val.current + 1

//     console.log("Value of val:", val.current)

//     setCount(count + 1)
//   }

//   const inputRef = useRef(null)

//   function handleFocus() {
//     inputRef.current.focus()
//   }

//   // Runs after every render
//   useEffect(() => {
//     console.log("Main component rendered again")
//   })

//   return (
//     <div className="container">
//       <button onClick={handleIncrement}>
//         Increment
//       </button>

//       <br /><br />

//       <div>
//         Count: {count}
//       </div>

//       <br />

//       <div>
//         Ref Value: {val.current}
//       </div>

//       <input ref={inputRef} type="text" placeholder="Enter name" />

//       <button onClick={handleFocus}>
//         Focus Input
//       </button>
//     </div>
//   )
// }

// export default App