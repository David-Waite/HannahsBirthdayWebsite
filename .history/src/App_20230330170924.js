import "./App.css";

import Confetti from "react-confetti";
import { useState } from "react";

function App() {
  const [birthdayToday] = useState(setBirthdayToday());
  const [confetti, setConfetti] = useState(null);

  function rainConfetti() {
    setConfetti(true);
  }

  function setBirthdayToday() {
    const date = new Date();
    console.log(date);
    console.log(date.getMonth);
    if (date.getMonth) return true;
  }

  let buttonText = "";

  if (confetti == null) {
    buttonText = "Confetti time?";
  } else if (confetti) {
    buttonText = "Yes";
  } else {
    buttonText = "Not yet";
  }
  // 5th april
  let birthdayText = "";
  const date = new Date();

  return (
    <div className="App">
      {confetti && <Confetti />}
      <h1>Happy birthday!🥳</h1>
      <button onClick={rainConfetti}>{buttonText}</button>
    </div>
  );
}

export default App;
