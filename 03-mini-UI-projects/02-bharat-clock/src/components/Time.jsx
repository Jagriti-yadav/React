let Time = () => {
  let currentTime = new Date();
  return <p class='lead'>Current time is {currentTime.toLocaleDateString()} {currentTime.toLocaleTimeString()}</p>
};
export default Time;