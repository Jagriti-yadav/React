// import { useState, useMemo } from 'react';
// import './App.css';

// function App() {
//   const [count, setCount] = useState(0);

//   function expensiveTask(num) {
//     console.log("Inside Expensive Task");

//     for (let i = 0; i <= 1000000000; i++) {}

//     return num * 2;
//   }

//   const doubleValue = useMemo(() => {
//     return expensiveTask(4);
//   }, []);

//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>
//         Increment
//       </button>

//       <div>Count: {count}</div>

//       <div>Double: {doubleValue}</div>
//     </div>
//   );
// }

// export default App;
