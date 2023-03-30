import "./App.css";

import Confetti from "react-confetti";
import { useState } from "react";

function App() {
  const [confetti, setConfetti] = useState(true);
  return (
    <div className="App">
      {confetti && <Confetti />}
      <h1>It's your birthday🥳</h1>
      <button></button>
    </div>
  );
}

export default App;
