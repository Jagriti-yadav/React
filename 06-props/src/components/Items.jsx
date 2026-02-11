import styles from "./Items.module.css";
//if you remove list-group-item , css written inside css-item will get displayed
const Items = (props) => {
  console.log(styles);
return (
<>

<li className={`${styles["css-item"]} list-group-item`}>{props.food}</li>
</>);
};
export default Items;