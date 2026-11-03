import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, incrementByAmount} from './features/counter/counterSlice'

function App() {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();

  function handleIncrementClick() {
    dispatch(increment())
  }

  function handleDecrementClick() {
    dispatch(decrement())
  }

  function handleIncAmountClick() {
    dispatch(incrementByAmount(Number(amount)))
  }

  return (
    <div className="container">
      <button onClick={handleIncrementClick}>+</button>

      <p>Count = {count}</p>

      <button onClick={handleDecrementClick}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
<br></br>
<br></br>

      <input type="number" value={amount} placeholder="Enter amount" onChange={(e) => setAmount(e.target.value)} />

<br></br>
<br></br>
      <button onClick={handleIncAmountClick}>Increment by amount</button>
    </div>
  )
}

export default App