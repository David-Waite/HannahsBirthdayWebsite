import "./App.css";

import Confetti from "react-confetti";
import { useState } from "react";

function App() {
  const [confetti, setConfetti] = useState(null);

  function rainConfetti() {
    setConfetti(true);
  }
  const buttonText = "";
  if (confetti) {
    buttonText = "Yes";
  } else if (!setConfetti) {
    buttonText = "No";
  }
  return (
    <div className="App">
      {confetti && <Confetti />}
      <h1>It's your birthday🥳</h1>
      <button onClick={rainConfetti}>
        {confetti ? "Yes" : "Confetti time?"}
      </button>
    </div>
  );
}

export default App;
