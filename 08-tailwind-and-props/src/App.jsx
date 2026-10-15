import { useState } from "react";
import Cards from "./components/Cards";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex items-center justify-center mt-4">
        <p className="text-5xl text-black rounded-xl bg-white inline-block p-4">
          Tailwind CSS
        </p>
      </div>
      <Cards username="Jagriti"/>
      <Cards username="Aakriti"/>
      
    </>
  );
}

export default App;
