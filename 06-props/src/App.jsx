import FoodItems from "./components/FoodItems.jsx"
import ErrorMsg from "./components/ErrorMsg.jsx"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

function App() {
  let fooditems = ["rice","dal","salad","vegetable"];
  return (
    <>
    <h1>Healthy food</h1>
    <ErrorMsg food={fooditems}></ErrorMsg>
    <FoodItems food={fooditems}></FoodItems>
    </>
  )
}

export default App;
