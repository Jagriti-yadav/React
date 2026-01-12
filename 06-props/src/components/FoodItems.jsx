import Items from "./Items";

const FoodItems = ({food}) => {
  
  return (
    <ul className="list-group">
      {food.map((items) => (
        <Items key={items} food={items}></Items>
      ))}
    </ul>
  );
};
export default FoodItems;
