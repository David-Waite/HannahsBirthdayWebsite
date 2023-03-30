import "./App.css";

import Confetti from "react-confetti";
import { useState } from "react";

function App() {
  const [confetti, setConfetti] = useState(null);

  function rainConfetti() {
    setConfetti(true);
  }
  let buttonText = "";
  if (confetti == null) {
    buttonText = "Confetti time?";
  } else if (!setConfetti) {
    buttonText = "No";
  }

  return (
    <div className="App">
      {confetti && <Confetti />}
      <h1>It's your birthday🥳</h1>
      <button onClick={rainConfetti}>{buttonText}</button>
    </div>
  );
}

export default App;
