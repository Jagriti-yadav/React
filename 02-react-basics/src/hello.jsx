// modularity
function Hello(){

  let myName = "Jagriti";
  let number = 456;
  let fullName = ()=> {
    return "Jagriti Yadav";
  }
  return <h3>
    Hello this is the future speaking. I am your master {myName}.
    My full name is {fullName()}.
    Message number is {number}.
  </h3>
}
export default Hello;