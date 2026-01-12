
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

//1. IF - ELSE statement
// function App() {

//   let foodItems = ["Rice","Dal","Salad","Milk","Vegetables"];

//   if(foodItems.length === 0){
//     return <h3>I am still hungary</h3>
//   }

//   return (
//     <>
//     <h1>List items</h1>
//       <ul className="list-group">
//         {foodItems.map((item) => (
//           <li key={item} className="list-group-item">{item}</li>
//         ))}
        
//       </ul>
//     </>
//   );
// }






//2. Ternary Operator
// function App() {

//   let foodItems = ["Rice","Dal","Salad","Milk","Vegetables"];
//   let food = (foodItems.length === 0)?<h3>I am still hungary</h3>:null;

//   return (
//     <>
//     <h1>List items</h1>
//     {food}
//       <ul className="list-group">
//         {foodItems.map((item) => (
//           <li key={item} className="list-group-item">{item}</li>
//         ))}
        
//       </ul>
//     </>
//   );
// }







//3. Logical operator
function App(){
  let foodItems = ["Rice","Dal","Salad","Milk","Vegetables"];

  return (
    <>
      <h1>List items</h1>
      {foodItems.length === 0 && <h3>I am still hungary</h3>}
      <ul className="list-group">
         {foodItems.map((item) => (
           <li key={item} className="list-group-item">{item}</li>
         ))}
        
       </ul>
    </>
  );
}

export default App
