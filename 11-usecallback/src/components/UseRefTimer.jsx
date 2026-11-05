// import React, { useState, useRef } from 'react';

// function App() {
//   const [timer, setTimer] = useState(0);
//   const timerRef = useRef(null);

//   function startTimer() {
//     if (timerRef.current !== null) return;

//     timerRef.current = setInterval(() => {
//       setTimer(prevTimer => prevTimer + 1);
//     }, 1000);
//   }

//   function stopTimer() {
//     clearInterval(timerRef.current);
//     timerRef.current = null;
//   }

//   function resetTimer() {
//     stopTimer();
//     setTimer(0);
//   }

//   return (
//     <div>
//       <h1>Stopwatch: {timer} seconds</h1>

//       <button onClick={startTimer}>Start</button>
//       <button onClick={stopTimer}>Stop</button>
//       <button onClick={resetTimer}>Reset</button>
//     </div>
//   );
// }

// export default App;
