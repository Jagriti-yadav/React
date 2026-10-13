import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";

import ToDoItems from "./components/ToDoItem";
import "./App.css";

function App() {

  const todoItems = [
    {
      name:"Buy Milk",
      dueDate:"04/10/2023",
    },
    {
      name:"Go To college",
      dueDate:"04/11/2023",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <ToDoItems todoItems={todoItems}></ToDoItems>
      
    </center>
  );
}

export default App;
