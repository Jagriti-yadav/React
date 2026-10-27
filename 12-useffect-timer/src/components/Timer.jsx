import React,{useState,useEffect} from 'react'
const Timer = () => {
  const [count,setCount] = useState(0);

  useEffect(
    ()=>{
      const interval = setInterval(()=>{
        setCount(prev => prev + 1);
      },1000);

      return ()=>{
        alert('component unmounted');
        clearInterval(interval);
      }
    },[]
  )


  return (
    <div>
      <h1>Timer : {count}</h1>
      
    </div>
  )
}

export default Timer