import React, {useState,useEffect} from 'react'

const MultipleEffects = () => {
  const [count,setCount] = useState(0);
  const [seconds,setSeconds] = useState(0);

  useEffect(()=>{
    console.log("count changed");
  },[count]);

  useEffect(()=>{
    const intervals = setInterval(()=>{
      setSeconds(prev => prev+1);
    },1000)
    console.log("seconds changed");

    return ()=>{
      clearInterval(intervals);
    }

  },[]);
  return (
    <div>
      <h1> Count : {count}</h1>
      <button onClick={()=>setCount(count+1)}>Click Me</button>
      <h1> Seconds : {seconds}</h1>
    </div>
  )
}

export default MultipleEffects
