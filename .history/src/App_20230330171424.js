import "./App.css";

import Confetti from "react-confetti";
import { useState } from "react";

function App() {
  const [confetti, setConfetti] = useState(null);

  function rainConfetti() {
    setConfetti(true);
  }

  function isBirthdayToday() {
    const date = new Date();

    if (date.getMonth() === 3) {
      console.log("isBirthdayToday");
    }
    return false;
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
  console.log(isBirthdayToday());
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
