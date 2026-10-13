import ToDoItem from "./ToDoItem";

const ToDoItems = ({todoitems}) => {
  return (
  <div className="items-container">
        <ToDoItem todoName="Buy Milk" todoDate={"10/12/26"}></ToDoItem>
        <ToDoItem todoName="Go to college" todoDate={"10/12/26"}></ToDoItem>
        
      </div>
      );
};
export default ToDoItems;